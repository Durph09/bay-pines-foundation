import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './ImageCard.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import { Flip } from 'react-awesome-reveal';

const HeroCard = ({ imageSrc, title, description, alt, buttonText, linkTo, cardLabel }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Container className="image-card h-100" onClick={handleFlip}>
    <div className='flip-card'>
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        <Card.Img className="flip-card-front" variant="top" src={imageSrc} alt={alt}/>
        
        
        <Card className="flip-card-back h-100 border-0">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button variant="outline-secondary "  as={Link} to={linkTo}>
              {buttonText}
            </Button>
          </Card.Body>
        </Card>
      </div>
      <h1>{cardLabel}</h1>
    </div>
    
    </Container>
  );
};

export default HeroCard;
