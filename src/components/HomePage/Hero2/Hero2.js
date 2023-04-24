
import "./Hero2.css";
import { Fade } from "react-awesome-reveal";
import { motion} from "framer-motion";
import Button from "react-bootstrap/Button"



const Hero2 = ({picURL, displayText, buttonClick}) => {

 

    return(
       
        <div className='image-container' style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.7)), url(${picURL})`
          }}>
          
          
      
             
             
             <Fade delay={1e3} className="text-container" cascade damping={0.3e-1}>{displayText}
             </Fade>
             <Fade delay={2e3}><Button variant="light" onClick={buttonClick} >Learn More</Button></Fade>
       
        
       
         </div>
    );
};

export default Hero2

