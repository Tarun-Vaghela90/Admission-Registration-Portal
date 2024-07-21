import React from 'react';
import { CardHeader } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ApexChart from './ApexChart';
import PieChart from './PieChart';
import Table_dash from './Table_dash';
export default function Dashhome() {
  return (
    <>
      <section className='d-flex justify-content-center  mb-4    fs-5 text-center border-color-red'>
        {/* <div className="rounded-4  border container-sm w-25"> */}
          <Card className='  rounded-2 shadow w-25 h-25  mx-3 border border-2 border-primary'>
            <CardHeader className='text-white border-primary bg-primary bg-gradient'>Total Application</CardHeader>
            <Card.Body className='text-primary'>150+</Card.Body>
          </Card>
        {/* </div> */}
        {/* <div className="container-sm w-25"> */}
          <Card className=' rounded-2 shadow w-25  h-25 mx-3 border border-2 border-success'>
            <CardHeader className='text-white border-success bg-success bg-gradient '>Accepted Application</CardHeader>
            <Card.Body className='text-success'>50+</Card.Body>
          </Card>
        {/* </div> */}
        {/* <div className="container-sm w-25"> */}
          <Card className=' rounded-2 shadow w-25 h-25 mx-3 border border-2 border-danger'>
            <CardHeader className='text-white border-danger bg-danger bg-gradient'>Rejected Application</CardHeader>
            <Card.Body className='text-danger'>10+</Card.Body>
          </Card>
          
        {/* </div> */}
      </section>
      <section className="Charts-main container  ">
        <h3>
          Applications 
          <small class="text-body-primary fs-2"> Charts</small>
        </h3>
        <div className="  d-flex mt-3  justify-content-center">
          <div className=" mx-5  " >
            <PieChart />
          </div>
          <div className=" mx-5    ">
            <ApexChart />
          </div>
        </div>

      </section>
      <section className="recent-application">
        <div className="container">
          {/* <Table_dash /> */}

        </div>
      </section>
    </>
  );
}
