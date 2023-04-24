import Hero2 from "../HomePage/Hero2/Hero2";
import vaPartner from "../../assets/vaPartner.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Slide } from "react-awesome-reveal";
import BayPinesVAMC from "../../assets/BayPinesVAMC.jpg";
import  Container  from "react-bootstrap/Container";

const VAPartner = () => {
  const handleButtonClick = () => {
    console.log("Learn more button clicked, smooth scroll to next section");
  };

  return (
    <div>
      <Hero2
        picURL={vaPartner}
        displayText="Bay Pines VA HealthCare System"
        buttonClick={handleButtonClick}
      />
      <Container className="text-start vaArticle">
        
          <h1>Our Partner</h1>
       
        <div>
          <h2 style={{ textAlign: "start" }}>
            <span style={{ color: "rgb(179,35,24)" }}>
              <em>
                <strong>Bay Pines VA Healthcare System</strong>
              </em>
            </span>
          </h2>
<p>
            The Bay Pines VA Healthcare System (BPVAHCS) is a comprehensive
            Veterans healthcare system serving over 100,000 Veterans annually
            from among its 10-county catchment area in central southwest Florida
            (making Bay Pines the 4th busiest VA healthcare system in the
            nation).&nbsp; BPVAHCS represents a complexity level 1a, tertiary
            care facility, offering a full continuum of primary and specialty
            care as well as related medical and social support services.
          </p>
          <p>
            BPVAHCS operates its main facility, the C.W. Bill Young VA Medical
            Center, on 337 acres situated near the Gulf of Mexico approximately
            eight miles northwest of St. Petersburg.&nbsp; It shares this campus
            with a VA Regional Office and a National Cemetery, making Bay Pines
            one of only a few VA campuses that houses all three arms of the
            agency.&nbsp; In addition to the Bay Pines campus, BPVAHCS also
            operates eight outpatient clinics located in: Bradenton, Lee County,
            Naples, Palm Harbor, Port Charlotte, St. Petersburg, Sarasota, and
            Sebring.
          </p>
          <Row className="vw-100 over-flow-hidden my-5 align-items-start">
            <Col md={6}>
              <Slide triggerOnce direction="left">
                <Image
                  src={BayPinesVAMC}
                  alt="Veterans in a parade"
                  className="Text-Image-Slide-Image"
                />
              </Slide>
            </Col>

            <Col md={6} className="align-items-center text-start">
              <Slide triggerOnce direction="right"></Slide>
           

          
          <h3>
            <span style={{ color: "rgb(179,35,24)" }}>
              <em>
                <strong>Mission</strong>
              </em>
            </span>
          </h3>
          <p>
            Honor America’s veterans by providing exceptional healthcare that
            improves their health and well-being.
          </p>
          <h3>
            <span style={{ color: "rgb(179,35,24)" }}>
              <em>
                <strong>Vision</strong>
              </em>
            </span>
          </h3>
          <p>
            Continue to be the benchmark of excellence and value in healthcare
            and benefits by providing exemplary services that are both
            patient-centered and evidence-based.
          </p>
          <p>
            This care will be delivered by engaged, collaborative teams in an
            integrated environment that supports learning, discovery, and
            continuous improvement.
          </p>
          <p>
            It will emphasize prevention and population health and contribute to
            the Nation’s well-being through education, research, and service in
            national emergencies.
          </p>
          <h3>
            <span style={{ color: "rgb(179,35,24)" }}>
              <em>
                <strong>Values</strong>
              </em>
            </span>
          </h3>
          <p>Integrity, Commitment, Advocacy, Respect, Excellence</p>
          <hr />
          <p>
            Address:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10,000 Bay Pines Blvd.,
            Bay Pines, FL 33744
          </p>
          <p>Telephone:&nbsp;&nbsp; 727-398-6661</p> 
          </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default VAPartner;
