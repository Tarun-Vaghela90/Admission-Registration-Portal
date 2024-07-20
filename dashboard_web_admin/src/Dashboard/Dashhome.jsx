import React from 'react';
import { CardHeader } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ApexChart from './ApexChart';
import PieChart from './PieChart';
import './css/Charts.css'
export default function Dashhome() {
  return (
    <>
      <section className='d-flex justify-content-center mt-5 text-center border-color-red'> 
        <div className="container-sm w-25">
          <Card className='border border-primary border-3 shadow mb-3'>
            <CardHeader className='text-primary'>Total application</CardHeader>
            <Card.Body className='text-primary'>150+</Card.Body>
          </Card>
        </div>
        <div className="container-sm w-25">
          <Card className='border border-success border-3 shadow mb-3'>
            <CardHeader className='text-primary'>Accepted application</CardHeader>
            <Card.Body className='text-success'>50+</Card.Body>
          </Card>
        </div>
        <div className="container-sm w-25">
          <Card className='border border-danger border-3 shadow mb-3'>
            <CardHeader className='text-primary'>Rejected application</CardHeader>
            <Card.Body className='text-danger'>10+</Card.Body>
          </Card>
        </div>
      </section>
      <section className=" d-flex mt-5">
        <div className="container align-items-center justify-content-center apex justify-content-center   border chart-container ">
          <PieChart />
        </div>
        <div className=" apex-pie border container   chart-container">
          <ApexChart  />
        </div>
      </section>
    </>
  );
}
