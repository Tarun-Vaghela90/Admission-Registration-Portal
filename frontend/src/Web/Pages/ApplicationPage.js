import React, { useState, useEffect } from 'react';
import './css/ApplicationPage.css'; // Custom CSS for styling
import axios from 'axios';
import { Spinner, Table, Alert, Button } from 'react-bootstrap';
import jsPDF from 'jspdf';

const ApplicationPage = () => {
  const [appliedColleges, setAppliedColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [approvedApplications, setApprovedApplications] = useState([]);

  useEffect(() => {
    const fetchAppliedColleges = async () => {
      try {
        const authToken = localStorage.getItem('authToken'); // Get token from local storage
        const response = await axios.get('http://localhost:5000/userApplication/my-applications', {
          headers: {
            'authToken': authToken // Send the token in headers
          },
        });

        setAppliedColleges(response.data); // Assuming response data is an array of college applications
      } catch (error) {
        setError('Failed to fetch applied colleges. Please try again later.');
        console.error('Error fetching data:', error); // Log the error for debugging
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchAppliedColleges(); // Call the function to fetch data
  }, []);

  const currentDate = new Date();
  const filteredColleges = appliedColleges.filter(college => {
    const submissionDate = new Date(college.submissionDate);
    const deadlineDate = new Date(college.deadline);
    return submissionDate <= currentDate && deadlineDate >= currentDate;
  });

  useEffect(() => {
    const approved = filteredColleges.filter(college => college.status === 'approved');
    setApprovedApplications(approved);
  }, [filteredColleges]);

  // Function to generate individual PDF for each application
  const generatePDF = (application) => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
  
    // Add Header with University Title
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(40, 40, 40);
    doc.text("University of Excellence", pageWidth / 2, 20, { align: "center" });
  
    // Add a horizontal line
    doc.setLineWidth(0.5);
    doc.line(20, 25, pageWidth - 20, 25);
  
    // Add Application Title
    doc.setFontSize(14);
    doc.setTextColor(50, 50, 50);
    doc.text("Application Details", pageWidth / 2, 35, { align: "center" });
  
    // Add Applicant Details in a Table Format
    const details = [
      ["First Name", application.firstName],
      ["Last Name", application.lastName],
      ["Course Name", application.courseName],
      ["College Name", application.collegeName],
      ["Submission Date", new Date(application.submissionDate).toLocaleDateString()],
      ["Deadline", new Date(application.deadline).toLocaleDateString()],
      ["Status", application.status],
    ];
  
    let startY = 50;
    doc.setFont("helvetica", "normal");
    details.forEach(([label, value]) => {
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      doc.text(`${label}:`, 25, startY);
      doc.setTextColor(80, 80, 80);
      doc.text(value, 70, startY);
      startY += 10;
    });
  
    // Add Approval Section
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 128, 0); // Green text
    doc.text("Approved by University", pageWidth / 2, startY + 20, { align: "center" });
  
    // Add Footer
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(10);
    doc.text("This is a system-generated document. Contact the university for further details.", pageWidth / 2, 280, {
      align: "center",
    });
  
    // Add Border
    doc.setDrawColor(0);
    doc.rect(10, 10, pageWidth - 20, 280);
  
    // Save the PDF
    doc.save(`${application.firstName}_${application.collegeName}_Application.pdf`);
  };
  

  return (
    <div className="application-container container mt-5">
      <h2 className="text-center text-primary mb-4">Your College Applications</h2>
      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : error ? (
        <Alert variant="danger" className="text-center">{error}</Alert>
      ) : (
        <Table striped bordered hover responsive className="shadow-sm">
          <thead className="bg-primary text-white">
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Course Name</th>
              <th>College Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredColleges.length > 0 ? (
              filteredColleges.map((college, index) => (
                <tr key={college._id}>
                  <td>{index + 1}</td>
                  <td>{college.firstName}</td>
                  <td>{college.lastName}</td>
                  <td>{college.courseName}</td>
                  <td>{college.collegeName}</td>
                  <td>
                    <span className={`badge ${college.status === 'approved' ? 'bg-success' : 'bg-warning'}`}>
                      {college.status}
                    </span>
                  </td>
                  <td>
                    {college.status === 'approved' && (
                      <Button
                        variant="success"
                        size="sm"
                        onClick={() => generatePDF(college)}
                      >
                        Download PDF
                      </Button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">You have not applied to any colleges yet.</td>
              </tr>
            )}
          </tbody>
        </Table>
      )}

      {approvedApplications.length > 0 && (
        <Alert variant="success" className="mt-4 shadow-sm">
          <h5 className="text-center">🎉 Approved Applications</h5>
          <ul className="list-unstyled mt-3">
            {approvedApplications.map((application, index) => (
              <li key={index} className="mb-2">
                <strong>{application.firstName}</strong> has been approved for <strong>{application.courseName}</strong> at <strong>{application.collegeName}</strong>.
              </li>
            ))}
          </ul>
        </Alert>
      )}
    </div>
  );
};

export default ApplicationPage;
