import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text-center py-3">
            &copy; {new Date().getFullYear()} Bay Pines Foundation. All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
