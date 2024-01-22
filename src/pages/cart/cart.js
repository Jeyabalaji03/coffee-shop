import React, { useContext } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap"
import { MenuContext } from '../../context/Context'
import MenuItem from '../menu/menuitem'
import CartList from './cartlist';
import { useNavigate } from 'react-router-dom';

function Cart() {

  const { cartItem, TotalCartAmount } = useContext(MenuContext);

  const Navigate = useNavigate();

  const totalAmount = TotalCartAmount();

  return (
    <>
      <Container className='mb-5'>
        <h1 className='text-center py-4'>Your Cart Items</h1>
        <Row>
          <Col lg={2}></Col>
          <Col lg={7}>
            {MenuItem.map((item, index) => (
              cartItem[item.id] !== 0 && <>
                <CartList data={item} key={index} />
              </>
            ))}
          </Col>
          <Col lg={2}></Col>
        </Row>
        {totalAmount > 0 ?
          <section className='text-center mt-3'>
            <h5 className='p-3'> Total Amount : {totalAmount} Rupees</h5>
            <div className='g-3'>
              <Button variant="secondary" onClick={() => Navigate('/menu')}>Continue Shopping</Button>&nbsp;
              <Button variant="secondary">Proceed to Buy</Button>
            </div>
          </section> : <h3 className='text-center'> Your Cart is empty</h3>
        }
      </Container>
    </>
  )
}

export default Cart;
