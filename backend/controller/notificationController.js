const Notification = require('../models/Notification');
const Student = require('../models/Student');

// Send a notification
exports.sendNotification = async (req, res) => {
    try {
        const { studentId, message } = req.body;
        const notification = new Notification({
            student: studentId,
            message,
            date: Date.now()
        });

        await notification.save();

        // Add the notification to the student's notifications array
        await Student.findByIdAndUpdate(studentId, {
            $push: { notifications: notification._id }
        });

        res.status(201).json({ message: 'Notification sent successfully!', notification });
    } catch (error) {
        res.status(500).json({ message: 'Error sending notification', error });
    }
};

// Get all notifications for a student
exports.getNotificationsForStudent = async (req, res) => {
    try {
        const notifications = await Notification.find({ student: req.params.studentId });
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching notifications', error });
    }
};

// Mark a notification as read
exports.markAsRead = async (req, res) => {
    try {
        const notification = await Notification.findByIdAndUpdate(req.params.id, { read: true }, { new: true });
        if (!notification) return res.status(404).json({ message: 'Notification not found' });

        res.status(200).json({ message: 'Notification marked as read', notification });
    } catch (error) {
        res.status(500).json({ message: 'Error marking notification as read', error });
    }
};

