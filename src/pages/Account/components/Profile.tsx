import React, { useState } from 'react';

import { LocalImage } from '../../../common/atoms/image';
import './Profile.scss';

interface ProfileProps {
    img: string;
    titleIdx: number;
    achievementTitle: string[];
}

const Profile: React.FC<ProfileProps> = ({
    img,
    titleIdx,
    achievementTitle,
}) => {
    const [selectedTitleIdx, setSelectedTitleIdx] = useState(titleIdx);

    const handleTitleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newIndex = parseInt(e.target.value, 10);
        setSelectedTitleIdx(newIndex);
    };

    return (
        <div className="profile">
            <div className="circle">
                <LocalImage src={img}></LocalImage>
            </div>
            <div>
                <select
                    value={selectedTitleIdx}
                    onChange={handleTitleChange}
                    className="achievement-dropdown"
                >
                    {achievementTitle.map((title, index) => (
                        <option key={index} value={index} className="others">
                            {title}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Profile;
