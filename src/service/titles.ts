import httpClient from './index';
import { useMutation } from 'react-query';
interface TitleResponse {
    titles: [
        {
            titleId: Number;
            titleName: string | undefined;
            titleGrade: string | undefined;
            titleSub: string | undefined;
            titleDescription: string | undefined;
        },
    ];
}

interface TitleSearchResponse {
    titles: [
        {
            titleId: Number;
            titleName: string | undefined;
        },
    ];
}

interface ChangeTitleData {
    userId: number;
    titleId: number;
}

interface ChangeNicknameData {
    userId: number;
    nickname: string;
}
const changeTitle = async ({ userId, titleId }: ChangeTitleData) => {
    const response = await httpClient.put(
        `/api/users/${userId}/titles/${titleId}`,
    );

    if (response) alert(response.data.message);
    return response;
};
const changeNickname = async ({ userId, nickname }: ChangeNicknameData) => {
    const response = await httpClient.put(`/api/users/${userId}`, {
        newNickname: nickname,
    });

    if (response) alert(response.data.message);
    return response;
};

export const useChangeNickname = () => {
    return useMutation(changeNickname);
};

export const useChangeTitle = () => {
    return useMutation(changeTitle);
};

export const titleApi = {
    getUserTitle: (): Promise<TitleResponse> => httpClient.get('/api/titles'),
};

export const titleSearchApi = {
    getUserTitles: (): Promise<TitleSearchResponse> =>
        httpClient.get(`/api/users/rewards`),
};

export default titleApi;
