import { useQuery } from 'react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tldraw } from '@tldraw/tldraw';

import albumApi from '../../../service/album';
import { MainContainer } from '../../../common/atoms/Container';
import { AlbumInfo, AlbumContent } from './components';
import DeleteAlbumModal from './components/DeleteAlbumModal';
import ManageGroupModal from './components/ManageGroupModal';

const pages = Array.from({ length: 9 }, (_, i) => (
    // <div key={i}>
    //     <Tldraw id="tldraw-canvas" showUI={false} readOnly={true} />
    // </div>
    <div key={i}>{`Page ${i} Content`}</div>
));

const AlbumViewPage = () => {
    const userId = '1';
    const albumId = '1';
    const navigate = useNavigate();

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['albumGroup', userId],
        queryFn: albumApi.getAlbumInfo,
    });

    const [flippedPage, setFlippedPage] = useState(0);

    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [targetIdx, setTargetIdx] = useState(-1);
    const [targetImage, setTargetImage] = useState(<></>);

    const handleDeleteButtonClick = (pageIdx: number) => {
        setTargetIdx(pageIdx);
        setTargetImage(pages[pageIdx]);
        setDeleteModalOpen(true);
    };
    const closeDeleteModal = () => {
        setDeleteModalOpen(false);
    };
    const handleDeleteConfirm = () => {
        closeDeleteModal();
        console.log(`delete page: ${targetIdx}`);
    };

    const deleteAlbumProps = {
        albumImage: targetImage,
        closeModal: closeDeleteModal,
        deletePage: handleDeleteConfirm,
    };

    const [isGroupModalOpen, setGroupModalOpen] = useState(false);

    const handleGroupButtonClick = () => {
        setGroupModalOpen(true);
    };
    const closeGroupModal = () => {
        setGroupModalOpen(false);
    };
    const handleDeleteGroupConfirm = () => {
        closeGroupModal();
        console.log(`delete group: 1`);
    };

    const {
        isLoading: isLoading2,
        isError: isError2,
        data: data2,
        error: error2,
    } = useQuery({
        queryKey: ['albumMembers', albumId],
        queryFn: () => albumApi.getMembers(albumId),
        retry: 3,
        enabled: !!albumId,
    });

    const searchUser = (nickname: string) => {
        console.log(`search user ${nickname}`);
    };
    const inviteMember = (userId: string) => {
        console.log(`invite member ${userId}`);
    };
    const manageGroupProps = {
        members: data2?.members,
        searchUser: searchUser,
        inviteMember: inviteMember,
        closeModal: closeGroupModal,
        deleteGroup: handleDeleteGroupConfirm,
    };

    const handleManageRecycleBin = () => {};
    const handleEditPage = (pageIdx: number) => {
        console.log(pageIdx);
        navigate('/album/1/page/1');
    };

    return (
        <MainContainer className="album_view">
            <AlbumInfo
                albumImage={data?.image}
                albumName={data?.name}
                albumDescription={data?.description}
                albumMembers={data?.members}
                onManageGroup={handleGroupButtonClick}
                onManageRecycleBin={handleManageRecycleBin}
            />
            <AlbumContent
                pages={pages}
                flippedPage={flippedPage}
                setFlippedPage={setFlippedPage}
                handleDelete={handleDeleteButtonClick}
                handleEdit={handleEditPage}
            ></AlbumContent>
            {isDeleteModalOpen && <DeleteAlbumModal {...deleteAlbumProps} />}
            {isGroupModalOpen && <ManageGroupModal {...manageGroupProps} />}
        </MainContainer>
    );
};

export default AlbumViewPage;
