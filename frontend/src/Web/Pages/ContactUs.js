import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card p-3 mb-4">
            <h4>For Technical HelpLine</h4>
            <ul className="list-unstyled">
              <li><strong>Tarun vaghela:</strong> 1122334455</li>
              <li><strong>Jaykumar amrutiya:</strong> 5566778899</li>
              <li><strong>Jishanraja Ansari:</strong> 5566778899</li>
              <li><strong>Help Center Time:</strong> 10:30 AM to 6:30 PM (On Working Days)</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-3 mb-4">
            <h4>For Non-Technical HelpLine</h4>
            <ul className="list-unstyled">
              <li><strong>Email:</strong> registration@gmail.com</li>
              <li><strong>Jackson Obama:</strong> 00000000000</li>
              <li><strong>Help Center Time:</strong> 11:00 AM to 05:00 PM (On Working Days)</li>
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default ContactUs;