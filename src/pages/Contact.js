import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

function Contact() {


  const ContactText = "Elevate your experience with ease by reserving table. Book now to ensure your seat in the warmth of our welcoming ambiance.";

  return (
    <Container>
      <Row>
        <Col sm={12} lg={5}>
          <h1>30% OFF</h1>
          <h2>For Online Reservation</h2>
          <p>{ContactText}</p>
        </Col>
        <Col sm={12} lg={6}>
          <h1 className='text-center'>Book Your Table</h1>
          <Form>
            <Form.Control type='text' placeholder='Name' />
            <Form.Control type='email' placeholder='Email' />
            <Form.Control type='password' placeholder='Password' />
            <Form.Control type='date' placeholder='Date' />
            <Form.Control type='time' placeholder='Time' />
            <Form.Control type='number' placeholder='Person' />
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact;