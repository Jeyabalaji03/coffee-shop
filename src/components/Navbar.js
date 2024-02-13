import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaCartArrowDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MenuContext } from '../context/Context'



function Navigation() {

  const { TotalCartCount } = useContext(MenuContext);
  const cartCount = TotalCartCount();


  return (
    <>
      <Navbar expand='md' className='fixed-top bg-light'>
        <Container>
          <Navbar.Brand as={Link} to='/'>DJ COFFEEE</Navbar.Brand>
          <Navbar.Toggle aria-controls='opned-nav' />
          <Navbar.Collapse id="opned-nav">
            <Nav className='ms-auto'>
              <Nav.Link className='me-3' as={Link} to='/'>Home</Nav.Link>
              <Nav.Link className='me-3' as={Link} to='/menu'>Menu</Nav.Link>
              <Nav.Link className='me-3' as={Link} to='/booking'>Booking</Nav.Link>
              <Nav.Link className='cart-item' as={Link} to='/cart'>
                  <FaCartArrowDown />
                  <span>{cartCount}</span>
                
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation;