import '../scss/NavBar.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';


function NavBar() {
  return (
    <Navbar className='navBar' collapseOnSelect expand="lg" bg="" variant="light">
      <Container>
        <Navbar.Brand href="/"><img className='logo' src='/adidas.png'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className='me-auto'>
              <Link to={`/category/camisetas`}>Camisetas</Link>
              <Link to={`/category/buzos`}>Buzos</Link>
              <Link to={`/category/camperas`}>Camperas</Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;