import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 3,
            staleTime: 1000 * 60 * 5, // 5분
            cacheTime: 1000 * 60 * 10, // 10분
        },
    },
});

import Router from './router';

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <Router />
            </RecoilRoot>
        </QueryClientProvider>
    );
};

export default App;
