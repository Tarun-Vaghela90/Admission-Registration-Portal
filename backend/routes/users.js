const express = require('express');
const router = express.Router();
const User = require("../models/Users"); // Assuming '../models/User' is the path to your user schema
const auth = require('../middleware/auth'); // Assuming '../middleware/auth' is the path to your JWT middleware

// Sign up
router.post('/signup', async (req, res) => {
    console.log(req.body); // Log the request body to check the incoming data
    const user = new User(req.body);
    try {
        await user.save();
        console.log(user);
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token }); // Send back user information and token
    } catch (error) {
        console.error('Error saving user:', error); // Log the error details
        res.status(400).send(error); // Send bad request error with details
    }
});

// Sign in
router.post('/signin', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.send({ user, token }); // Send back user information and token
    } catch (error) {
        res.status(401).send({ error: 'Login failed! Check email or password' }); // Send unauthorized error with specific message
    }
});

// Protected route (example) - Requires authorization header with valid JWT
router.get('/profile', auth, async (req, res) => {
    // Access the logged-in user's information from req.user
    res.send(req.user);
});

module.exports = router;
