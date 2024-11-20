// Load environment variables
require('dotenv').config();

// Import nodemailer
const nodemailer = require('nodemailer');

// Configure the transporter with your email credentials from environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: true, // Use SSL
  port: 465,    // Secure port for SMTP
  auth: {
    user: process.env.EMAIL_USER,   // Email address from the .env file
    pass: process.env.EMAIL_PASS,   // App password or email password from the .env file
  },
  logger: true,  // Optional: Enables debug logging (set to true for more detailed logs)
  debug: true,   // Optional: Enable SMTP debugging
});

// Function to send email notifications with HTML content
const sendEmailNotification = (to, subject, application) => {
  const { firstName, lastName, applicationId, status } = application;
  const fullName = `${firstName} ${lastName}`;  // Combine first and last name

  // Define HTML content for the email
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
      <h2 style="color: #333;">Application Status Update</h2>
      <p>Dear <strong>${fullName}</strong>,</p>
      <p>We are writing to inform you that the status of your application (ID: <strong>${applicationId}</strong>) has been updated.</p>
      <p>Your application is now <span style="color: ${status === 'approved' ? 'green' : 'red'};"><strong>${status}</strong></span>.</p>

      <p>Here are the details of your application:</p>
      <ul>
        <li><strong>Application ID:</strong> ${applicationId}</li>
        <li><strong>Applicant Name:</strong> ${fullName}</li>
        <li><strong>Status:</strong> ${status}</li>
      </ul>

      <p>Thank you for choosing our college. If you have any questions, feel free to reach out to our support team.</p>

      <p>Best regards,<br>Your College Admin Team</p>

      <div style="border-top: 1px solid #ddd; padding-top: 10px; font-size: 12px; color: #777;">
        <p>This is an automated message, please do not reply to this email.</p>
      </div>
    </div>
  `;

  // Define email options, including HTML content
  const mailOptions = {
    from: process.env.EMAIL_USER,   // Sender address (from the .env file)
    to: to,                         // Receiver's email address
    subject: subject,               // Subject of the email
    html: htmlContent               // HTML body of the email
  };

  // Send email using the transporter
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error(`Error sending email to ${to}:`, error);  // More informative error log
    } else {
      console.log(`Email successfully sent to ${to}: ${info.response}`); // Log success with details
    }
  });
};

// Export the sendEmailNotification function to be used in other parts of the application
module.exports = sendEmailNotification;
