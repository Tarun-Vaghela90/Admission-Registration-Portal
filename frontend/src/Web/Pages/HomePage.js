import React from 'react';
import collageImage from './image/collage.jpg';
import './css/HomePage.css';

export default function HomePage() {
  // Example data array
  const cardData = [
    {
      title: 'Your College Name',
      text: 'Welcome to [Your College Name]! Here is some information about our prestigious institution.',
      updated: 'Last updated 3 mins ago'
    },
    {
      title: 'Another Title',
      text: 'This is some more information related to the college. Feel free to browse.',
      updated: 'Last updated 5 mins ago'
    },
    {
      title: 'Another Title',
      text: 'This is some more information related to the college. Feel free to browse.',
      updated: 'Last updated 5 mins ago'
    },
    // Add more items here...
  ];

  return (
    <div className="container my-5 me-3">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card-list">
            {cardData.map((card, index) => (
              <div key={index} className="card mb-4 " style={{ maxWidth: '520px',maxHeight:'500px' }}>
                <div className="row g-0">
                  <div className="col-md-4 rounded">
                    <img src={collageImage} className="img-fluid rounded-start CollageImage p-1  " alt="College" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{card.title}</h5>
                      <p className="card-text">{card.text}</p>
                      <h5 className="card-title">{card.title}</h5>

                      <div className="card-text  d-flex float-end">
                        <button className="btn btn-primary text-white float-end">Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
