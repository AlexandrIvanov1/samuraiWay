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
    newMessage: string
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
export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC> | ReturnType<typeof updateNewMessageAC> | ReturnType<typeof addNewMessageAC>

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

export const addPostAC = (message: string) => {
    return {
        type: ADD_POST,
        message: message
    } as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}
export const updateNewMessageAC = (newMessage: string) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        newMessage: newMessage
    } as const
}
export const addNewMessageAC = (message: string) => {
    return {
        type: ADD_NEW_MESSAGE,
        message: message
    } as const
}

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    subscriber: (observe: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export const store: StoreType = {
    _state: {
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
                {id: '4', name: 'Denis'}
            ],
            messagesData: [
                {id: '1', message: 'Hello'},
                {id: '2', message: 'How are you?'},
                {id: '3', message: 'What are you doing today?'},
                {id: '4', message: 'Do you play at the bass?'}
            ],
            newMessage: ''
        },
        sidebar: [
            {
                id: '1',
                name: 'Kirill',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9NbY6Ma2g-mgWMnuOlZNIdujeLFSUvSbZQ&usqp=CAU'
            },
            {
                id: '2',
                name: 'Denis',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9NbY6Ma2g-mgWMnuOlZNIdujeLFSUvSbZQ&usqp=CAU'
            },
            {
                id: '3',
                name: 'Sergey',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9NbY6Ma2g-mgWMnuOlZNIdujeLFSUvSbZQ&usqp=CAU'
            }
        ]
    },
    _callSubscriber() {
        console.log('State changed!')
    },

    subscriber(observe) {
        this._callSubscriber = observe
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost: PostType = {
            id: '3', message: action.message, likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.dialogsPage.newMessage = action.newMessage
            this._callSubscriber()
        } else if (action.type === ADD_NEW_MESSAGE) {
            const newMessage: MessageType = {id: '5', message: action.message}
            this._state.dialogsPage.messagesData.push(newMessage)
            this._state.dialogsPage.newMessage = ''
            this._callSubscriber()
        }
    }
}