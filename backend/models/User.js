// Import mongoose
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dob: { type: String, required: true, unique: true },
    mobilNum: Number,
   
});

// Create and export the User model
const User = mongoose.model('User', userSchema);
module.exports = User;
