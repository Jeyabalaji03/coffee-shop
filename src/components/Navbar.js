import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaOpencart } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <Navbar expand='md' className='bg-light'>
        <Container>
          <Navbar.Brand as={Link} to='/'>COFFEEE</Navbar.Brand>
          <Navbar.Toggle aria-controls='opned-nav' />
          <Navbar.Collapse id="opned-nav">
            <Nav className='ms-auto'>
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to='/menu'>Menu</Nav.Link>
              <Nav.Link as={Link} to='/booking'>Booking</Nav.Link>
              <Nav.Link as={Link} to='/cart'><FaOpencart /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation;