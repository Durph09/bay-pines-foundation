import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import bayPinesVertLogo from '../assets/bayPinesVertLogo.png';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fluid
      style={{
        zIndex: 1000,
        width: '100%',
        backgroundColor: 'rgba(96, 126, 136, .8)',  
        fontSize: "1.5rem",
        fontWeight: "bold",
        position: "absolute",
        top: 0,
      }}
      variant='dark'
    >
      <Container>
        <Navbar.Brand as={Link} to={'/'}>
          <img src={bayPinesVertLogo} alt="Bay Pines Foundation Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
            <NavDropdown title="About Us" id="about-us-dropdown">
              <NavDropdown.Item as={Link} to={'/missionpage'}>Mission</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/meetourteampage'}>Meet our Team</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="resources-dropdown">
              <NavDropdown.Item as={Link} to={'/veteranspage'}>Veterans</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/employeeportalsignin'}>Employee Portal</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/boardportalsignin'}>Board Portal</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={'/contact'}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
