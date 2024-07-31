const cron = require('node-cron');
const moment = require('moment');
const Application = require('./models/Application'); // Adjust the path accordingly
const Notification = require('./models/Notification'); // Adjust the path accordingly

// Check for applications with approaching deadlines every day at midnight
cron.schedule('0 0 * * *', async () => {
  const nearDeadline = moment().add(3, 'days').toDate(); // 3 days before deadline
  const applications = await Application.find({ deadline: { $lte: nearDeadline } });

  applications.forEach(async (app) => {
    const message = `Application for ${app.course} has a deadline approaching on ${app.deadline}`;
    await Notification.create({ 
      student: app.student,
      message,
      date: new Date(),
      read: false 
    });
  });

  console.log('Notifications for approaching deadlines have been generated.');
});

module.exports = cron;
