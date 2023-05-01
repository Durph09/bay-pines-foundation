import flagpalm from "../../assets/flagpalm.jpg";
import Hero2 from "../HomePage/Hero2/Hero2";
import TextImageSlide from "../TextImageSlide/TextImageSlide";
import abe from "../../assets/lincoln.jpg";
import Container from "react-bootstrap/Container";
import "./MissionPage.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MissionPage = () => {
  const missionText =
    "Advancing innovative research and education initiatives in support of veterans' health";
  const handleButtonClick = () => {
    console.log("Learn more button clicked");

    // Scroll to the HeroCardSection
    const heroCardSection = document.querySelector("#missionPage");
    heroCardSection.scrollIntoView({ behavior: "smooth" });
  };
  const textquote =
    "To care for him who shall have borne the battle and for his widow, and his orphan.";
  return (
    <div>
      <Hero2
        picURL={flagpalm}
        displayText={missionText}
        buttonClick={handleButtonClick}
      />
      <div id="missionPage">
        <TextImageSlide
          textTextImageSlide={textquote}
          srcTextImageSlide={abe}
        />
        <Container className="about-us">
          <h2>About Us and Our Mission</h2>
          <hr />
          <Container>
            <Row>
              <Col md={6}>
                <p>
                  Bay Pines Foundation, Inc. is an independent, nonprofit
                  corporation in the state of Florida, and partner of the Bay
                  Pines VA Healthcare System (BPVAHCS).
                </p>
                <p>
                  Our mission is to honor and to serve Veterans and their
                  families by advancing innovative research and education
                  initiatives in collaboration with BPVAHCS, with the goal of
                  improving veterans health outcomes.
                </p>

                <p>
                  Bay Pines Foundation is one of approximately 80 Veterans
                  Affairs-affiliated nonprofit corporations (NPCs) in the United
                  States created under Congressional authority to allow for
                  approved private and non-VA federal funding for VA research
                  and education.
                </p>
              </Col>
              <Col md={6} className="text-center">
                <h2 className="honor">
                  <em>"Honor</em> <br />
                  and <br />
                  <em>Serve" </em>
                </h2>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>{" "}
    </div>
  );
};

export default MissionPage;

//add smooth scroll to next section
// abe lincolc quote with pic
