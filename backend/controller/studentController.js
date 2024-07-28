const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Student = require('../models/Student');

// Register a new student
exports.registerStudent = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if the student already exists
        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return res.status(400).json({ message: 'Student already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new student
        const newStudent = new Student({
            name,
            email,
            password: hashedPassword
        });

        await newStudent.save();

        res.status(201).json({ message: 'Student registered successfully!', newStudent });
    } catch (error) {
        res.status(500).json({ message: 'Error registering student', error });
    }
};

// Student login
exports.loginStudent = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the student exists
        const student = await Student.findOne({ email });
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, student.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Create a JWT token
        const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};

// Get student profile
exports.getStudentProfile = async (req, res) => {
    try {
        const student = await Student.findById(req.studentId).select('-password');
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching student profile', error });
    }
};

// Update student profile
exports.updateStudentProfile = async (req, res) => {
    try {
        const { name, email } = req.body;

        // Find the student and update their profile
        const updatedStudent = await Student.findByIdAndUpdate(req.studentId, { name, email }, { new: true }).select('-password');
        if (!updatedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Profile updated successfully', updatedStudent });
    } catch (error) {
        res.status(500).json({ message: 'Error updating profile', error });
    }
};

// Get all applications for a student
exports.getStudentApplications = async (req, res) => {
    try {
        const applications = await Application.find({ student: req.studentId });
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching applications', error });
    }
};
