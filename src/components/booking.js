import React from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Booking = () => {
    
    const navigate=useNavigate();

    return (
        <>  
        <div id='booking'>
            <Container className='booking-content'>
                    <Row>
                        <Col md={6} lg={6}>
                            <h1>30% off</h1>
                            <h2>For Online Reservation</h2>
                            <p>Confirm your Reservationand proceed to checkout.</p>
                            <p>Input the code RESERVE30 to unlock a delightful 30% off your entire order</p>
                            <p>Arrive on the reserved date and let our exceptional brews and inviting atmosphere elevate your coffee experience.</p>
                        </Col>
                        <Col className='d-none d-lg-block' lg={1}></Col>
                        <Col md={6} lg={5} className='booking-form'>
                            <h2 className='text-center py-2'>Book Your Table</h2>
                            <FloatingLabel controlId='flotinginput' label='Name' className='mb-3'>
                                <Form.Control type='text' placeholder='enter name' />
                            </FloatingLabel>
                            <FloatingLabel controlId='flotinginput' label='Email' className='mb-3'>
                                <Form.Control type='email' placeholder='enter Email' />
                            </FloatingLabel>
                            <FloatingLabel controlId='flotinginput' label='Date' className='mb-3'>
                                <Form.Control type='date' placeholder='enter Date' />
                            </FloatingLabel>
                            <FloatingLabel controlId='flotinginput' label='Time' className='mb-3'>
                                <Form.Control type='time' placeholder='enter time' />
                            </FloatingLabel>
                            <FloatingLabel controlId='flotinginput' label='Person' className='mb-3'>
                                <Form.Control type='number' placeholder='enter number of person' />
                            </FloatingLabel>
                            <Button variant='dark' onClick={()=>navigate('/')}>Book Now</Button>
                        </Col>
                    </Row>
            </Container>
        </div >
        </>
    )
}

export default Booking;