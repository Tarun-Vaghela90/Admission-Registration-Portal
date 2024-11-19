const mongoose = require('mongoose');

// Webmaster Schema
const WebmasterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// College Schema
const CollegeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    updated: { type: String, default: 'Not Updated' },
    location: { type: String, required: true },
    description: { type: String, required: true },
    courses: { type: [String], required: true },
    fees: [
        {
            course: { type: String, required: true },
            duration: { type: String, required: true },
            fee: { type: Number, required: true }
        }
    ],
    imageUrl: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Webmaster = mongoose.model('Webmaster', WebmasterSchema);
const College = mongoose.model('College', CollegeSchema);

module.exports = { Webmaster, College };
