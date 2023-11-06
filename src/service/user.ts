import httpClient from './index';
import { User } from '../recoil/user';
type Vendor = 'kakao' | 'google';

interface OauthLoginRequest {
    vendor: Vendor;
    authCode: string;
}

export const userApi = {
    oauthLogin: ({ vendor, authCode }: OauthLoginRequest): Promise<string> =>
        httpClient.post(`/auth/login/${vendor}`, authCode),
    getUserInfo: (): Promise<User> => httpClient.get('/user'),
};
