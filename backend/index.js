const express = require('express');
const mongoose = require('mongoose');
const users = require("./routes/users");
const multer  = require('multer')
// const upload = multer({ dest: 'uploads/profile' })
// const uploadDoc = multer({ dest: 'uploads/Documents' })

const app = express();
const port = 3000;

// Load environment variables from .env file
require('dotenv').config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
});

app.use(express.json());
// app.post('/UploadDemo', uploadDoc.single('avatar'), function (req, res, next) {
//     console.log(req.file);
//     // req.body will hold the text fields, if there were any
//     res.send("Upload Completed");
//   })
app.get('/', (req, res) => {
    res.send('Hello World! This is the start of a new world');
});

app.use('/users', users);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
