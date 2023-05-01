import Hero2 from "../HomePage/Hero2/Hero2";
import teammeeting from "../../assets/teammeeting.jpg";
import TabbedListTeam from "./TabbedListTeam";
import { Container } from "react-bootstrap";


const MeetOurTeamPage = () => {
    const handleButtonClick = () => {
        console.log("Learn more button clicked");
    
        // Scroll to the HeroCardSection
        const heroCardSection = document.querySelector("#meetOurTeam");
        heroCardSection.scrollIntoView({ behavior: "smooth" });
      };
    return(
        <div>
            <Hero2 
            picURL={teammeeting} 
            displayText="Our mission is to honor and to serve Veterans and their families" 
            buttonClick={handleButtonClick} />
            <Container  className=" vh-75 my-5" id="meetOurTeam">
            <h2>Meet Our Team</h2>
            <Container className="my-4">
            <TabbedListTeam /></Container>
            </Container>
        </div>

    );
};

export default MeetOurTeamPage;