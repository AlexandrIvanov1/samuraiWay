import React from 'react';
import './index.css';
import {reduxStore} from './redux/redux-store';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {StoreContext} from './StoreContext';

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={reduxStore}>
                <App />
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

reduxStore.subscribe(() => {
    rerenderEntireTree()
})