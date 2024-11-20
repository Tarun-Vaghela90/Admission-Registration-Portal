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

  const fetchApplicationCounts = async () => {
    setLoading(true);
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
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplicationCounts();
  }, []);

  if (loading) {
    return <p>Loading application counts...</p>;
  }

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  const chartData = [
    {
      name: 'Total Applications',
      data: [applicationCounts.totalApplications, applicationCounts.acceptedApplications, applicationCounts.rejectedApplications],
    },
  ];

  return (
    <div id='pdf-content'>
      {/* Card Section (Unchanged) */}
      <section className='d-flex justify-content-center mb-4 fs-5 text-center'>
        <Card className='rounded-2 shadow m-3 border border-2 border-primary w-25'>
          <CardHeader className='text-white border-primary bg-primary bg-gradient'>Total Applications</CardHeader>
          <Card.Body className='text-primary'>{applicationCounts.totalApplications}+</Card.Body>
        </Card>
        <Card className='rounded-2 shadow m-3 border border-2 border-success w-25'>
          <Card.Header className='text-white border-primary bg-success bg-gradient'>Accepted Applications</Card.Header>
          <Card.Body className='text-success'>{applicationCounts.acceptedApplications}+</Card.Body>
        </Card>
        <Card className='rounded-2 shadow m-3 border border-2 border-danger w-25'>
          <CardHeader className='text-white border-danger bg-danger bg-gradient'>Rejected Applications</CardHeader>
          <Card.Body className='text-danger'>{applicationCounts.totalApplications - applicationCounts.acceptedApplications}+</Card.Body>
        </Card>
      </section>
      
      {/* Charts Section (Side by side) */}
      <section className="Charts-main container-sm">
        <h3>Applications Charts</h3>
        <div className="d-flex justify-content-center mt-3">
          <div className="mx-3">
            {/* PieChart */}
            <PieChart
              totalApplications={applicationCounts.totalApplications}
              acceptedApplications={applicationCounts.acceptedApplications}
              rejectedApplications={applicationCounts.totalApplications - applicationCounts.acceptedApplications}
            />
          </div>
          <div className="mx-3">
            {/* ApexChart */}
            <ApexChart data={chartData} />
          </div>
        </div>
      </section>
    </div>
  );
}
