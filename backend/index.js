const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const users = require('./routes/users');
const uploadDocument = require('./routes/uploadDocument');
const applications = require('./routes/Applications');
const students = require('./routes/Students');
const admins = require('./routes/Admins');
const notifications = require('./routes/Notifications');
const app = express();
const port = 5000;

app.use('/uploads', express.static('uploads'));

// Load environment variables from .env file
require('dotenv').config();
app.use(express.json());

// Connect to MongoDB new
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
});

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World! This is the start of a new world server is running');
   console.log("connected backend");
   
});

app.use('/UploadsDocs', uploadDocument);
app.use('/users', users);
app.use('/applications', applications);
app.use('/students', students);
app.use('/admins', admins);
app.use('/notifications', notifications);
require('./cronJobs');
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
