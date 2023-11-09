import React from 'react';
import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import albumApi, { useInviteAlbumUser } from '../../../service/album';
import './index.scss';

const AlbumInvitePage: React.FC = () => {
    // URL에서 쿼리 파라미터를 추출
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const albumId = query.get('id');
    const { mutate: inviteAlbumUser, isLoading: isInviting } =
        useInviteAlbumUser(albumId ? albumId : 'a', 'Token');
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['albumDetails', albumId],
        queryFn: () => albumApi.getAlbumById(albumId),
        retry: 3,
        enabled: !!albumId,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>An error has occurred: error message here</div>;
    }

    if (!data) {
        return <div>No album data found</div>;
    }

    return (
        <div className="album-invite-page">
            <h1>앨범 초대</h1>
            <h2>{data.albumName}</h2>
            <p>{data.description}</p>
            <button onClick={() => inviteAlbumUser()} disabled={isInviting}>
                수락
            </button>
        </div>
    );
};

export default AlbumInvitePage;
