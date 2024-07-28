import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import './PDFGenerator.css';

const PDFGenerator = ({ studentDetails = {}, marks = {} }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    const profileImage = studentDetails.ProfileImage;

    // Check if profile image exists and is a valid URL
    if (profileImage) {
      // Add profile image to the PDF
      doc.addImage(profileImage, 'JPEG', 20, 20, 50, 50);
    }

    doc.text('Student Registration Details', 20, 80);

    doc.autoTable({
      startY: 90,
      head: [['Field', 'Value']],
      body: Object.entries(studentDetails).map(([key, value]) => {
        if (key !== 'ProfileImage') {
          return [key, value];
        }
        return null;
      }).filter(Boolean),
    });

    doc.text('Marksheet Data', 20, doc.lastAutoTable.finalY + 20);
    doc.autoTable({
      startY: doc.lastAutoTable.finalY + 30,
      head: [['Subject', 'Marks']],
      body: Object.entries(marks).map(([key, value]) => [key, value]),
    });

    doc.save('registration_details.pdf');
  };

  return (
    <div className="pdf-generator-container">
      <button onClick={generatePDF} className="btn btn-primary">Generate PDF</button>
    </div>
  );
};

export default PDFGenerator;
