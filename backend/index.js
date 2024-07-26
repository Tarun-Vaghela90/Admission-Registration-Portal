const express = require('express');
const mongoose = require('mongoose');
const users = require("./routes/users");
const multer  = require('multer')
const uploadDocument = require('./routes/uploadDocument')
const app = express();
const port = 3000;

// Load environment variables from .env file
require('dotenv').config();
app.use(express.json());




// Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('Connected to MongoDB');
// }).catch(err => {
//     console.error('Error connecting to MongoDB:', err.message);
// });


app.get('/', (req, res) => {
    res.send('Hello World! This is the start of a new world');
});

app.use('/UploadsDocs',uploadDocument);
app.use('/users', users);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
