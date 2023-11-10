import { useQuery } from 'react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tldraw } from '@tldraw/tldraw';

import albumApi from '../../../service/album';
import { MainContainer } from '../../../common/atoms/Container';
import { AlbumInfo, AlbumContent } from './components';
import DeleteAlbumModal from './components/DeleteAlbumModal';

const pages = Array.from({ length: 9 }, (_, i) => (
    // <div key={i}>
    //     <Tldraw id="tldraw-canvas" showUI={false} readOnly={true} />
    // </div>
    <div key={i}>{`Page ${i} Content`}</div>
));

const AlbumViewPage = () => {
    const userId = '1';
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
    const deleteModalClose = () => {
        setDeleteModalOpen(false);
    };
    const handleDeleteConfirm = () => {
        deleteModalClose();
        console.log(`delete page: ${targetIdx}`);
    };

    const deleteAlbumProps = {
        albumImage: targetImage,
        handleClose: deleteModalClose,
        handleDelete: handleDeleteConfirm,
    };

    const handleManageAlbum = () => {};
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
                onManageAlbum={handleManageAlbum}
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
        </MainContainer>
    );
};

export default AlbumViewPage;
