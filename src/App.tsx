import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

import Router from './Router';

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
