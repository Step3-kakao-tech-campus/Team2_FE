import httpClient from './index';
import { TDShape } from '@tldraw/tldraw';

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

interface CanvasResponse {
    assets: Record<string, TDShape | undefined>;
    bindings: Record<string, TDShape | undefined>;
    shapes: Record<string, TDShape | undefined>;
}

const albumApi = {
    getAlbumGroup: (): Promise<AlbumsResponse> => httpClient.get('/groups'),
    getAlbumInfo: (): Promise<AlbumInfoResponse> =>
        httpClient.get('/album-info'),
    getCanvas: (): Promise<CanvasResponse> => httpClient.get('/canvas'),
};

export default albumApi;
