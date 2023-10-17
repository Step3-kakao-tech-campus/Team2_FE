import { useQuery } from 'react-query';

import albumApi from '../../../service/album';
import { MainContainer } from '../../../common/atoms/Container';
import { AlbumInfo, DiaryPage } from './components';

const AlbumViewPage = () => {
    const userId = '1';
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['albumGroup', userId],
        queryFn: albumApi.getAlbumInfo,
    });

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
            <DiaryPage></DiaryPage>
        </MainContainer>
    );
};

export default AlbumViewPage;
