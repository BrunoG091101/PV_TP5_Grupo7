import { Outlet, NavLink,Link } from "react-router-dom";
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
import logo from "../image/logo.jpg";
import Footer from "../Components/footer";
function Layout() {
  return (
    <>
      {/* Navbar fija arriba */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <Image
              src={logo}
              alt="logo"
              width="100"
              height="100"
              className="me-2"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" end>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About Us
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link as={NavLink} to="/juegos">
                Juegos
              </Nav.Link>
              <NavDropdown title="Projectos" id="projectos">
                <NavDropdown.Item as={Link} to="/prueva">
                  Practico 1
                </NavDropdown.Item>
                <NavDropdown.Item href="#Projecto2">
                  Practico 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#Projecto3">
                  Practico 3
                </NavDropdown.Item>
                <NavDropdown.Item href="#Projecto4">
                  Practico 4
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Contenido dinámico */}
      <Container className="mt-4">
        <Outlet />
      </Container>
      <Footer/>
    </>
  );
}

export default Layout;
