import React from 'react';
import './Card.scss';

interface CardProps {
  badgeImage1: string;
  badgeImage2: string;
  title: string;
  subTitle: string;
}

const MissionCard: React.FC<CardProps> = ({ badgeImage1, badgeImage2, title, subTitle }) => {
  return (
    <div className="Mission-Card">
      <div className="Mission-Card-badge" style={{ backgroundImage: `url(${badgeImage1})` }}></div>
      <span className="Mission-Card-title">{title}</span>
      <span className="Mission-Card-subTitle">{subTitle}</span>
      <div className="Mission-Card-badge" style={{ backgroundImage: `url(${badgeImage2})` }}></div>
    </div>
  );
};

export default MissionCard;
