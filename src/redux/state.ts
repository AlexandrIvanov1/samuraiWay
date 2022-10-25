import {rerenderEntireTree} from "../rerender";

export type MessageType = {
    id: string
    message: string
}
export type DialogType = {
    id: string
    name: string
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}
type ProfilePageType = {
    postsData: Array<PostType>
    newPostText: string
}
type DialogsPageType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
}
export type SidebarType = {
    id: string
    name: string
    avatar: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: Array<SidebarType>
}


export const state: RootStateType = {
    profilePage: {
        postsData: [
            {id: '1', message: 'Hello, how are you?', likesCount: 4},
            {id: '2', message: 'It\'s my first post?', likesCount: 15}
        ],
        newPostText: 'IT-Incubator!'
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
    },
    sidebar: [
        {id: '1', name: 'Kirill', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9NbY6Ma2g-mgWMnuOlZNIdujeLFSUvSbZQ&usqp=CAU'},
        {id: '2', name: 'Denis', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9NbY6Ma2g-mgWMnuOlZNIdujeLFSUvSbZQ&usqp=CAU'},
    ]
}


export const addPost = (message: string) => {
    const newPost: PostType = {
        id: '3', message, likesCount: 0
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}