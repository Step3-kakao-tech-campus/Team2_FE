import axios from 'axios';
export interface CustomError {
    status: number;
    message: string;
}

const httpClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    // timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

httpClient.interceptors.request.use(
    config => {
        const accessToken = localStorage.getItem('accessToken');
        console.log('req add token', accessToken);

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
