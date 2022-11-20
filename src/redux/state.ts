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

type AddPostActionType = {
    type: 'ADD-POST'
    message: string
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type UpdateNewMessageActionType = {
    type : 'UPDATE-NEW-MESSAGE'
    newMessage: string
}
type AddNewMessageActionType = {
    type: 'ADD-NEW-MESSAGE'
    message: string
}
export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType | UpdateNewMessageActionType | AddNewMessageActionType

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    // addPost: (message: string) => void
    // updateNewPostText: (newText: string) => void
    // updateNewMessage: (newMessage: string) => void
    // addNewMessage: (message: string) => void
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
            newMessage: 'Hi'
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
            }
        ]
    },
    _callSubscriber() {
        console.log('State changed!')
    },

    // addPost(message: string) {
    //     const newPost: PostType = {
    //         id: '3', message, likesCount: 0
    //     }
    //     this._state.profilePage.postsData.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber()
    // },
    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText
    //     this._callSubscriber()
    // },
    // updateNewMessage(newMessage: string) {
    //     this._state.dialogsPage.newMessage = newMessage
    //     this._callSubscriber()
    // },
    // addNewMessage(message: string) {
    //     const newMessage: MessageType = {id: '5', message}
    //     this._state.dialogsPage.messagesData.push(newMessage)
    //     this._state.dialogsPage.newMessage = ''
    //     this._callSubscriber()
    // },

    subscriber(observe) {
        this._callSubscriber = observe
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
            id: '3', message: action.message, likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-MESSAGE') {
            this._state.dialogsPage.newMessage = action.newMessage
            this._callSubscriber()
        } else if (action.type === 'ADD-NEW-MESSAGE') {
            const newMessage: MessageType = {id: '5', message: action.message}
            this._state.dialogsPage.messagesData.push(newMessage)
            this._state.dialogsPage.newMessage = ''
            this._callSubscriber()
        }
    }
}