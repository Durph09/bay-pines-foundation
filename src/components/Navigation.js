import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import bayPinesVertLogo from "../assets/bayPinesVertLogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import AuthDetails from "./EmployeePortal/AuthDetails";

function Navigation() {
  const [expanded, setExpanded] = useState(false);
  const handleCollape = () => {
    setExpanded(!expanded);
  };
  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      fluid
      style={{
        zIndex: 1000,
        width: "100%",
        backgroundColor: "rgba(96, 126, 136, .8)",
        fontSize: "1.5rem",
        fontWeight: "bold",
        position: "absolute",
        top: 0,
      }}
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <img src={bayPinesVertLogo} alt="Bay Pines Foundation Logo" />
        </Navbar.Brand> 

        
        
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleCollape}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"} onClick={handleCollape}>
              Home
            </Nav.Link>
            <NavDropdown title="About Us" id="about-us-dropdown">
              <NavDropdown.Item
                as={Link}
                to={"/missionpage"}
                onClick={handleCollape}
              >
                Mission
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to={"/meetourteampage"}
                onClick={handleCollape}
              >
                Meet our Team
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="resources-dropdown">
              <NavDropdown.Item
                as={Link}
                to={"/veteranspage"}
                onClick={handleCollape}
              >
                Veterans
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to={"/employeeportalsignin"}
                onClick={handleCollape}
              >
                Employee Portal
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to={"/employeeportalsignin"}
                onClick={handleCollape}
              >
                Board Portal
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={"/contact"} onClick={handleCollape}>
              Contact
            </Nav.Link>
          </Nav>

          <AuthDetails/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
