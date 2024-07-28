const express = require('express');
const router = express.Router();
const applicationController = require('../controller/applicationController');
const auth = require('../middleware/auth');

// Create a new application
router.post('/', auth, applicationController.createApplication);

// Get a specific application
router.get('/:id', auth, applicationController.getApplication);

// Update application status
router.put('/:id', auth, applicationController.updateApplicationStatus);

// Get all applications
router.get('/', auth, applicationController.getAllApplications);

module.exports = router;
