// import React from 'react'
import '../js/main'
import { Row,Col} from 'react-bootstrap'
import './css/dashboard.css'



export default function ApplicationForm() {



  return (
   <>
    <div className="container   p-4  shadow-sm  rounded-4 pb-5   ">
            <h1 className='fs-2 text-start fw-bolder   text-secondary '>Collage Information</h1>
            <div className="col-12 mt-3 text-end">
    <button type="submit" className="btn btn-primary fw-bold">Sign Out</button>
  </div>
        <Row className='mt-5 '> 
            <Col className=''>
    <img src={"https://github.com/mdo.png"} alt="mdo" width="320" height="320" className=" rounded-4 " />
            </Col>
            <Col>
    

    <form className="row  g-3">
    <div className="col-md-6 mb-2 ">
    <label htmlFor="inputEmail4" className="form-label fw-bold">University Name</label>
    <input type="input" className="form-control" id="inputFirst4"  value={"jscob"}/>
  </div>
  
  <div className="col-md-6 mb-2">
    <label htmlFor="inputEmail4" className="form-label fw-bold"> University Email</label>
    <input type="email" className="form-control " id="inputEmail4" value={"jscob@gmail.com"} />
  </div>
  <div className="col-md-6 mb-2">
    <label htmlFor="inputEmail4" className="form-label fw-bold">Location</label>
    <input type="input" className="form-control" id="inputLast4" placeholder='Enter Value' />
  </div>
  <div className="col-md-6 mb-2">
    <label htmlFor="inputEmail4" className="form-label fw-bold">Description</label>
    <textarea type="textarea" className="form-control" id="inputLast4"  placeholder='Enter Value' />
  </div>
  
  
  <div className="col-md-6 mb-2">
    <label htmlFor="inputPassword4" className="form-label fw-bold">Password</label>
    <input type="password" className="form-control" id="inputPassword4" value={"jscob@gmail.com"} />
  </div>
  <div className="col-md-6 mb-2">
    <label htmlFor="inputPassword4" className="form-label fw-bold">Upload IMage</label>
    <input type="file" className="form-control" id="inputimage5"  />
  </div>
  <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Courses
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="  text-end ">

      <button className='btn btn-primary m-2 '><i className="bi bi-plus-lg"></i></button>
      </div>
      <div className="accordion-body">
        <span className='rounded-3 bg-primary p-2 text-light justify-content-center'  >hello <i className="bi bi-x-lg"></i></span>
      </div>
    </div>
  </div>
  </div>
</form>
            </Col>
        </Row>

      
    </div>
    
   </>
  )
}
