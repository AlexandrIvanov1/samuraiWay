import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {PostType} from "./components/Profile/MyPosts/Post/Post";
import {DialogItemType} from "./components/Dialogs/DialogItem/DialogItem";
import {MessageType} from "./components/Dialogs/Message/Message";

const postsData: Array<PostType> = [
    {id: '1', message: 'Hello, how are you?', likesCount: 4},
    {id: '2', message: 'It\'s my first post?', likesCount: 15}
]
const dialogsData: Array<DialogItemType> = [
    {id: '1', name: 'Alex'},
    {id: '2', name: 'Alina'},
    {id: '3', name: 'Kirill'},
    {id: '4', name: 'Denis'},
]
const messagesData: Array<MessageType> = [
    {id: '1', message: 'Hello'},
    {id: '2', message: 'How are you?'},
    {id: '3', message: 'What are you doing today?'},
    {id: '4', message: 'Do you play at the bass?'}
]

ReactDOM.render(
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>,
    document.getElementById('root')
);