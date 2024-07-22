import React from 'react'
import '../js/main'
import { Row,Col, ToastHeader, ToastBody, ToastContainer, } from 'react-bootstrap'
import './css/dashboard.css'

import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';
import Toast_Dash from './Toast_Dash';


export default function ApplicationForm() {



  return (
   <>
    <div className="container   p-4  shadow-sm  rounded-4 pb-5   ">
            <h1 className='fs-2 text-start fw-bolder   text-secondary '>Collage Information</h1>
            <div class="col-12 mt-3 text-end">
    <button type="submit" class="btn btn-primary fw-bold">Sign Out</button>
  </div>
        <Row className='mt-5 '> 
            <Col className=''>
    <img src={"https://github.com/mdo.png"} alt="mdo" width="320" height="320" className=" rounded-4 " />
            </Col>
            <Col>
    

    <form class="row  g-3">
    <div class="col-md-6 mb-2 ">
    <label for="inputEmail4" class="form-label fw-bold">University Name</label>
    <input type="input" class="form-control" id="inputFirst4"  value={"jscob"}/>
  </div>
  
  <div class="col-md-6 mb-2">
    <label for="inputEmail4" class="form-label fw-bold"> University Email</label>
    <input type="email" class="form-control " id="inputEmail4" value={"jscob@gmail.com"} />
  </div>
  <div class="col-md-6 mb-2">
    <label for="inputEmail4" class="form-label fw-bold">Location</label>
    <input type="input" class="form-control" id="inputLast4" placeholder='Enter Value' />
  </div>
  <div class="col-md-6 mb-2">
    <label for="inputEmail4" class="form-label fw-bold">Description</label>
    <textarea type="textarea" class="form-control" id="inputLast4"  placeholder='Enter Value' />
  </div>
  
  
  <div class="col-md-6 mb-2">
    <label for="inputPassword4" class="form-label fw-bold">Password</label>
    <input type="password" class="form-control" id="inputPassword4" value={"jscob@gmail.com"} />
  </div>
  <div class="col-md-6 mb-2">
    <label for="inputPassword4" class="form-label fw-bold">Upload IMage</label>
    <input type="file" class="form-control" id="inputimage5"  />
  </div>
  <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Courses
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
      <div className="  text-end ">

      <button className='btn btn-primary m-2 '><i class="bi bi-plus-lg"></i></button>
      </div>
      <div class="accordion-body">
        <span className='rounded-3 bg-primary p-2 text-light justify-content-center'  >hello <i class="bi bi-x-lg"></i></span>
      </div>
    </div>
  </div>
  </div>
</form>
{/* <Toast_Dash/> */}
            </Col>
        </Row>

      
    </div>
    
   </>
  )
}
