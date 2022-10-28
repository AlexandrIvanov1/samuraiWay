import React from 'react';
import './index.css';
import {state, subscriber} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addNewMessage, addPost, updateNewMessage, updateNewPostText} from "./redux/state";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                updateNewMessage={updateNewMessage}
                addNewMessage={addNewMessage}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

subscriber(rerenderEntireTree)