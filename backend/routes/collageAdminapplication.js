const express = require('express');
const Application = require('../models/Application');
const adminAuth = require('../middleware/adminAuth');
const router = express.Router();

// View all applications for the admin's college
router.get('/applications', adminAuth, async (req, res) => {
  try {
    const applications = await Application.find({ collegeName: req.admin.collegeName });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving applications" });
  }
});

// Update an application status (only if it's for the admin's college)
router.put('/applications/:id', adminAuth, async (req, res) => {
  const { status } = req.body; // status should be either 'approved' or 'rejected'

  try {
    const application = await Application.findById(req.params.id);

    // Check if the application belongs to the admin's college
    if (application && application.collegeName === req.admin.collegeName) {
      application.status = status;
      await application.save();
      res.json({ message: "Application status updated", application });
    } else {
      res.status(403).json({ error: "You do not have permission to update this application" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error updating application" });
  }
});

// Delete an application (only if it's for the admin's college)
router.delete('/applications/:id', adminAuth, async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);

    // Check if the application belongs to the admin's college
    if (application && application.collegeName === req.admin.collegeName) {
      await application.remove();
      res.json({ message: "Application deleted successfully" });
    } else {
      res.status(403).json({ error: "You do not have permission to delete this application" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error deleting application" });
  }
});

// Get a single application by ID (only if it's for the admin's college)
router.get('/applications/:id', adminAuth, async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);

    // Check if the application belongs to the admin's college
    if (application && application.collegeName === req.admin.collegeName) {
      res.json(application);
    } else {
      res.status(403).json({ error: "You do not have permission to view this application" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error retrieving application" });
  }
});

module.exports = router;
