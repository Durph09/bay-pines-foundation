import Hero2 from "./Hero2/Hero2";
import labgirl from "../../assets/labGirl.jpg";
import HeroCardSection from "./HeroCards/HeroCardSection";


const HomePage = () => {
  const text =
    "Advancing innovative research and education initiatives in support of verterans' health";
    const handleButtonClick = () => {
      console.log("Learn more button clicked");
    
      // Scroll to the HeroCardSection
      const heroCardSection = document.querySelector("#HeroCardSection");
      heroCardSection.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <div>
      <Hero2
        picURL={labgirl}
        displayText={text}
        buttonClick={handleButtonClick}
      />

      <HeroCardSection />
    </div>
  );
};

export default HomePage;
