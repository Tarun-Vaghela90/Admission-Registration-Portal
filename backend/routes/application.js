const express = require('express');
const multer = require('multer');
const fetchuser = require('../middleware/fetchuser');
const Application = require('../models/Application');
const router = express.Router();

// Set up multer for file uploads with validation
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// File filter to restrict to PDF and image formats only
const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ['application/pdf', 'image/jpeg', 'image/png'];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only PDF, JPEG, and PNG are allowed.'));
  }
};

// Multer configuration with file size limit and file count limit
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024, files: 3 }, // Limit to 3 files and 5MB each
  fileFilter: fileFilter // Filter files to allow only PDFs or images
});

// Create an application (User Route)
router.post('/apply', fetchuser, upload.array('files', 3), async (req, res) => {
  try {
    const { firstName, lastName, mobileNumber, email, courseName, gender, collegeName } = req.body;

    // Set deadline to 7 days from the current date
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 7);

    const newApplication = new Application({
      firstName,
      lastName,
      mobileNumber,
      email,
      courseName,
      gender,
      collegeName,
      userId: req.user.id, // Ensure to associate with the authenticated user
      deadline, // Set the deadline as 7 days from now
      files: req.files.map(file => file.path) // Save file paths from the uploaded files
    });

    await newApplication.save();
    res.status(201).json({ message: "Application submitted successfully", application: newApplication });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: "Error submitting the application" });
  }
});

// Get all applications for the logged-in user
router.get('/my-applications', fetchuser, async (req, res) => {
  try {
    const applications = await Application.find({ userId: req.user.id });
    res.json(applications);
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: "Error retrieving applications" });
  }
});

// Error handling for multer and custom file type validation
router.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // Handle multer-specific errors
    res.status(400).json({ message: err.message });
  } else if (err.message === 'Invalid file type. Only PDF, JPEG, and PNG are allowed.') {
    // Handle invalid file type error
    res.status(400).json({ message: err.message });
  } else {
    next(err); // Pass other errors to the default error handler
  }
});

module.exports = router;
