import axios from 'axios';

const prodUrl = 'https://k2afb0ef4e3c8a.user-app.krampoline.com';

export interface CustomError {
    status: number;
    message: string;
}

const httpClient = axios.create({
    baseURL: '/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

httpClient.interceptors.request.use(
    config => {
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken) {
            config.headers['Authorization'] = accessToken;
        }
        return config;
    },
    error => {
        console.error('Api error', error);
        return Promise.reject<Error>({
            status: 400,
            message: '요청오류',
        });
    },
);
httpClient.interceptors.response.use(
    response => {
        console.log('response', response);
        if (response?.data?.success) {
            return Promise.resolve(response?.data?.response);
        }
        return Promise.reject<Error>(response?.data?.error);
    },
    error => {
        console.error('Api error', error);
        return Promise.reject<Error>({
            status: error?.response?.status,
            message: error?.response?.data?.message,
        });
    },
);
export default httpClient;
