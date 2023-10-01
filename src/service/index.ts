import axios from 'axios';

const httpClient = axios.create({
    baseURL: '',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

httpClient.interceptors.response.use(
    response => {
        console.log('response', response);
        if (response?.data?.success) {
            return Promise.resolve(response?.data?.response);
        }
        return Promise.reject(response?.data?.error);
    },
    error => {
        console.error('Api error', error);

        return Promise.reject(error);
    },
);
export default httpClient;
