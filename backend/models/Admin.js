const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Password should be hashed in practice
  collegeName: { type: String, required: true }, // College associated with the admin
});

const Admin = mongoose.model('collageAdmin', adminSchema);

module.exports = Admin;
