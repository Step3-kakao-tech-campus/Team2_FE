import { useQuery } from 'react-query';
import { useState } from 'react';
import { Tldraw } from '@tldraw/tldraw';

import albumApi from '../../../service/album';
import { MainContainer } from '../../../common/atoms/Container';
import { AlbumInfo, AlbumContent } from './components';

const pages = Array.from({ length: 9 }, (_, i) => (
    <div key={i}>
        <Tldraw id="tldraw-canvas" showUI={false} readOnly={true} />
    </div>
    // <div key={i}>{`Page ${i} Content`}</div>
));

const AlbumViewPage = () => {
    const userId = '1';
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['albumGroup', userId],
        queryFn: albumApi.getAlbumInfo,
    });

    const [flippedPage, setFlippedPage] = useState(0);

    const handleDeleteAlbum = () => {};

    const handleManageRecycleBin = () => {};

    return (
        <MainContainer className="album_view">
            <AlbumInfo
                albumImage={data?.image}
                albumName={data?.name}
                albumDescription={data?.description}
                albumMembers={data?.members}
                onManageAlbum={handleDeleteAlbum}
                onManageRecycleBin={handleManageRecycleBin}
            />
            <AlbumContent
                pages={pages}
                flippedPage={flippedPage}
                setFlippedPage={setFlippedPage}
            ></AlbumContent>
        </MainContainer>
    );
};

export default AlbumViewPage;
