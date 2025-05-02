import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { Outlet } from 'react-router';
import NavigationBar from '../components/NavigationBar';
import { Container } from '@mui/material';

export default function Root() {
    return (
        <>
            <NavigationBar />
            <div className={'bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800 dark:text-white'}>
                <ErrorBoundary fallbackRender={() => <div>Something went wrong</div>}>
                    <Container>
                        <Outlet />
                    </Container>
                </ErrorBoundary>
            </div>
        </>
    );
}
