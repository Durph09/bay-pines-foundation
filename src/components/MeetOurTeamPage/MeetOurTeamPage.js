import Hero2 from "../HomePage/Hero2/Hero2";
import teammeeting from "../../assets/teammeeting.jpg";
import TabbedListTeam from "./TabbedListTeam";


const MeetOurTeamPage = () => {
    const handleButtonClick = () => {
        console.log("Learn more button clicked, smooth scroll to next section");
      };
    return(
        <div>
            <Hero2 
            picURL={teammeeting} 
            displayText="Our mission is to honor and to serve Veterans and their families" 
            buttonClick={handleButtonClick} />
            <TabbedListTeam />
        </div>

    );
};

export default MeetOurTeamPage;