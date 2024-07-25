// import React from 'react';
import { CardHeader } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ApexChart from './Charts/ApexChart';
import PieChart from './Charts/PieChart';
// import generatePDF from './generatePDF'; // Adjust the import path as needed

export default function Dashhome() {

  return (
    <>
        {/* <div className="justify-content-end text-end mb-2" >

    <button onClick={generatePDF} className='btn btn-danger bg-gradient'><i className="bi bi-file-earmark-pdf mx-2 "></i></button>
        </div> */}
      <div id='pdf-content' >
        <section className='d-flex justify-content-center mb-4 fs-5  text-center border-color-red'>
          <Card className='rounded-2 shadow w-25 h-25 mx-3 border border-2 border-primary'>
            <CardHeader className='text-white border-primary bg-primary bg-gradient'>Total Application</CardHeader>
            <Card.Body className='text-primary'>150+</Card.Body>
          </Card>
          <Card className='rounded-2 shadow w-25 h-25 mx-3 border border-2 border-success '>
            <Card.Header className='text-white border-primary bg-success bg-gradient '>Accepted Application</Card.Header>
            <Card.Body className='text-success'>50+</Card.Body>
          </Card>
          <Card className='rounded-2 shadow w-25 h-25 mx-3 border border-2 border-danger '>
            <CardHeader className='text-white border-danger bg-danger bg-gradient'>Rejected Application</CardHeader>
            <Card.Body className='text-danger'>10+</Card.Body>
          </Card>
        </section>
        <section className="Charts-main container ">
          <h3>
            Applications 
             Charts
          </h3>
          <div className="d-flex mt-3 justify-content-center">
            <div className="mx-5">
              <PieChart />
            </div>
            <div className="mx-5">
              <ApexChart />
            </div>
          </div>
        </section>
        
      </div>
    </>
  );
}
