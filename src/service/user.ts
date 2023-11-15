import httpClient from './index';
import { User } from '../recoil/user';
type Vendor = 'kakao' | 'google';

interface OauthLoginRequest {
    vendor: Vendor;
    authCode: string;
}

export const userApi = {
    oauthLogin: ({ vendor, authCode }: OauthLoginRequest): Promise<string> =>
        httpClient.post(`/api/auth/${vendor}/login`, authCode),
    getUserInfo: (): Promise<User> => httpClient.get('/api/user'),
    logout: (): Promise<void> => httpClient.post('/api/auth/logout'),
    adminLogin: (): Promise<string> => httpClient.post('/api/auth/test/admin'),
};
