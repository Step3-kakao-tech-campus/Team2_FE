import React from 'react';
import './Card.scss';

interface CardProps {
  image: string;
  groupName: string;
  groupDescription: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ image, groupName, groupDescription, className }) => {
  return (
    <div className={`Card ${className}`}>
      <img src={image} alt="group" className="Card-image"/>
      <h2 className="Card-title">{groupName}</h2>
      <p className="Card-description">{groupDescription}</p>
    </div>
  );
};

export default Card;
