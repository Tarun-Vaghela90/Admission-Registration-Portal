import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './HomePage.css'; // Import your custom styles
import './Navbar.css'; // Import Navbar styles

function HomePage() {
  return (
    <>
      <Navbar />
      <div className='container p-5'>
        <div className='mt-4'>
          <h1 className='display-4 text-center mb-4 main-heading'>Welcome to Admission Portal</h1>
          <p className='lead intro-paragraph text-center'>
            Find all the information you need to apply for admissions. We're here to help you through the process.
          </p>

          <div className='my-5 news-section'>
            <h2 className='mb-4 section-heading text-center'>Latest News</h2>
            <ul className='list-group'>
              <li className='list-group-item'>
                Last date of registration for Diploma to Degree Engineering and Pharmacy is extended till 12.06.2024
              </li>
              <li className='list-group-item'>
                The last date of registration of Degree Engineering has been extended upto 28.05.2024
              </li>
              <li className='list-group-item'>
                Registration Process for Diploma to Degree Engineering and Pharmacy 15-05-2024 to 05.06.2024
              </li>
            </ul>
          </div>

          <div className='my-5 intro-section'>
            <h2 className='mb-4 section-heading text-center'>Introduction</h2>
            <p className='intro-text'>
              The Government of Gujarat, in the Legislative Assembly, has passed an act, Act No.2 of 2008 called “Gujarat Professional Technical Educational Colleges or Institutions (Regulation of Admission and Fixation of Fees) Act, 2007” to make special provision for regulation of admission in the professional technical education colleges or institutions in the State and fixation of fees in such colleges or institutions and for matters connected therewith.
            </p>
          </div>

          <div className='my-5 features-section'>
            <h2 className='mb-4 section-heading text-center'>Key Features</h2>
            <div className='row'>
              <div className='col-md-3'>
                <div className='card feature-card'>
                  <img src='path/to/college-search.jpg' className='card-img-top' alt='District Wise College Search' />
                  <div className='card-body'>
                    <h5 className='card-title'>District Wise College Search</h5>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='card feature-card'>
                  <img src='path/to/merit-list.jpg' className='card-img-top' alt='Merit List UG' />
                  <div className='card-body'>
                    <h5 className='card-title'>Merit List for UG Programs</h5>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='card feature-card'>
                  <img src='path/to/registration-status.jpg' className='card-img-top' alt='Registration Payment Status' />
                  <div className='card-body'>
                    <h5 className='card-title'>Registration and Payment Status</h5>
                  </div>
                </div>
              </div>
              <div className='col-md-3'>
                <div className='card feature-card'>
                  <img src='path/to/payment-verification.jpg' className='card-img-top' alt='Payment Verification' />
                  <div className='card-body'>
                    <h5 className='card-title'>Payment Verification</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='my-5 usage-section'>
            <h2 className='mb-4 section-heading text-center'>How to Use</h2>
            <p className='usage-text text-center'>
              Navigate through the tabs above or use the quick links below to get started:
            </p>
            <div className='row text-center'>
              <div className='col-md-3'>
                <Link to='/district-wise-college' className='btn btn-primary usage-link'>
                  District Wise College
                </Link>
              </div>
              <div className='col-md-3'>
                <Link to='/merit-list-ug' className='btn btn-primary usage-link'>
                  Merit List UG
                </Link>
              </div>
              <div className='col-md-3'>
                <Link to='/registration-payment-status' className='btn btn-primary usage-link'>
                  Registration Payment Status
                </Link>
              </div>
              <div className='col-md-3'>
                <Link to='/verify-payments' className='btn btn-primary usage-link'>
                  Verify Payments
                </Link>
              </div>
            </div>
          </div>

          <div className='my-5 help-section'>
            <h2 className='mb-4 section-heading text-center'>Need Help?</h2>
            <p className='help-text text-center'>
              If you have any questions or encounter issues during the application process,
              please don't hesitate to <Link to='/contact'>contact us</Link>. Our support team
              is available to assist you.
            </p>
          </div>
          <div className='my-5 help-section'>
            <h2 className='mb-4 section-heading text-center'>Need Help?</h2>
            <p className='help-text text-center'>
              updated by jishan If you have any questions or encounter issues during the application process,
              please don't hesitate to <Link to='/contact'>contact us</Link>. Our support team
              is available to assist you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
