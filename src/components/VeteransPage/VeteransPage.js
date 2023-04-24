import Hero2 from "../HomePage/Hero2/Hero2";
import americanFlagWaving from "../../assets/americanFlagWaving.mp4";
import { Fade } from "react-awesome-reveal";
import "../../components/HomePage/Hero/Hero.css";
import "../../components/HomePage/Hero2/Hero2.css";
import Button from "react-bootstrap/Button";
import TextImageSlide from "../TextImageSlide/TextImageSlide";
import doctorbloodpressure from "../../assets/doctorbloodpressure.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Slide } from "react-awesome-reveal";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "../../components/TextImageSlide/TextImageSlide.css";

const VeteransPage = () => {
  const handleButtonClick = () => {
    console.log("Learn more button clicked, smooth scroll to next section");
  };

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div
        className="heroContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="heroDiv">
          <video
            src={americanFlagWaving}
            autoPlay
            loop
            muted
            playsInline
            className="heroVid"
          />
        </div>
        <Fade delay={1e3} className="text-container" cascade damping={0.3e-1}>
          
          Veterans
        </Fade>
        <Fade delay={2e3}>
          <Button variant="light" onClick={handleButtonClick}>
            Learn More
          </Button>
        </Fade>
      </div>

      <Row className="vw-100 overflow-hidden my-5 align-items-center">
        <Col md={6}>
          <Slide triggerOnce direction="left">
            <Image
              src={doctorbloodpressure}
              alt="Doctor taking blood pressure"
              className="Text-Image-Slide-Image"
            />
          </Slide>
        </Col>

        <Col md={6} className="align-items-center">
          <Slide triggerOnce direction="right">
            <p>
              If you are interested in participating in a research study, or if
              you have any questions about research studies:
            </p>
            <Button>please contact</Button>
            <div className="my-3 py-3">
              <p>
                Please click on the link below for additional information about
                being a participant in a research study:
              </p>
              <Button onClick={handleOpenModal}>
                Additional information from the V.A.
              </Button>
            </div>
          </Slide>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Additional Information from the V.A.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src={`https://docs.google.com/viewer?url=https://www.research.va.gov/for_veterans/Volunteering-in-Research.pdf&embedded=true`}
            width="100%"
            height="600px"
            title="Volunteering in Research"
            style={{ border: "none" }}
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default VeteransPage;
