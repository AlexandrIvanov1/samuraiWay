import React from 'react';
import './index.css';
import {reduxStore} from './redux/redux-store';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={reduxStore}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

reduxStore.subscribe(() => {
    rerenderEntireTree()
})