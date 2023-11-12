import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Tldraw } from '@tldraw/tldraw';

import albumApi from '../../../service/album';
import { MainContainer } from '../../../common/atoms/Container';
import { AlbumInfo, AlbumContent } from './components';
import DeleteAlbumModal from './components/DeleteAlbumModal';
import ManageGroupModal from './components/ManageGroupModal';
import { LocalImage } from '../../../common/atoms/Image';

const AlbumViewPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [albumId, setAlbumId] = useState('-1');

    useEffect(() => {
        const pathSegments = location.pathname.split('/');
        setAlbumId(pathSegments[pathSegments.length - 1]);
    }, [location]);

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['albumDetails', albumId],
        queryFn: () => albumApi.getAlbumById(albumId),
    });

    const [flippedPage, setFlippedPage] = useState(0);

    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [targetIdx, setTargetIdx] = useState(-1);
    const [targetImage, setTargetImage] = useState(<></>);

    const handleDeleteButtonClick = (pageIdx: number) => {
        const img = data ? (
            <LocalImage src={data.pages[pageIdx].image} />
        ) : (
            <></>
        );

        setTargetIdx(pageIdx);
        setTargetImage(img);
        setDeleteModalOpen(true);
    };
    const closeDeleteModal = () => {
        setDeleteModalOpen(false);
    };
    const handleDeleteConfirm = () => {
        closeDeleteModal();
        data?.pages.splice(targetIdx, 1);
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

    const handleManageRecycleBin = () => {
        navigate(`/album/view/${albumId}/trash`);
    };
    const handleEditPage = (pageIdx: number) => {
        navigate(`/album/${albumId}/page/${pageIdx}`);
    };

    return (
        <MainContainer className="album_view">
            <AlbumInfo
                albumImage={data?.albumImage}
                albumName={data?.albumName}
                albumDescription={data?.description}
                albumMembers={data?.people}
                onManageGroup={handleGroupButtonClick}
                onManageRecycleBin={handleManageRecycleBin}
            />
            <AlbumContent
                pages={data?.pages}
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
