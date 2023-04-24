import Hero2 from "../HomePage/Hero2/Hero2";
import contactUs from "../../assets/contactUs.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import veteransParade from "../../assets/veteransParade.jpg";
import { Slide } from "react-awesome-reveal";
import bayPinesLogo from "../../assets/bayPinesLogo.png";

const Contact = () => {
  const handleButtonClick = () => {
    console.log("Learn more button clicked, smooth scroll to next section");
  };

  return (
    <div>
      <Hero2
        picURL={contactUs}
        displayText="We're listening..."
        buttonClick={handleButtonClick}
      />

      <Row className="vw-100 over-flow-hidden my-5 align-items-center">
        <Col md={6}>
          <Slide triggerOnce direction="left">
            <Image
              src={veteransParade}
              alt="Veterans in a parade"
              className="Text-Image-Slide-Image"
            />
          </Slide>
        </Col>

        <Col md={6} className="align-items-center text-start lh-lg">
          <Slide triggerOnce direction="right">
            <section>
              <div>
                <div className=" text-left">
                <Image src={bayPinesLogo} alt="Bay Pines Foundation"/> <br />
                  <a
                    href="https://maps.google.com/maps?z=16&amp;q=p.o.%2Bbox%2B416%2B10%2C000%2Bbay%2Bpines%2Bblvd.%2Bbuilding%2B22%2C%2Broom%2B115%2Bbay%2Bpines%2C%2Bfl%2B33744"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    P.O. Box 416
                    <br />
                    10,000 Bay Pines Blvd.
                    <br />
                    Building 22, Room 115
                    <br />
                    Bay Pines, FL 33744
                  </a>
                </div>
                <div>
                  <span>
                    Phone: (727) 398-6661 EXT 17926
                  </span>
                </div>
                <div >
                  <a href="mailto:baypinesfnd@gmail.com">
                    baypinesfnd@gmail.com
                  </a>
                </div>
                <div >
                  Hours: M-F 8:00 am-4:30 pm
                </div>
              </div>
            </section>
          </Slide>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
