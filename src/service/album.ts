import httpClient from './index';
import { useMutation } from 'react-query';
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

interface CanvasExampleResponse {
    name: string;
    fileHandle: object;
    document: object;
}

export interface CreateAlbumData {
    category: string;
    albumName: string | null;
    description: string;
    image: string;
}

const albumApi = {
    getAlbumGroup: (): Promise<AlbumsResponse> => httpClient.get('/groups'),
    getAlbumInfo: (): Promise<AlbumInfoResponse> =>
        httpClient.get('/album-info'),
    getCanvasExample: (): Promise<CanvasExampleResponse> =>
        httpClient.get('/canvas-example'),
};

const createAlbum = async (albumData: CreateAlbumData) => {
    const response = await httpClient.post('/albums/creation', albumData, {
        headers: {
            Authorization: `Bearer yourToken`,
        },
    });
    return response.data;
};

export const useCreateAlbum = () => {
    return useMutation(createAlbum);
};

export default albumApi;
