import React from 'react'
import { Row,Col, } from 'react-bootstrap'
import './css/dashboard.css'
export default function ProfileDash() {
  return (
    <>
    <div className="container   p-4  shadow-sm  rounded-4 pb-5   ">
            <h1 className='fs-2 text-start fw-bolder   text-secondary '>Profile</h1>
        <Row className='mt-5 '> 
            <Col className=''>
    <img src={"https://github.com/mdo.png"} alt="mdo" width="320" height="320" className=" rounded-circle " />
            </Col>
            <Col>
    

    <form class="col  g-3">
    <div class="col-md-6 mb-2 ">
    <label for="inputEmail4" class="form-label fw-bold">First Name</label>
    <input type="input" class="form-control" id="inputFirst4"  value={"jscob"}/>
  </div>
  <div class="col-md-6 mb-2">
    <label for="inputEmail4" class="form-label fw-bold">Last Name</label>
    <input type="input" class="form-control" id="inputLast4"value={"johnson"} />
  </div>
  <div class="col-md-6 mb-2">
    <label for="inputEmail4" class="form-label fw-bold">Email</label>
    <input type="email" class="form-control " id="inputEmail4" value={"jscob@gmail.com"} />
  </div>
  <div class="col-md-6 mb-2">
    <label for="inputPassword4" class="form-label fw-bold">Password</label>
    <input type="password" class="form-control" id="inputPassword4" value={"jscob@gmail.com"} />
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
