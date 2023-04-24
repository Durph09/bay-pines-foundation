import americanFlagWaving from "../../../assets/americanFlagWaving.mp4";
import "./Hero.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import nurse from "../../../assets/nurse.jpg";
import soldierFamily from "../../../assets/soldierFamily.jpg";
import vetran from "../../../assets/vetran.jpg";
import { motion} from "framer-motion";
import { Fade } from "react-awesome-reveal";


const Hero = () => {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: .9, scale: 1 },
  };
  return (
    <div className="heroContainer">
    <div className="heroDiv">
      <video
        src={americanFlagWaving}
        autoPlay
        loop
        muted
        playsInline
        className="heroVid"
      />
      </div>
      <Row className="heroRow p-0 m-0">
        <Col md={4} xs={12} className="m-0 p-0">
          <motion.img
            className="heroImage"
            src={vetran}
            alt="vetran"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={imageVariants}
            transition={{ duration: 4 }}
            
          />
          <div className="heroText"><h1><Fade cascade damping={0.3e-1}>Veteran Health</Fade></h1></div>
        </Col>
        <Col md={4} xs={12} className="m-0 p-0 ">
          <motion.img
            className="heroImage"
            src={nurse}
            alt="nurse"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={imageVariants}
            transition={{ duration: 4 }}
            
          />
          <div className="heroText"><h1><Fade cascade damping={0.3e-1}>Innovative Research</Fade></h1></div>
        </Col>
        <Col md={4} xs={12} className="m-0 p-0">
          <motion.img
            className="heroImage"
            src={soldierFamily}
            alt="soldier with family"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={imageVariants}
            transition={{ duration: 4 }}
          />
          <div className="heroText"><h1><Fade cascade damping={0.3e-1}>Education</Fade></h1></div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;
