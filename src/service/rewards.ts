import { Key } from 'react';
import httpClient from './index';

interface RewordResponse {
    rewards: [
        {
            rewardId: Key;
            rewardName: string;
            level: string;
            description: string;
            count: Number;
            goalCount: Number;
            success: string;
        },
    ];
}
const rewordApi = {
    getUserRewords: (): Promise<RewordResponse> => httpClient.get('/rewards'),
};

export default rewordApi;
