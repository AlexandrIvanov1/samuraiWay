import profileReducer, {addPostAC, updateNewPostTextAC} from './profile-reducer';
import dialogsReducer, {addNewMessageAC, updateNewMessageAC} from './dialogs-reducer';
// import sidebarReducer from "./sidebar-reducer";
//
// export type MessageType = {
//     id: string
//     message: string
// }
// export type DialogType = {
//     id: string
//     name: string
// }
// export type PostType = {
//     id: string
//     message: string
//     likesCount: number
// }
// export type ProfilePageType = {
//     postsData: Array<PostType>
//     newPostText: string
// }
// export type DialogsPageType = {
//     dialogsData: Array<DialogType>
//     messagesData: Array<MessageType>
//     newMessage: string
// }
// export type SidebarType = {
//     id: string
//     name: string
//     avatar: string
// }
// export type RootStateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
//     sidebar: Array<SidebarType>
// }
// export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC> | ReturnType<typeof updateNewMessageAC> | ReturnType<typeof addNewMessageAC>
//
// export type StoreType = {
//     _state: RootStateType
//     _callSubscriber: () => void
//     subscriber: (observe: () => void) => void
//     getState: () => RootStateType
//     dispatch: (action: ActionsTypes) => void
// }
//
// export const store: StoreType = {
//     _state: {
//         profilePage: {
//             postsData: [
//                 {id: '1', message: 'Hello, how are you?', likesCount: 4},
//                 {id: '2', message: 'It\'s my first post?', likesCount: 15}
//             ],
//             newPostText: 'IT-Incubator!'
//         },
//         dialogsPage: {
//             dialogsData: [
//                 {id: '1', name: 'Alex'},
//                 {id: '2', name: 'Alina'},
//                 {id: '3', name: 'Kirill'},
//                 {id: '4', name: 'Denis'}
//             ],
//             messagesData: [
//                 {id: '1', message: 'Hello'},
//                 {id: '2', message: 'How are you?'},
//                 {id: '3', message: 'What are you doing today?'},
//                 {id: '4', message: 'Do you play at the bass?'}
//             ],
//             newMessage: ''
//         },
//         sidebar: [
//             {
//                 id: '1',
//                 name: 'Kirill',
//                 avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9NbY6Ma2g-mgWMnuOlZNIdujeLFSUvSbZQ&usqp=CAU'
//             },
//             {
//                 id: '2',
//                 name: 'Denis',
//                 avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9NbY6Ma2g-mgWMnuOlZNIdujeLFSUvSbZQ&usqp=CAU'
//             },
//             {
//                 id: '3',
//                 name: 'Sergey',
//                 avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9NbY6Ma2g-mgWMnuOlZNIdujeLFSUvSbZQ&usqp=CAU'
//             }
//         ]
//     },
//     _callSubscriber() {
//         console.log('State changed!')
//     },
//
//     subscriber(observe) {
//         this._callSubscriber = observe
//     },
//     getState() {
//         return this._state
//     },
//
//     dispatch(action) {
//
//         profileReducer(this._state.profilePage, action)
//         dialogsReducer(this._state.dialogsPage, action)
//         sidebarReducer(this._state.sidebar, action)
//
//         this._callSubscriber()
//     }
// }