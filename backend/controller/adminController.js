const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const Application = require('../models/Application');

// Register a new admin
const registerAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if the admin already exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new admin
        const newAdmin = new Admin({
            name,
            email,
            password: hashedPassword
        });

        await newAdmin.save();

        res.status(201).json({ message: 'Admin registered successfully!', newAdmin });
    } catch (error) {
        res.status(500).json({ message: 'Error registering admin', error });
    }
};

// Admin login
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the admin exists
        const admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Create a JWT token
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};

// Get admin profile
const getAdminProfile = async (req, res) => {
    try {
        const admin = await Admin.findById(req.adminId).select('-password');
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.status(200).json(admin);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching admin profile', error });
    }
};

// Update admin profile
const updateAdminProfile = async (req, res) => {
    try {
        const { name, email } = req.body;

        // Find the admin and update their profile
        const updatedAdmin = await Admin.findByIdAndUpdate(req.adminId, { name, email }, { new: true }).select('-password');
        if (!updatedAdmin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.status(200).json({ message: 'Profile updated successfully', updatedAdmin });
    } catch (error) {
        res.status(500).json({ message: 'Error updating profile', error });
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

module.exports = {
    registerAdmin,
    loginAdmin,
    getAdminProfile,
    updateAdminProfile,
    getAllApplications,
    updateApplicationStatus
};
