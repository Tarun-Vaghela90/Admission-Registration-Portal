// import React from 'react'
import { Row,Col,} from 'react-bootstrap'
import './css/dashboard.css'
// import '../js/main'
export default function Contact_Dash() {


  return (
    <>
    <div className="container   p-4  shadow-sm  rounded-4 pb-5   ">
            <h1 className='fs-2 text-start fw-bolder   text-secondary '>Profile</h1>
        <Row className='mt-5 '> 
            <Col className=''>
    <img src={"https://github.com/mdo.png"} alt="mdo" width="320" height="320" className=" rounded-circle " />
            </Col>
            <Col>
    

    <form className="col  g-3">
    <div className="col-md-6 mb-2 ">
    <label htmlFor="inputEmail4" className="form-label fw-bold">First Name</label>
    <input type="input" className="form-control" id="inputFirst4"  value={"jscob"}/>
  </div>
  <div className="col-md-6 mb-2">
    <label htmlFor="inputEmail4" className="form-label fw-bold">Last Name</label>
    <input type="input" className="form-control" id="inputLast4"value={"johnson"} />
  </div>
  <div className="col-md-6 mb-2">
    <label htmlFor="inputEmail4" className="form-label fw-bold">Email</label>
    <input type="email" className="form-control " id="inputEmail4" value={"jscob@gmail.com"} />
  </div>
  <div className="col-md-6 mb-2">
    <label htmlFor="inputPassword4" className="form-label fw-bold">Password</label>
    <input type="password" className="form-control" id="inputPassword4" value={"jscob@gmail.com"} />
  </div>
  
  <div className="col-12 mt-3">
    <button type="submit" className="btn btn-primary fw-bold">Sign Out</button>
  </div>
</form>
            </Col>
        </Row>

      
    </div>
    </>
  )
}
