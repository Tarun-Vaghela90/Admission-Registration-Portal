const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const userApplication = require('./routes/application');
const collageAdminApplication = require('./routes/collageAdminapplication');
const collageAdminuser = require('./routes/collageAdminuser');
const webmasterRoutes = require('./routes/webmasterRoutes');
const sendEmailNotification = require('./utils/mailer'); // Import email notification function

// Enable CORS
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/admissionPortal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log('Error connecting to MongoDB:', error));

// Serve static files from the uploads directory
app.use('/uploads', express.static('uploads'));

// Define routes
app.use("/auth", auth);
app.use('/userApplication', userApplication);
app.use('/collageAdminApplication', collageAdminApplication);
app.use('/collageAdminuser', collageAdminuser);
app.use('/webmasterRoute', webmasterRoutes);

;

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
