import { Container, Row } from "react-bootstrap"
import './menustyle.css'
import MenuItem from './menuitem';
import MenuList from './menulist';


const Menu = () => {
  return (
    <div>
      <div id="menu">
        <div className="menu-img"></div>
        <div className="menu-content">
          <h1>Menu Items</h1>
          <h2>We have different flavors to choose from</h2>
          <h4>Choose your style / choose your flavor </h4>
        </div>
      </div>
      <Container>
        <Row xs={1} lg={2}>
          {MenuItem.map((item, index) => (
            <MenuList data={item} key={index} />
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Menu;
