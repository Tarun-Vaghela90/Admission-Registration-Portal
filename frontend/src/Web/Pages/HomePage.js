import React, { useState } from 'react';
import collageImage from './image/collage.jpg';
import './css/HomePage.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const cardData = [
    {
      title: 'Marwadi University',
      text: 'Welcome to [Your College Name]! Here is some information about our prestigious institution.',
      updated: 'Last updated 3 mins ago'
    },
    {
      title: 'Parul University',
      text: 'This is some more information related to the college. Feel free to browse.',
      updated: 'Last updated 5 mins ago'
    },
    {
      title: 'Nirma University',
      text: 'This is some more information related to the college. Feel free to browse.',
      updated: 'Last updated 5 mins ago'
    },
    {
      title: 'Atamiy University',
      text: 'This is some more information related to the college. Feel free to browse.',
      updated: 'Last updated 5 mins ago'
    },
  ];

  const filteredCards = cardData.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=''>
      <form action="" method="get" className='container d-flex justify-content-center mt-4 mb-4'>
        <input
          type="search"
          className="form-control text-center w-75 p-3 rounded-pill shadow-sm"
          placeholder='Search College Name'
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </form>

      <div className="container d-flex justify-content-center">
        <div className="row w-100 text-dark">
          {filteredCards.map((card, index) => (
            <div className="col-12 mb-3 d-flex justify-content-center" key={index}>
              <div className="d-flex border p-1 rounded bg-light bg-gradient" style={{ maxWidth: "550px", width: "100%" }}>
                <div className="flex-shrink-0" style={{ width: '30%' }}>
                  <img src={collageImage} className="img-fluid rounded" alt="Collage" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="d-flex flex-column justify-content-center p-2" style={{ flex: '1' }}>
                  <h5 className="text-dark mb-1">{card.title}</h5>
                  <p className="text-dark mb-1">{card.text}</p>
                  <small className="text-dark mb-2">{card.updated}</small>
                  <Link className="btn btn-dark mt-auto align-self-end" to="/CollageInfo">Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
