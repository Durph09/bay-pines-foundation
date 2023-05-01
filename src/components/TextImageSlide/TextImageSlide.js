import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { Slide } from "react-awesome-reveal";
import "./TextImageSlide.css";

const TextImageSlide = ({
  srcTextImageSlide,
  altTextImageSlide,
  textTextImageSlide,
}) => {
  return (
    <Container>
      <Row className="overflow-hidden my-5 align-items-center">
        <Col md={6}>
          <Slide triggerOnce direction="left" fraction='.7'>
            <Image
              src={srcTextImageSlide}
              alt={altTextImageSlide}
              className="Text-Image-Slide-Image"
            />
          </Slide>
        </Col>

        <Col md={6} className="align-items-center">
          <Slide triggerOnce direction="right" fraction='.5'>
            {" "}
            <blockquote className="blockquote">
              <h3>{textTextImageSlide}</h3>
            </blockquote>
            <figcaption className="blockquote-footer">
              Aberham Lincolc March 4, 1865
            </figcaption>
          </Slide>
        </Col>
      </Row>
    </Container>
  );
};

export default TextImageSlide;
