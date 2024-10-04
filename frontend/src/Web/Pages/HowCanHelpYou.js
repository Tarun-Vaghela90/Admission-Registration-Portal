import React from 'react';
import './css/HowCanHelpYou.css'; // Import the CSS for styling

const HowCanHelpYou = () => {
  return (
    <div className="help-container">
      <h2>How Can We Help You?</h2>
      <ul className="help-steps">
        <li>1. Login to your account using your credentials.</li>
        <li>2. If you are a new user, sign up for a new account.</li>
        <li>3. After sign-up, log in to access your dashboard.</li>
        <li>4. Complete your admission form by entering all required details.</li>
        <li>5. Upload the necessary documents (ID, transcripts, etc.).</li>
        <li>6. Review your form and submit it for processing.</li>
        <li>7. Check your payment status or make the required payment.</li>
        <li>8. Track your application status on the dashboard.</li>
        <li>9. If you need any assistance, reach out to our support team.</li>
      </ul>
    </div>
  );
};

export default HowCanHelpYou;
