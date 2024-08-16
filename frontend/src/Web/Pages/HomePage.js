import React, { useState } from 'react';
import collageImage from './image/collage.jpg';
import './css/HomePage.css';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const cardData = [
    {
      title: 'Marwadi University',
      text: 'Welcome to Marwadi University! Here is some information about our prestigious institution.',
      updated: 'Last updated 3 mins ago',
      location: 'Rajkot, Gujarat',
      description: 'Marwadi University is a leading educational institution offering a variety of undergraduate and postgraduate programs. It is known for its state-of-the-art infrastructure and experienced faculty, providing students with an environment conducive to learning and innovation.',
      courses: ['M.Tech', 'B.Tech', 'M.Com', 'Diploma'],
      fees: [
        { course: 'M.Tech', duration: '2 Years', fee: '₹1,50,000' },
        { course: 'B.Tech', duration: '4 Years', fee: '₹2,00,000' },
        { course: 'M.Com', duration: '2 Years', fee: '₹50,000' },
        { course: 'Diploma', duration: '3 Years', fee: '₹40,000' }
      ],
      imageUrl: '/images/marwadiuniversity.jpg'
    },
    {
      title: 'Parul University',
      text: 'This is some more information related to Parul University. Feel free to browse.',
      updated: 'Last updated 5 mins ago',
      location: 'Vadodara, Gujarat',
      description: 'Parul University is known for its diverse range of courses and vibrant campus life, fostering an environment of growth and development for students.',
      courses: ['B.Tech', 'MBA', 'B.Sc', 'M.Sc'],
      fees: [
        { course: 'B.Tech', duration: '4 Years', fee: '₹1,80,000' },
        { course: 'MBA', duration: '2 Years', fee: '₹2,50,000' },
        { course: 'B.Sc', duration: '3 Years', fee: '₹60,000' },
        { course: 'M.Sc', duration: '2 Years', fee: '₹70,000' }
      ],
      imageUrl: '/images/paruluniversity.jpg'
    },
    {
      title: 'Nirma University',
      text: 'Explore the vast opportunities at Nirma University, where education meets innovation.',
      updated: 'Last updated 10 mins ago',
      location: 'Ahmedabad, Gujarat',
      description: 'Nirma University offers a range of undergraduate, postgraduate, and doctoral programs. The university is known for its focus on research and holistic development of students.',
      courses: ['B.Tech', 'M.Tech', 'MBA', 'PhD'],
      fees: [
        { course: 'B.Tech', duration: '4 Years', fee: '₹2,50,000' },
        { course: 'M.Tech', duration: '2 Years', fee: '₹2,00,000' },
        { course: 'MBA', duration: '2 Years', fee: '₹3,00,000' },
        { course: 'PhD', duration: '3 Years', fee: '₹1,20,000' }
      ],
      imageUrl: '/images/nirmauniversity.jpg'
    },
    {
      title: 'L.D College of Engineering',
      text: 'Join L.D College of Engineering and build a strong foundation in engineering disciplines.',
      updated: 'Last updated 15 mins ago',
      location: 'Ahmedabad, Gujarat',
      description: 'L.D College of Engineering is one of the oldest and most prestigious engineering institutions in Gujarat, known for producing industry-ready engineers with strong technical skills.',
      courses: ['B.Tech', 'M.Tech', 'Diploma'],
      fees: [
        { course: 'B.Tech', duration: '4 Years', fee: '₹1,70,000' },
        { course: 'M.Tech', duration: '2 Years', fee: '₹1,50,000' },
        { course: 'Diploma', duration: '3 Years', fee: '₹50,000' }
      ],
      imageUrl: '/images/ldcollegeofengineering.jpg'
    }
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
                  <img src={'frontend\public\image\marwadiuniversity.jpg'} className="img-fluid rounded" alt="Collage" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="d-flex flex-column justify-content-center p-2" style={{ flex: '1' }}>
                  <h5 className="text-dark mb-1">{card.title}</h5>
                  <p className="text-dark mb-1">{card.text}</p>
                  <small className="text-dark mb-2">{card.updated}</small>
                  <Link
  className="btn btn-dark mt-auto align-self-end"
  to="/CollageInfo"
  state={{ card }}
>
  Details
</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
