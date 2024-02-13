import { Container, Row } from "react-bootstrap"
import './menustyle.css'
import MenuItem from './menuitem';
import MenuList from './menulist';


const Menu = () => {
  return (
    <div>
      <div id="menu">
        <div className="menu-content">
          <h1>Menu Items</h1>
          <h2>We have different flavors to choose from</h2>
          <h4>Choose your different style</h4>
        </div>
      </div>
      <Container className="mt-5">
        <Row xs={1} md={2} lg={2}>
          {MenuItem.map((item, index) => (
            <MenuList data={item} key={index} />
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Menu;
