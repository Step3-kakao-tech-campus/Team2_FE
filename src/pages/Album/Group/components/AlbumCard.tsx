import { LocalImage } from '../../../../common/atoms/Image';
import { DescriptionContainer } from '../../../../common/atoms/Container';
import './AlbumCard.scss';
interface AlbumCardProps {
    image: string;
    groupName: string;
    groupDescription: string;
    groupId: string;
    onClick: () => void;
}
export const AlbumCard = ({
    image,
    groupId,
    groupName,
    groupDescription,
    onClick,
}: AlbumCardProps) => {
    return (
        <div className="album_card">
            <LocalImage
                className="group_image"
                src={image}
                height="200px"
                width="100%"
                onClick={onClick}
            />
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
    const invitationLink = `https://k5ebddfe59255a.user-app.krampoline.com/album/invite?id=${id}`;

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(invitationLink);
            alert('링크가 클립보드에 복사되었습니다.'); // 사용자에게 피드백 제공
        } catch (err) {
            console.error('클립보드에 복사하지 못했습니다.', err);
            alert('클립보드에 복사하지 못했습니다.');
        }
    };
    return (
        <div className="album_btn_group">
            <button onClick={copyToClipboard}>공유</button>
            <button>수정</button>
            <button>삭제</button>
        </div>
    );
};
