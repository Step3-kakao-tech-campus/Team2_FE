import httpClient from './index';
import { TDAsset, TDBinding, TDShape } from '@tldraw/tldraw';
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
interface TrashPageResponse {
    pages: TrashPageInfo[];
}

interface TrashPageInfo {
    trashId: number;
    image: string;
    deleter: string;
    createAt: string;
    deleteAt: string;
}

interface AlbumInfoResponse {
    id: string;
    image: string;
    name: string;
    description: string;
    members: number;
}

export interface CanvasResponse {
    shapes: Record<string, TDShape | undefined>;
    bindings: Record<string, TDBinding | undefined>;
    assets: Record<string, TDAsset | undefined>;
}

interface CanvasRequest {
    albumId: string;
    pageId: string;
}

export interface CreateAlbumData {
    category: string;
    albumName: string | null;
    description: string;
    image: string;
}
export interface PageDetail {
    pageId: number;
    image: string;
    createAt: string;
}

export interface AlbumDetailResponse {
    albumId: number;
    albumImage: string;
    albumName: string;
    description: string;
    people: number;
    pages: PageDetail[];
}

export interface AlbumMember {
    memberId: number;
    nickname: string;
    image: string;
}

export interface AlbumMembersResponse {
    members: AlbumMember[];
}

const albumApi = {
    getAlbumGroup: (): Promise<AlbumsResponse> => httpClient.get('/groups'),
    getAlbumInfo: (): Promise<AlbumInfoResponse> =>
        httpClient.get('/album-info'),
    getAlbumCanvasById: (albumId: string, pageId: string): Promise<any> =>
        httpClient.get(`/albums/${albumId}/pages/${pageId}`),
    getAlbumById: (albumId: string | null): Promise<AlbumDetailResponse> =>
        httpClient.get(`/albums/${albumId}`),
    getAlbumTrash: (
        albumId: string | undefined,
    ): Promise<TrashPageResponse> => {
        return httpClient.get(`/albums/${albumId}/trashes`);
    },
    saveAlbumCanvas: (albumId: string, pageId: string, data: any) => {
        return httpClient.put(`/albums/${albumId}/pages/${pageId}`, data);
    },
    restoreTrashPage: (albumId: string | undefined, trashId: Number) =>
        httpClient.post(`/albums/${albumId}/trashes/${trashId}`),
    getMembers: (albumId: String): Promise<AlbumMembersResponse> =>
        httpClient.get(`/albums/${albumId}/members`),
};

const createAlbum = async (albumData: CreateAlbumData) => {
    const response = await httpClient.post('/albums/creation', albumData, {
        headers: {
            Authorization: `Bearer yourToken`,
        },
    });
    return response.data;
};

async function acceptInvite(albumId: string, authToken: string) {
    console.log(albumId);
    try {
        // HTTP 요청을 보내고 응답을 기다림
        const response = await httpClient.post(
            `/albums/${albumId}/members/join`,
            {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            },
        );
        // 응답 유효성 검사
        if (response) {
            return response; // 유효한 데이터 반환
        }
    } catch (error) {
        // 오류 발생 시 처리
        console.error('Error accepting the invite:', error);
        throw error; // 에러를 다시 던져 useMutation의 onError에서 처리하도록 함
    }
}
export const useInviteAlbumUser = (albumId: string, authToken: string) => {
    return useMutation(() => acceptInvite(albumId, authToken), {
        onSuccess: () => {
            // Mutation 성공 시 처리
            alert('Invitation accepted successfully!');
        },
        onError: error => {
            // Mutation 실패 시 처리
            // error는 mutation을 통해 발생한 에러 객체입니다.
            console.error('Error accepting the invite:', error);
            // 여기서 alert나 사용자에게 표시할 메시지를 설정할 수 있습니다.
            alert('Failed to accept the invitation. Please try again later.');
        },
    });
};

export const useCreateAlbum = () => {
    return useMutation(createAlbum);
};

export default albumApi;
