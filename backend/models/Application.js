const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
    student: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
    program: { type: String, required: true },
    status: { type: String, enum: ['pending', 'reviewed', 'accepted', 'rejected'], default: 'pending' },
    submissionDate: { type: Date, default: Date.now },
    reviewDate: Date,
    comments: String,
    deadline: { type: Date, required: true }
});

module.exports = mongoose.model('Application', applicationSchema);
