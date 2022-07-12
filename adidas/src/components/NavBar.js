import '../scss/NavBar.scss'

// function NavBar() {
//     return (
//         <ul>
//             <li>Home</li>
//             <li>Home</li>
//             <li>Home</li>
//             <li>Home</li>
//             <li>Home</li>
//             <li>Home</li>
//             <li>Home</li>
//             <li>Home</li>
//         </ul>
//     );
//   }
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src='./adidas.png'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <ul>
                <li>Hombre</li>
                <li>Mujer</li>
                <li>Niños</li>
            </ul>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// export default NavScrollExample;

export default NavBar;