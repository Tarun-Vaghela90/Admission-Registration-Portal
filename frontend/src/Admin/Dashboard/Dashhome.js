import React, { useState, useEffect } from 'react';
import { CardHeader } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ApexChart from './Charts/ApexChart';
import PieChart from './Charts/PieChart';
import './css/dashboard.css';
import axios from 'axios';

export default function Dashhome() {
  const [applicationCounts, setApplicationCounts] = useState({
    totalApplications: 0,
    acceptedApplications: 0,
    rejectedApplications: 0,
  });
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch application counts
  const fetchApplicationCounts = async () => {
    setLoading(true); // Start loading
    try {
      const authToken = localStorage.getItem('authToken');
      const response = await axios.get('http://localhost:5000/collageAdminApplication/admincollege/applications/counts', {
        headers: {
          'AuthToken': authToken,
        },
      });
      setApplicationCounts(response.data);
    } catch (err) {
      setError("Error fetching application counts.");
      console.error("Fetch error details: ", err.response ? err.response.data : err.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchApplicationCounts(); // Call the fetch function on component mount
  }, []);

  if (loading) {
    return <p>Loading application counts...</p>;
  }

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  // Prepare data for ApexChart
  const chartData = [
    {
      name: 'Total Applications',
      data: [applicationCounts.totalApplications, applicationCounts.acceptedApplications, applicationCounts.rejectedApplications],
    },
  ];

  return (
    <>
      <div id='pdf-content'>
        <section className='d-flex justify-content-center mb-4 fs-5 text-center border-color-red'>
          <Card className='rounded-2 shadow w-25 h-25 mx-3 border border-2 border-primary'>
            <CardHeader className='text-white border-primary bg-primary bg-gradient'>Total Applications</CardHeader>
            <Card.Body className='text-primary'>{applicationCounts.totalApplications}+</Card.Body>
          </Card>
          <Card className='rounded-2 shadow w-25 h-25 mx-3 border border-2 border-success'>
            <Card.Header className='text-white border-primary bg-success bg-gradient'>Accepted Applications</Card.Header>
            <Card.Body className='text-success'>{applicationCounts.acceptedApplications}+</Card.Body>
          </Card>
          <Card className='rounded-2 shadow w-25 h-25 mx-3 border border-2 border-danger'>
            <CardHeader className='text-white border-danger bg-danger bg-gradient'>Rejected Applications</CardHeader>
            <Card.Body className='text-danger'>{applicationCounts.totalApplications - applicationCounts.acceptedApplications}+</Card.Body>
          </Card>
        </section>
        <section className="Charts-main container-sm">
          <h3>Applications Charts</h3>
          <div className="d-flex mt-3 justify-content-center">
            <div className="mx-5">
              {/* Pass application counts to PieChart */}
              <PieChart
                totalApplications={applicationCounts.totalApplications}
                acceptedApplications={applicationCounts.acceptedApplications}
                rejectedApplications={applicationCounts.totalApplications - applicationCounts.acceptedApplications}
              />
            </div>
            <div className="mx-5">
              {/* Pass chart data to ApexChart */}
              <ApexChart data={chartData} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
