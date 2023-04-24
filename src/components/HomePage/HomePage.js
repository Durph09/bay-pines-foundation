import Hero2 from "./Hero2/Hero2";
import labgirl from "../../assets/labGirl.jpg"
import HeroCardSection from "./HeroCards/HeroCardSection";


const HomePage = () => {
  const text = "Bay Pines Foundation";
  const handleButtonClick = () => {
    console.log("Learn more button clicked");
  };

  return (
    <div>
      <Hero2 picURL={labgirl} displayText ={text} buttonClick={handleButtonClick} />
      
      <HeroCardSection />
    </div>
  );
};

export default HomePage;
