const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const documentSchema = new Schema({
    student: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
    documentType: { type: String, required: true },
    url: { type: String, required: true },
    uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Document', documentSchema);
