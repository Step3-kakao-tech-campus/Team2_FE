import { useState } from 'react';

import './AlbumInfomation.scss';
import Button from '../../../common/atoms/Button';
import { LocalImage } from '../../../common/atoms/Image';

interface AlbumInfoProps {
    albumImage?: string;
    albumName?: string;
    albumDescription?: string;
    albumMembers?: number;
}

const AlbumInfomation = ({
    albumImage,
    albumName,
    albumDescription,
    albumMembers,
}: AlbumInfoProps) => {
    const [isFolded, setIsFolded] = useState(false);
    const handleChangeFold = () => {
        console.log('change fold');
        setIsFolded(prev => !prev);
    };

    return (
        <div className="album_info">
            <div className={`album_fold ${isFolded ? 'folded' : ''}`}>
                <div className="album_image">
                    <LocalImage
                        src={albumImage || 'user.png'}
                        alt="앨범 대표 이미지"
                    />
                </div>
                <div className="album_details">
                    <div className="album_title">
                        <div className="album_name">{albumName}</div>
                        <div className="album_members">
                            <LocalImage
                                src="group.png"
                                alt="그룹 인원수"
                                height="20px"
                            />
                            {albumMembers}
                        </div>
                    </div>
                    <div className="album_description">{albumDescription}</div>
                </div>
            </div>
            <div className="btn_fold" onClick={handleChangeFold} />
        </div>
    );
};

export default AlbumInfomation;
