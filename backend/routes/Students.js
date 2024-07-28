const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');

// Register a new student
router.post('/register', studentController.registerStudent);

// Student login
router.post('/login', studentController.loginStudent);

// Get student profile
router.get('/profile/:id', studentController.getStudentProfile);

// Update student profile
router.put('/profile/:id', studentController.updateStudentProfile);

// Get all applications for a student
router.get('/:id/applications', studentController.getStudentApplications);

module.exports = router;
