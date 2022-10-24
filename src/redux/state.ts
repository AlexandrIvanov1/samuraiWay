import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {DialogItemType} from "../components/Dialogs/DialogItem/DialogItem";
import {MessageType} from "../components/Dialogs/Message/Message";

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
type ProfilePageType = {
    postsData: Array<PostType>
}
type DialogsPageType = {
    dialogsData: Array<DialogItemType>
    messagesData: Array<MessageType>
}

export const state: RootStateType = {
    profilePage: {
        postsData: [
            {id: '1', message: 'Hello, how are you?', likesCount: 4},
            {id: '2', message: 'It\'s my first post?', likesCount: 15}
        ]
    },
    dialogsPage: {
        dialogsData: [
            {id: '1', name: 'Alex'},
            {id: '2', name: 'Alina'},
            {id: '3', name: 'Kirill'},
            {id: '4', name: 'Denis'},
        ],
        messagesData: [
            {id: '1', message: 'Hello'},
            {id: '2', message: 'How are you?'},
            {id: '3', message: 'What are you doing today?'},
            {id: '4', message: 'Do you play at the bass?'}
        ]
    }
}
