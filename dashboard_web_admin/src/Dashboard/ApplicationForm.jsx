import React from 'react'
import '../js/main'
import { Form } from 'react-bootstrap'




export default function ApplicationForm() {



  return (
    <div className='container  rounded border-primary  border w-50 h-50'>
      <Form>

<h4>Collage Form</h4>
<input type='input' className='form input'/>
        <button className='btn btn-primary'>Submit</button>
      </Form>
    </div>
  )
}
