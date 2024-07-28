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

// const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


app.get('/', (req, res) => {
    res.send('Hello World! This is the start of a new world');
});

app.use('/UploadsDocs',uploadDocument);
app.use('/users', users);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
