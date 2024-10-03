const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  mobileNumber: { type: String, required: true, match: /^[0-9]{10}$/ },
  email: { type: String, required: true, lowercase: true, match: /\S+@\S+\.\S+/ },
  courseName: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  collegeName: { type: String, required: true }, // New collegeName field
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  submissionDate: { type: Date, default: Date.now },
  deadline: { type: Date, required: true }, // Deadline is required and will be set manually
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  files: [{ type: String }],
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
