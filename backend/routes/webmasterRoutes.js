const express = require('express');
const { Webmaster, College } = require('../models/Webmaster'); // Ensure this model file exists
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchWebmaster = require('../middleware/fetchWebmaster');
const router = express.Router();

const JWT_SECRET = 'webmastertarun'; // JWT key mentioned directly here

// ROUTE 1: Webmaster Signup
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let webmaster = await Webmaster.findOne({ email });
        if (webmaster) {
            return res.status(400).json({ error: 'Webmaster already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const secPassword = await bcrypt.hash(password, salt);

        webmaster = new Webmaster({
            name,
            email,
            password: secPassword
        });

        await webmaster.save();

        const data = {
            webmaster: {
                id: webmaster.id
            }
        };

        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken });

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

// ROUTE 2: Webmaster Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const webmaster = await Webmaster.findOne({ email });
        if (!webmaster) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const passwordCompare = await bcrypt.compare(password, webmaster.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const data = {
            webmaster: {
                id: webmaster.id
            }
        };

        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({ authToken });

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

// ROUTE 3: Get Webmaster Profile (Protected)
router.get('/profile', fetchWebmaster, async (req, res) => {
    try {
        const webmasterId = req.webmaster.id;
        const webmaster = await Webmaster.findById(webmasterId).select('-password');
        res.json(webmaster);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

// ROUTE 4: Create a New College (Protected)
router.post('/college', fetchWebmaster, async (req, res) => {
    try {
        const { title, text, updated, location, description, courses, fees, imageUrl } = req.body;
        const college = new College({
            title,
            text,
            updated,
            location,
            description,
            courses,
            fees,
            imageUrl
        });

        const savedCollege = await college.save();
        res.json(savedCollege);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

// ROUTE 5: Get All Colleges
router.get('/colleges', async (req, res) => {
    try {
        const colleges = await College.find();
        res.json(colleges);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

// ROUTE 6: Update College by ID (Protected)
router.put('/college/:id', fetchWebmaster, async (req, res) => {
    try {
        const { title, text, updated, location, description, courses, fees, imageUrl } = req.body;
        let college = await College.findById(req.params.id);

        if (!college) {
            return res.status(404).send('College not found');
        }

        const updatedCollege = {
            title,
            text,
            updated,
            location,
            description,
            courses,
            fees,
            imageUrl
        };

        college = await College.findByIdAndUpdate(req.params.id, { $set: updatedCollege }, { new: true });
        res.json(college);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

// ROUTE 7: Delete College by ID (Protected)
router.delete('/college/:id', fetchWebmaster, async (req, res) => {
    try {
        const college = await College.findById(req.params.id);

        if (!college) {
            return res.status(404).send('College not found');
        }

        await College.findByIdAndDelete(req.params.id);
        res.json({ success: 'College deleted successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
