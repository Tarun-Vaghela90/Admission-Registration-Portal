const express = require('express');
const router = express.Router();
const notificationController = require('../controller/notificationController');

// Send a notification
router.post('/', notificationController.sendNotification);

// Get all notifications for a student
router.get('/:studentId', notificationController.getNotificationsForStudent);

// Mark a notification as read
router.put('/:id/read', notificationController.markAsRead);

module.exports = router;
