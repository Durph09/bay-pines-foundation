import Container from "react-bootstrap/Container";
import Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import bayPinesVertLogo from "../assets/bayPinesVertLogo.png";

const Footer = () => {

    return (
        <div style={{backgroundColor: "rgb(96,126,136)"}}>
            <Container>
            <Row> <Col xs={2}><img src={bayPinesVertLogo} alt="Bay Pines Foundation Logo" className="h-75 w-75" /></Col>
                
                <Col>Home</Col>
                <Col>About Us</Col>
                <Col>Resources</Col>
                <Col>Contact</Col>
            </Row>

            </Container>
        </div>
    );
};

export default Footer;