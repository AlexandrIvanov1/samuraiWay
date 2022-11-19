import React from 'react';
import './index.css';
import {store} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}
                updateNewMessage={store.updateNewMessage.bind(store)}
                addNewMessage={store.addNewMessage.bind(store)}
                />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscriber(rerenderEntireTree)