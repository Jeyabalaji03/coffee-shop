import { Card, Button, Row, Col } from "react-bootstrap";
import { MenuContext } from "../../context/Context";
import { useContext } from "react";


const CartList = (props) => {

  const { name, price, id, src } = props.data;

  const { cartItem, AddtoCart, RemoveCart } = useContext(MenuContext)


  return (
    <div className="p-2 cart-list">
      <Card>
        <Card.Body>
          <Row>
            <Col xs={6} sm={4}>
              <Card.Img src={src} style={{ height: '130px' }} />
            </Col>
            <Col xs={6} sm={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div>
              <Card.Title className="cart-txt">{name}</Card.Title>
              <Card.Text>{price} Rupees</Card.Text>
              </div>
            </Col>
            <Col xs={12} sm={4} className="cart-text" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Card.Text>
                <Button variant="dark" onClick={() => AddtoCart(id)}>+</Button> &nbsp;
                <span>{cartItem[id]}</span> &nbsp;
                <Button variant="dark" onClick={() => RemoveCart(id)}>- </Button>
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}


export default CartList;