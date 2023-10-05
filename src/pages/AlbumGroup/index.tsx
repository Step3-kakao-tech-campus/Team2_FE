import { LocalImage } from '../../common/atoms/Image';
import React from 'react';
import { MainContainer } from '../../common/atoms/Container';
import { AlbumCard } from './components/AlbumCard';
import WrapContainer from './components/WrapContainer';
import { useQuery } from 'react-query';
import albumApi from '../../service/album';
import StatusLayOut from '../../common/templates/StatusLayOut';
const AlbumGroupPage = () => {
    const userId = '1';
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['albumGroup', userId],
        queryFn: albumApi.getAlbumGroup,
    });

    //이렇게해야 타입도움을 받을수잇는듯?

    return (
        <MainContainer>
            <LocalImage src="main_ carousel1.png" height="300px" />
            <StatusLayOut isLoading={isLoading} isError={isError} error={error}>
                <WrapContainer>
                    {data?.albums.map(albumGroup => (
                        <AlbumCard
                            key={albumGroup.id}
                            image={albumGroup.image}
                            groupId={albumGroup.id}
                            groupName={albumGroup.albumName}
                            groupDescription={albumGroup.description}
                        />
                    ))}
                </WrapContainer>
            </StatusLayOut>
        </MainContainer>
    );
};

export default AlbumGroupPage;
