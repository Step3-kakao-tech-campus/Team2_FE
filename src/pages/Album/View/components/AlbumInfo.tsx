import Button from '../../../../common/atoms/Button';
import { LocalImage } from '../../../../common/atoms/Image';

import './AlbumInfo.scss';

interface AlbumInfoProps {
    albumImage?: string;
    albumName?: string;
    albumDescription?: string;
    albumMembers?: number;
    onManageAlbum: () => void;
    onManageRecycleBin: () => void;
}

const AlbumInfo = ({
    albumImage,
    albumName,
    albumDescription,
    albumMembers,
    onManageAlbum,
    onManageRecycleBin,
}: AlbumInfoProps) => {
    return (
        <div className="album_info">
            <div className="album_image">
                <LocalImage
                    src={albumImage || 'user.png'}
                    alt="앨범 대표 이미지"
                />
            </div>
            <div className="album_details">
                <div className="album_title">
                    <div className="album_name">
                        <h3>{albumName}</h3>
                    </div>
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
            <div>
                <Button className="manage_album" onClick={() => onManageAlbum}>
                    그룹 관리
                </Button>
                <Button
                    className="recycle_bin"
                    onClick={() => onManageRecycleBin}
                >
                    휴지통
                </Button>
            </div>
        </div>
    );
};

export default AlbumInfo;
