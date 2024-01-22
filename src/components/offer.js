import React from 'react'
import { Form,Button } from 'react-bootstrap';


const Offer = () => {
  return (
    <div id='offer'>
      <div className='offer-img'></div>
      <div className='offer-content py-5'>
        <h1>50% off</h1> 
        <h2>Sunday Special Offer</h2>
        <Form className="d-sm-flex mx-sm-5 py-4">
          <Form.Control type="search" placeholder="Enter Email" aria-label="Your email" />
          <Button variant="secondary">SignUp </Button>
        </Form>
      </div>
    </div>
  )
}

export default Offer;