import { useState } from 'react';

import Button from '../../../../common/atoms/Button';
import { LocalImage } from '../../../../common/atoms/Image';

import './AlbumInfo.scss';

interface AlbumInfoProps {
    albumImage?: string;
    albumName?: string;
    albumDescription?: string;
    albumMembers?: number;
    onManageGroup: () => void;
    onManageRecycleBin: () => void;
}

const AlbumInfo = ({
    albumImage,
    albumName,
    albumDescription,
    albumMembers,
    onManageGroup,
    onManageRecycleBin,
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
                <div className="btns">
                    <Button className="manage_album" onClick={onManageGroup}>
                        그룹 관리
                    </Button>
                    <Button
                        className="recycle_bin"
                        onClick={onManageRecycleBin}
                    >
                        휴지통
                    </Button>
                </div>
            </div>
            <div className="btn_fold" onClick={handleChangeFold} />
        </div>
    );
};

export default AlbumInfo;
