import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './ImageCard.css';
import Button from 'react-bootstrap/Button';

const HeroCard = ({ imageSrc, title, description, alt, buttonText, clicked }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="image-card h-100" onClick={handleFlip}>
    <div className='flip-card'>
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        <Card.Img className="flip-card-front" variant="top" src={imageSrc} alt={alt} />
        <Card className="flip-card-back h-100">
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button variant="outline-secondary align-ite" size="lg" onClick={clicked}>
              {buttonText}
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
    </div>
  );
};

export default HeroCard;
