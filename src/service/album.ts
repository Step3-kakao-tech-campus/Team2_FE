import httpClient from './index';

interface AlbumsResponse {
    albums: [
        {
            id: string;
            image: string;
            albumName: string;
            description: string;
        },
    ];
}

interface AlbumInfoResponse {
    id: string;
    image: string;
    name: string;
    description: string;
    members: number;
}

const albumApi = {
    getAlbumGroup: (): Promise<AlbumsResponse> => httpClient.get('/groups'),
    getAlbumInfo: (): Promise<AlbumInfoResponse> =>
        httpClient.get('/album-info'),
};

export default albumApi;
