import { useState, useEffect } from 'react';
import { Button, Table, Modal, Tooltip, OverlayTrigger } from 'react-bootstrap';
import axios from 'axios';
import * as XLSX from 'xlsx'; // Import XLSX
import '../Dashboard/css/StudentApplication.css';

const Application = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApplications = async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.get('http://localhost:5000/collageAdminApplication/applications', {
        headers: {
          'authToken': authToken // Use lowercase 'authToken' as per your backend
        },
      });

      setApplications(response.data);
    } catch (error) {
      setError('Failed to fetch applications. Please try again later.');
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleView = (application) => {
    setSelectedApplication(application);
    setShowModal(true);
  };

  const handleApprove = async (id) => {
    if (!window.confirm('Are you sure you want to approve this application?')) return;

    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.put(`http://localhost:5000/collageAdminApplication/applications/${id}`, {
        status: 'approved',
      }, {
        headers: {
          'authToken': authToken
        },
      });

      if (response.status === 200) {
        fetchApplications();
      } else {
        console.error('Failed to approve application');
      }
    } catch (error) {
      console.error('Error approving application:', error);
    }
  };

  const handleReject = async (id) => {
    if (!window.confirm('Are you sure you want to reject this application?')) return;

    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.put(`http://localhost:5000/collageAdminApplication/applications/${id}`, {
        status: 'rejected',
      }, {
        headers: {
          'authToken': authToken
        },
      });

      if (response.status === 200) {
        fetchApplications();
      } else {
        console.error('Failed to reject application');
      }
    } catch (error) {
      console.error('Error rejecting application:', error);
    }
  };

  const handleCloseModal = () => setShowModal(false);

  // Function to download applications as Excel
  const handleDownloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(applications.map(app => ({
      ID: app._id,
      Name: `${app.firstName} ${app.lastName}`,
      Email: app.email,
      Mobile: app.mobileNumber,
      Course: app.courseName,
      Gender: app.gender,
      Status: app.status,
      SubmissionDate: new Date(app.submissionDate).toLocaleDateString(),
      Deadline: new Date(app.deadline).toLocaleDateString(),
    })));

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Applications');

    // Generate Excel file and prompt download
    XLSX.writeFile(workbook, 'Applications.xlsx');
  };

  return (
    <div className='container-fluid px-4 py-3' id='pdf-content'>
      <h6 className='text-success fs-4'>List of Student Applications</h6>
      <Button variant="success" onClick={handleDownloadExcel} className="mb-3">
        Download Applications as Excel 
      </Button>
      {loading ? (
        <p>Loading applications...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : (
        <Table bordered hover responsive className='table-centered'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={app._id}>
                <td>{index + 1}</td>
                <td>{`${app.firstName} ${app.lastName}`}</td>
                <td>{app.status}</td>
                <td className="actions">
                  <OverlayTrigger
                    overlay={<Tooltip id={`tooltip-view-${index}`}>View Details</Tooltip>}
                  >
                    <Button variant="info" onClick={() => handleView(app)}>
                      <i className="bi bi-person-bounding-box"></i>
                    </Button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    overlay={<Tooltip id={`tooltip-approve-${index}`}>Approve</Tooltip>}
                  >
                    <Button variant="success" onClick={() => handleApprove(app._id)}>
                      <i className="bi bi-check"></i>
                    </Button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    overlay={<Tooltip id={`tooltip-reject-${index}`}>Reject</Tooltip>}
                  >
                    <Button variant="danger" onClick={() => handleReject(app._id)}>
                      <i className="bi bi-x"></i>
                    </Button>
                  </OverlayTrigger>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {selectedApplication && (
        <Modal show={showModal} onHide={handleCloseModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Application Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>ID:</strong> {selectedApplication._id}</p>
            <p><strong>Name:</strong> {`${selectedApplication.firstName} ${selectedApplication.lastName}`}</p>
            <p><strong>Email:</strong> {selectedApplication.email}</p>
            <p><strong>Mobile:</strong> {selectedApplication.mobileNumber}</p>
            <p><strong>Course:</strong> {selectedApplication.courseName}</p>
            <p><strong>Gender:</strong> {selectedApplication.gender}</p>

            <p><strong>Documents:</strong></p>
            {selectedApplication.files.length > 0 ? (
              selectedApplication.files.map((file, index) => (
                <a 
                  key={index} 
                  href={`http://localhost:5000/${file}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Document {index + 1}
                </a>
              ))
            ) : (
              <p>No documents uploaded.</p>
            )}

            <p><strong>Submission Date:</strong> {new Date(selectedApplication.submissionDate).toLocaleDateString()}</p>
            <p><strong>Deadline:</strong> {new Date(selectedApplication.deadline).toLocaleDateString()}</p>
            <p><strong>Status:</strong> {selectedApplication.status}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Application;
