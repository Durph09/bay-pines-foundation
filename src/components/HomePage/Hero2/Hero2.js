import "./Hero2.css";
import { Fade } from "react-awesome-reveal";

import Button from "react-bootstrap/Button";

const Hero2 = ({ picURL, displayText, buttonClick }) => {
  const fade1Delay = 0.7e3;
  const fade1Damping = 0.3e-1;
  const displayTextLength = displayText.length;
  const timeOfFirstFade = () => {
    return displayTextLength * (Math.abs(fade1Damping) * 1000) + fade1Delay;
  };

  const calculatedTimeOfFirstFade = timeOfFirstFade();
  console.log(
    `fade1delay: ${fade1Delay} , fade1Damping: ${fade1Damping}, displayTextLenght: ${displayTextLength}`
  );
  console.log(calculatedTimeOfFirstFade);

  return (
    <div
      className="image-container"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.7)), url(${picURL})`,
      }}
    >
      <div className="text-container">
        <Fade delay={0.7e3} className="revealText" cascade damping={0.3e-1} triggerOnce>
          {displayText}
        </Fade>
        <Fade delay={calculatedTimeOfFirstFade} triggerOnce>
          <Button variant="light" onClick={buttonClick}>
            Learn More
          </Button>
        </Fade>
      </div>
    </div>
  );
};

export default Hero2;
