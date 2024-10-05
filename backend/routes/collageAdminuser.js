const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const adminAuth = require('../middleware/adminAuth');
const router = express.Router();

const JWT_SECRET = "collageAdmintarun";

// Admin Signup
router.post('/signup', async (req, res) => {
  const { username, password, collegeName } = req.body;

  try {
    // Check if admin already exists
    let admin = await Admin.findOne({ username });
    if (admin) {
      return res.status(400).json({ error: "Admin already exists" });
    }

    // Create a new admin
    const hashedPassword = await bcrypt.hash(password, 10);
    admin = new Admin({
      username,
      password: hashedPassword,
      collegeName
    });

    await admin.save();

    // Generate a JWT token
    const data = { id: admin.id };
    const authToken = jwt.sign(data, JWT_SECRET);

    res.status(201).json({ authToken });
  } catch (error) {
    res.status(500).json({ error: "Error creating admin" });
  }
});

// Admin Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if admin exists
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate a JWT token
    const data = { id: admin.id };
    const authToken = jwt.sign(data, JWT_SECRET);

    res.json({ authToken });
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
});

// Admin Profile - Get Admin Details
router.get('/profile', adminAuth, async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id).select('-password');
    res.json(admin);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving admin profile" });
  }
});

// Admin Update Profile
router.put('/profile', adminAuth, async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the admin by ID
    const admin = await Admin.findById(req.admin.id);
    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    // Update admin details
    admin.username = username || admin.username;

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      admin.password = hashedPassword;
    }

    await admin.save();
    res.json({ message: "Profile updated successfully", admin });
  } catch (error) {
    res.status(500).json({ error: "Error updating profile" });
  }
});

// Admin Delete Account
router.delete('/profile', adminAuth, async (req, res) => {
  try {
    await Admin.findByIdAndDelete(req.admin.id);
    res.json({ message: "Admin account deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting account" });
  }
});

module.exports = router;


//----------------copy---//


// const express = require('express');
// const Application = require('../models/Application');
// const adminAuth = require('../middleware/adminAuth');
// const router = express.Router();

// // View all applications for the admin's college
// router.get('/applications', adminAuth, async (req, res) => {
//   try {
//     const applications = await Application.find({ collegeName: req.admin.collegeName });
//     res.json(applications);
//   } catch (error) {
//     res.status(500).json({ error: "Error retrieving applications" });
//   }
// });

// // Update an application status (only if it's for the admin's college)
// router.put('/applications/:id', adminAuth, async (req, res) => {
//   const { status } = req.body; // status should be either 'approved' or 'rejected'

//   try {
//     const application = await Application.findById(req.params.id);

//     // Check if the application belongs to the admin's college
//     if (application && application.collegeName === req.admin.collegeName) {
//       application.status = status;
//       await application.save();
//       res.json({ message: "Application status updated", application });
//     } else {
//       res.status(403).json({ error: "You do not have permission to update this application" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Error updating application" });
//   }
// });

// // Delete an application (only if it's for the admin's college)
// router.delete('/applications/:id', adminAuth, async (req, res) => {
//   try {
//     const application = await Application.findById(req.params.id);

//     // Check if the application belongs to the admin's college
//     if (application && application.collegeName === req.admin.collegeName) {
//       await application.remove();
//       res.json({ message: "Application deleted successfully" });
//     } else {
//       res.status(403).json({ error: "You do not have permission to delete this application" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Error deleting application" });
//   }
// });

// // Get a single application by ID (only if it's for the admin's college)
// router.get('/applications/:id', adminAuth, async (req, res) => {
//   try {
//     const application = await Application.findById(req.params.id);

//     // Check if the application belongs to the admin's college
//     if (application && application.collegeName === req.admin.collegeName) {
//       res.json(application);
//     } else {
//       res.status(403).json({ error: "You do not have permission to view this application" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Error retrieving application" });
//   }
// });

// module.exports = router;
