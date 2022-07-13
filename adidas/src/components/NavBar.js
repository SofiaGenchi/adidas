import '../scss/NavBar.scss'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="" variant="light">
      <Container>
        <Navbar.Brand href="#home"><img className='logo' src='/adidas.png'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Hombre</Nav.Link>
            <Nav.Link href="#pricing">Mujer</Nav.Link>
            <Nav.Link href="#pricing">Niños</Nav.Link>
          </Nav>
          <Nav>
              <ion-icon name="bag-outline"></ion-icon>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;