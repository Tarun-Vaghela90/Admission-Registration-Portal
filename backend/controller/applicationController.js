const Application = require('../models/Application');
const Student = require('../models/Student');
const moment = require('moment');

// Create a new application
const createApplication = async (req, res) => {
    try {
        const { studentId, course, status, documents } = req.body;

        // Ensure the student exists
        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        // Set the deadline to 30 days from the submission date
        const submissionDate = new Date();
        const deadline = moment(submissionDate).add(30, 'days').toDate();

        const newApplication = new Application({
            student: studentId,
            course,
            status,
            documents,
            submissionDate,
            deadline
        });

        await newApplication.save();

        // Add the application to the student's applications array
        student.applications.push(newApplication._id);
        await student.save();

        res.status(201).json({ message: 'Application created successfully!', newApplication });
    } catch (error) {
        res.status(500).json({ message: 'Error creating application', error });
    }
};

// Get a specific application
const getApplication = async (req, res) => {
    try {
        const application = await Application.findById(req.params.id).populate('student').populate('documents');
        if (!application) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.status(200).json(application);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching application', error });
    }
};

// Update application status
const updateApplicationStatus = async (req, res) => {
    try {
        const { status, comments } = req.body;
        const updatedApplication = await Application.findByIdAndUpdate(req.params.id, { status, comments, reviewDate: Date.now() }, { new: true });
        if (!updatedApplication) {
            return res.status(404).json({ message: 'Application not found' });
        }
        res.status(200).json({ message: 'Application status updated successfully', updatedApplication });
    } catch (error) {
        res.status(500).json({ message: 'Error updating application status', error });
    }
};

// Get all applications
const getAllApplications = async (req, res) => {
    try {
        const applications = await Application.find().populate('student');
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching applications', error });
    }
};

module.exports = {
    createApplication,
    getApplication,
    updateApplicationStatus,
    getAllApplications
};
