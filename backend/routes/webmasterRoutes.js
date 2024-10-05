const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Webmaster = require('../models/Webmaster');  
const authWebmaster = require('../middleware/authWebmaster'); 
const Application = require('../models/Application');
const User = require('../models/User');

// Static JWT Secret
const JWT_SECRET = 'webmastertarun'; 

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: '30d' });
};

// @route   POST /api/webmasters/register
// @desc    Register a new webmaster
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const webmasterExists = await Webmaster.findOne({ email });

    if (webmasterExists) {
      return res.status(400).json({ message: 'Webmaster already exists' });
    }

    const webmaster = new Webmaster({
      name,
      email,
      password,
    });

    const savedWebmaster = await webmaster.save();

    res.status(201).json({
      _id: savedWebmaster._id,
      name: savedWebmaster.name,
      email: savedWebmaster.email,
      role: savedWebmaster.role,
      token: generateToken(savedWebmaster._id),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/webmasters/login
// @desc    Authenticate webmaster & get token
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const webmaster = await Webmaster.findOne({ email });

    if (!webmaster) {
      return res.status(404).json({ message: 'Webmaster not found' });
    }

    const isMatch = await webmaster.matchPassword(password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.json({
      _id: webmaster._id,
      name: webmaster.name,
      email: webmaster.email,
      role: webmaster.role,
      token: generateToken(webmaster._id),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/webmasters/profile
// @desc    Get webmaster profile
// @access  Private (Only accessible to authenticated webmasters)
router.get('/profile', authWebmaster, async (req, res) => {
  res.json(req.webmaster);
});

// @route   GET /api/webmasters/count
// @desc    Get total count of users and applications
// @access  Private (Only accessible by webmasters)
router.get('/count', authWebmaster, async (req, res) => {
  try {
    const applicationCount = await Application.countDocuments({});
    const userCount = await User.countDocuments({});

    res.status(200).json({
      applicationCount,
      userCount
    });
  } catch (error) {
    console.error('Error fetching counts:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
