import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addNewMessage, addPost, RootStateType, updateNewMessage, updateNewPostText} from "./redux/state";
import React from "react";

export const rerenderEntireTree = (state: RootStateType) => {
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