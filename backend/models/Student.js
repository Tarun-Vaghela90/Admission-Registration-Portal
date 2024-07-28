const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    contactNumber: { type: String, required: true },
    address: {
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String
    },
    applications: [{ type: Schema.Types.ObjectId, ref: 'Application' }],
    documents: [{ type: Schema.Types.ObjectId, ref: 'Document' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Student', studentSchema);
