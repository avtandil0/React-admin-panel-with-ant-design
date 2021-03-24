import React from 'react'
import MainLayout from './layout/MainLayout'

import { BrowserRouter, Switch } from 'react-router-dom';
import history from './router/history';

export default function App() {
    return (
        <BrowserRouter history={history}>
            <Switch>
                <MainLayout />
            </Switch>
        </BrowserRouter>
        
    )
}