import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

 export function NaveBar() {
  
    return (
    <Navbar bg="warning" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Mi sitio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/ofertas">Ofertas</Nav.Link>
            <NavDropdown title="Quines Somos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/trayectoria">Trayectoria</NavDropdown.Item>
              <NavDropdown.Item href="atencion al cliente">
              Atencion al Cliente
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/contactos">
                Contactenos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="dark">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

