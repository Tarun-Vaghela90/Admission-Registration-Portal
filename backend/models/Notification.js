const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    student: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now },
    read: { type: Boolean, default: false }
});

module.exports = mongoose.model('Notification', notificationSchema);
