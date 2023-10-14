import React from 'react';
import './reword.scss';

interface RewordCardProps {
    image: string;
    title: string | undefined;
    description: string | undefined;
    count: Number | undefined;
    goalCount: Number | undefined;
}

const RewordCard: React.FC<RewordCardProps> = ({ image, title, description, count, goalCount }) => {
    const getGoal = (count: Number | undefined, goalCount: Number | undefined) => {
        if (goalCount === count)
            return (
            <div className="reword_card_title_goal">
                <img className="reword_card_title_goal_image" src="/assets/check.png" alt="success" />
            </div>);
        else
            return (<div className="reword_card_title_goal">
                <p>{`${count} / ${goalCount}`}</p>
                </div>
            )
    }

    return (
        <div className="reword_card">
            <img className='reword_card_image' src={image} alt="이미지 1" />
            <div className='reword_card_title'>
                <div className='reword_card_title_line'>
                    <h3>{title}</h3>
                    {getGoal(count, goalCount)}
                </div>
                <div className='reword_card_description'>
                    <p>{description}</p>
                </div>
            </div>
           
        </div>
    );
};

export default RewordCard;
