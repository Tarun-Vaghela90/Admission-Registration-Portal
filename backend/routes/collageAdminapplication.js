const express = require('express');
const Application = require('../models/Application');
const adminAuth = require('../middleware/adminAuth');
const router = express.Router();
const sendEmailNotification = require('../utils/mailer'); // Import mailer utility

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
// router.put('/applications/:id', adminAuth, async (req, res) => {
//   const { status } = req.body; // status should be either 'approved' or 'rejected'

//   try {
//     const application = await Application.findById(req.params.id);

//     // Check if the application belongs to the admin's college
//     if (application && application.collegeName === req.admin.collegeName) {

//       // Check if the status is the same as the current status
//       if (application.status === status) {
//         return res.status(400).json({ 
//           message: `Application is already ${status}, no need to update.` 
//         });
//       }

//       // If the current status is "pending" and it's being changed to 'approved' or 'rejected'
//       if (application.status === 'pending' && (status === 'approved' || status === 'rejected')) {
//         // Extend the deadline only once
//         const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
//         application.deadline = new Date(application.deadline.getTime() + oneWeekInMilliseconds);
//       }

//       // Update the application status
//       application.status = status;

//       // Save the updated application
//       await application.save();

//       // Send email notification to the applicant
//       sendEmailNotification(
//         application.email,  // User email
//         'Application Status Update',
//         `Your application status has been updated to: ${status}.`
//       );

//       res.json({ message: "Application status updated and email sent", application });
      
//     } else {
//       res.status(403).json({ error: "You do not have permission to update this application" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Error updating application" });
//   }
// });
// Update an application status (only if it's for the admin's college)
router.put('/applications/:id', adminAuth, async (req, res) => {
  const { status } = req.body; // status should be either 'approved' or 'rejected'

  try {
    const application = await Application.findById(req.params.id);

    // Check if the application belongs to the admin's college
    if (application && application.collegeName === req.admin.collegeName) {

      // Check if the status is the same as the current status
      if (application.status === status) {
        return res.status(400).json({ 
          message: `Application is already ${status}, no need to update.` 
        });
      }

      // If the current status is "pending" and it's being changed to 'approved' or 'rejected'
      if (application.status === 'pending' && (status === 'approved' || status === 'rejected')) {
        const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
        application.deadline = new Date(application.deadline.getTime() + oneWeekInMilliseconds);
      }

      // Update the application status
      application.status = status;

      // Save the updated application
      await application.save();

      console.log(application.firstName)
      // Send email notification with updated status, name, and application ID
      const applicantFullName = `${application.firstName} ${application.lastName}`;
      sendEmailNotification(
        application.email,  // Applicant's email
        'Application Status Update',
        {
          name: applicantFullName,  // Full name of the applicant
          applicationId: application._id,  // Application ID
          status: status  // New status (approved/rejected)
        }
      );
      

      res.json({ message: "Application status updated and email sent", application });
      
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

// Count applications by status for the admin's college
router.get('/admincollege/applications/counts', adminAuth, async (req, res) => {
  try {
    const collegeName = req.admin.collegeName;

    // Get total application count
    const totalApplications = await Application.countDocuments({ collegeName });

    // Get accepted application count
    const acceptedApplications = await Application.countDocuments({ 
      collegeName, 
      status: 'approved' 
    });

    // Get rejected application count
    const rejectedApplications = await Application.countDocuments({ 
      collegeName, 
      status: 'rejected' 
    });

    // Respond with all counts
    res.json({
      totalApplications,
      acceptedApplications,
      rejectedApplications
    });
  } catch (error) {
    res.status(500).json({ error: "Error retrieving application counts" });
  }
});

module.exports = router;
