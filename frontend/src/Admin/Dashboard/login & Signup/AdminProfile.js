import { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';
// import '../Dashboard/css/AdminProfile.css';

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
    return <p>Loading profile...</p>;
  }

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  return (
    <div className='container rounded-5 bg-grey pt-2'>
      <h2>Admin Profile</h2>
      <p><strong>ID:</strong> {admin._id}</p>
      <p><strong>Username:</strong> {admin.username}</p>
      <p><strong>College Name:</strong> {admin.collegeName}</p>
      <Button variant="info" onClick={handleEdit}>Edit Profile</Button>

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
