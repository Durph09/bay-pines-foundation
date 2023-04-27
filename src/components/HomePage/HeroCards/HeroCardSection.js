import HeroCard from "./HeroCard";
import nurse from "../../../assets/nurse.jpg";
import vetran from "../../../assets/vetran.jpg";
import vaPartner from "../../../assets/vaPartner.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import bayPinesVertLogo from "../../../assets/bayPinesVertLogo.png";
import "./ImageCard.css";

const HeroCardSection = () => {
  return (
    <Container className="text-center overflow-hidden my-5 vh-75">
       <img src={bayPinesVertLogo} alt="Bay Pines Foundation Logo" /> 
      <h2 style={{display:"inline-block"}}><em>"To Honor and serve Veterans and their families"</em></h2>

      <Row className="my-auto vh-75" >
        <Col md={4} xs={12} className="mb-2">
          <HeroCard
            imageSrc={nurse}
            title="About Us"
            description="Our mission is to honor and to serve Veterans and their families"
            alt="nurse"
            buttonText="Learn More"
            linkTo={"/missionpage"}
            cardLabel="About Us"
          />
         
        </Col>

        <Col md={4} xs={12} className="mb-2">
          <HeroCard
            imageSrc={vetran}
            title="VA Research"
            description="Are you interested in learning more about VA Research? Do you want to participate in a research study? Click below to learn more"
            alt="Veteran"
            buttonText="Learn More"
            linkTo={"/veteranspage"}
            cardLabel=" Veteran Resources"
          />
          
        </Col>
        <Col md={4} xs={12} className="mb-2">
          <HeroCard
            imageSrc={vaPartner}
            title="BAY PINES VA HEALTHCARE SYSTEM"
            description="The Bay Pines VA Healthcare System (BPVAHCS) is a comprehensive Veterans healthcare system serving over 100,000 Veterans annually"
            alt="veteran"
            buttonText="Learn More"
            linkTo={"/vapartners"}
            cardLabel= "Our VA Partner"
          />
          
        </Col>
      </Row>
    </Container>
  );
};

export default HeroCardSection;

// highlight card on hover