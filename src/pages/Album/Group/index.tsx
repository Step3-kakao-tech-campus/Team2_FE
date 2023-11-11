import { LocalImage } from '../../../common/atoms/Image';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainContainer } from '../../../common/atoms/Container';
import { AlbumCard } from './components/AlbumCard';
import { TipBox, TitleContainer, WrapContainer } from './components/Containers';
import { useQuery } from 'react-query';
import albumApi from '../../../service/album';
import StatusLayOut from '../../../common/templates/StatusLayOut';
const AlbumGroupPage = () => {
    const userId = '1';
    const navigate = useNavigate();

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['albumGroup', userId],
        queryFn: albumApi.getAlbumGroup,
    });

    const handleGroupClick = (groupId: string) => {
        navigate(`/album/view/${groupId}`);
    };

    return (
        <MainContainer>
            <LocalImage src="main_ carousel1.png" height="300px" />
            <StatusLayOut isLoading={isLoading} isError={isError} error={error}>
                <TipBox />
                <WrapContainer>
                    <TitleContainer />
                    {data?.albums.map(albumGroup => (
                        <AlbumCard
                            key={albumGroup.id}
                            image={albumGroup.image}
                            groupId={albumGroup.id}
                            groupName={albumGroup.albumName}
                            groupDescription={albumGroup.description}
                            onClick={() => {
                                handleGroupClick(albumGroup.id);
                            }}
                        />
                    ))}
                </WrapContainer>
            </StatusLayOut>
        </MainContainer>
    );
};

export default AlbumGroupPage;
