import { useState, useEffect } from 'react';
import { Button, Table, Modal } from 'react-bootstrap';
import '../Dashboard/css/StudentApplication.css';

// Example application data
const initialData = [
  {
    id: 1,
    name: 'John Doe',
    status: 'Pending',
    profile: 'Profile1',
    first: 'John',
    last: 'Doe',
    document: 'http://example.com/docs/doc1.pdf', // URL to document
    details: 'Details1'
  },
  {
    id: 2,
    name: 'Jane Smith',
    status: 'Pending',
    profile: 'Profile2',
    first: 'Jane',
    last: 'Smith',
    document: 'http://example.com/docs/doc2.pdf', // URL to document
    details: 'Details2'
  },
  // Add more applications as needed
];

const Application = () => {
  const [applications, setApplications] = useState(initialData);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch applications from an API if needed
    // Example: fetchApplications();
  }, []);

  const handleView = (application) => {
    setSelectedApplication(application);
    setShowModal(true);
  };

  const handleApprove = (id) => {
    setApplications(applications.map(app =>
      app.id === id ? { ...app, status: 'Approved' } : app
    ));
  };

  const handleReject = (id) => {
    setApplications(applications.map(app =>
      app.id === id ? { ...app, status: 'Rejected' } : app
    ));
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className='container rounded-5 bg-grey pt-2' id='pdf-content'>
      <h6 className='text-success fs-4'>List of Student Applications</h6>
      <Table  bordered hover className='table-centered '>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td>{app.id}</td>
              <td>{app.name}</td>
              <td>{app.status}</td>
              <td className="actions">
                <Button variant="info" onClick={() => handleView(app)}><i className="bi bi-person-bounding-box"></i></Button>
                <Button variant="success" onClick={() => handleApprove(app.id)}><i className="bi bi-check"></i></Button>
                <Button variant="danger" onClick={() => handleReject(app.id)}><i className="bi bi-x"></i></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {selectedApplication && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Application Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>ID:</strong> {selectedApplication.id}</p>
            <p><strong>Name:</strong> {selectedApplication.name}</p>
            <p><strong>Profile:</strong> {selectedApplication.profile}</p>
            <p><strong>First Name:</strong> {selectedApplication.first}</p>
            <p><strong>Last Name:</strong> {selectedApplication.last}</p>
            <p><strong>Document:</strong> <a href={selectedApplication.document} target="_blank" rel="noopener noreferrer">View Document</a></p>
            <p><strong>Details:</strong> {selectedApplication.details}</p>
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
