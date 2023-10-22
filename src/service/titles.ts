import httpClient from './index';

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
const titleApi = {
    getUserTitle: (): Promise<TitleResponse> => httpClient.get('/titles'),
};

export default titleApi;