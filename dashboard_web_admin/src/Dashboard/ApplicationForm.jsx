import React from 'react'
import '../js/main'
import { Row,Col, } from 'react-bootstrap'
import './css/dashboard.css'




export default function ApplicationForm() {



  return (
   <>
    <div className="container   p-4  shadow-sm  rounded-4 pb-5   ">
            <h1 className='fs-2 text-start fw-bolder   text-secondary '>Collage Info</h1>
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
    <input type="input" class="form-control" id="inputLast4"value={"johnson"} />
  </div>
  <div class="col-md-6 mb-2">
    <label for="inputEmail4" class="form-label fw-bold">Description</label>
    <textarea type="textarea" class="form-control" id="inputLast4" value={"johnson"} />
  </div>
  <div class="col-md-6 mb-2">
    <label for="inputEmail4" class="form-label fw-bold">Courses</label>
    <input type="input" class="form-control" id="inputLast4" placeholder='Enter Course Name' />
  </div>
  <div class="col-md-6 mb-2">
    <label for="inputPassword4" class="form-label fw-bold">Password</label>
    <input type="password" class="form-control" id="inputPassword4" value={"jscob@gmail.com"} />
  </div>
  <div class="col-md-6 mb-2">
    <label for="inputPassword4" class="form-label fw-bold">Password</label>
    <input type="file" class="form-control" id="inputPassword4"  />
  </div>
  
  
  <div class="col-12 mt-3">
    <button type="submit" class="btn btn-primary fw-bold">Sign Out</button>
  </div>
</form>
            </Col>
        </Row>

      
    </div>
    
   </>
  )
}
