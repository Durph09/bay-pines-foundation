import flagpalm from "../../assets/flagpalm.jpg";
import Hero2 from "../HomePage/Hero2/Hero2";
import TextImageSlide from "../TextImageSlide/TextImageSlide";
import abe from "../../assets/lincoln.jpg";
import Container from "react-bootstrap/Container";

const MissionPage = () => {
  const missionText =
    "Advancing innovative research and education initiatives in support of veterans' health";
  const handleButtonClick = () => {
    console.log("Learn more button clicked, smooth scroll to next section");
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
      <TextImageSlide textTextImageSlide={textquote} srcTextImageSlide={abe} />
      <Container><p>Bay Pines Foundation, Inc. is an independent, nonprofit corporation in 
      the state of Florida, and partner of the Bay Pines VA Healthcare System (BPVAHCS). 
      Bay Pines Foundation is one of approximately 80 Veterans Affairs-affiliated nonprofit 
      corporations (NPCs) in the United States created under Congressional authority to 
      allow for approved private and non-VA federal funding for VA research and education.
Our mission is to honor and to serve Veterans and their families by advancing INNOVATIVE 
RESEARCH and EDUCATION initiatives in collaboration with BPVAHCS, with the goal of IMPROVING 
VETERAN HEALTH OUTCOMES.</p></Container>
    </div>
  );
};

export default MissionPage;

//add smooth scroll to next section
// abe lincolc quote with pic
