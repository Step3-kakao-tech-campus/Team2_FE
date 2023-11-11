import axios from 'axios';
export interface CustomError {
    status: number;
    message: string;
}

const baseURL = () => {
    if (process.env.NODE_ENV === 'production') {
        return (process.env.REACT_APP_API_URL || '') + '/api';
    }
    return '/api';
};

const httpClient = axios.create({
    baseURL: baseURL(),
    // timeout: 10000,
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
