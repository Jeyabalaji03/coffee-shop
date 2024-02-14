import React, { useContext } from 'react'
import { MenuContext } from '../../context/Context';
import { Card, Button, Row, Col } from 'react-bootstrap';

const MenuList = (props) => {

    const { id, name, price, src } = props.data;

    const { AddtoCart, cartItem } = useContext(MenuContext);

    const cartItemAmount = cartItem[id];

    return (
        <>
            <Col className='p-3'>
                <Card>
                    <Card.Body className='p-2 rounded'>
                        <Row>
                            <Col xs={6} sm={5} md={6} lg={5}>
                                <Card.Img src={src} style={{ height: '150px' }} />
                            </Col>
                            <Col xs={6} sm={7} md={6} lg={7}>
                                <Card.Title className='menu-txt'>{name}</Card.Title>
                                <Card.Text>{price} Rupees</Card.Text>
                                <Button variant="dark" onClick={() => AddtoCart(id)}>
                                    AddtoCart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default MenuList;