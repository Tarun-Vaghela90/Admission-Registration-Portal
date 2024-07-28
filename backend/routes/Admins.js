const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');
const auth = require('../middleware/auth');

// Register a new admin
router.post('/register', adminController.registerAdmin);

// Admin login
router.post('/login', adminController.loginAdmin);

// Get admin profile
router.get('/:id', auth, adminController.getAdminProfile);

// Update admin profile
router.put('/:id', auth, adminController.updateAdminProfile);

// Get all applications
router.get('/applications', auth, adminController.getAllApplications);

// Update application status
router.put('/applications/:id', auth, adminController.updateApplicationStatus);

module.exports = router;
