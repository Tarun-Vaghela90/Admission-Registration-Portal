import { useState, useEffect } from 'react';
import { Button, Form, Modal, Spinner } from 'react-bootstrap';
import axios from 'axios';
import './AdminProfile.css'; // Ensure this CSS file is included for custom styling

const AdminProfile = () => {
  const [admin, setAdmin] = useState(null);
  const [username, setUsername] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch admin profile
  const fetchProfile = async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.get('http://localhost:5000/collageAdminuser/profile', {
        headers: {
          'AuthToken': authToken, // Make sure your token is correctly passed here
        },
      });
      setAdmin(response.data);
      setUsername(response.data.username);
    } catch (err) {
      setError("Error fetching admin profile.");
      console.error("Fetch error details: ", err.response ? err.response.data : err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile(); // Call fetchProfile when component mounts
  }, []);

  const handleEdit = () => setShowModal(true);

  const handleCloseModal = () => setShowModal(false);

  const handleUpdate = async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.put('http://localhost:5000/collageAdminuser/profile', {
        username: username, // You can add more fields here if necessary
      }, {
        headers: {
          'AuthToken': authToken,
        },
      });
      setAdmin(response.data.admin); // Update the admin state with the new data
      handleCloseModal(); // Close the modal after updating
    } catch (err) {
      console.error("Error updating profile: ", err.response ? err.response.data : err.message);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  return (
    <div className="container-fluid p-4">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="bg-white p-4 rounded-3 shadow-sm">
            <h2 className="text-center text-primary mb-4">Admin Profile</h2>
            <div className="profile-info mb-3">
              <p><strong>ID:</strong> {admin._id}</p>
              <p><strong>Username:</strong> {admin.username}</p>
              <p><strong>College Name:</strong> {admin.collegeName}</p>
            </div>
            <div className="text-center">
              <Button variant="info" onClick={handleEdit} className="btn-lg">Edit Profile</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="rounded-3"
              />
            </Form.Group>
            {/* You can add more fields here, such as for password */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminProfile;
