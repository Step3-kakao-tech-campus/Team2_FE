import { LocalImage } from '../../../../common/atoms/Image';
import { DescriptionContainer } from '../../../../common/atoms/Container';
import './AlbumCard.scss';
interface AlbumCardProps {
    image: string;
    groupName: string;
    groupDescription: string;
    groupId: string;
}
export const AlbumCard = ({
    image,
    groupId,
    groupName,
    groupDescription,
}: AlbumCardProps) => {
    return (
        <div className="album_card">
            <LocalImage src={image} height="200px" width="100%" />
            <div className="content">
                <DescriptionContainer
                    title={groupName}
                    description={groupDescription}
                    width="100%"
                    className="fit"
                >
                    <ButtonGroup id={groupId} />
                </DescriptionContainer>
            </div>
        </div>
    );
};

const ButtonGroup = ({ id }: { id: String }) => {
    return (
        <div className="album_btn_group">
            <button>수정</button>
            <button>삭제</button>
        </div>
    );
};
