import {ActionsTypes} from "./redux-store";

const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

export type DialogsPageType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    newMessage: string
}
export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}

const initialState: DialogsPageType = {
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
}

const dialogsReducer = (state = initialState, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.newMessage
            return state;
        case ADD_NEW_MESSAGE:
            const newMessage: MessageType = {id: '5', message: state.newMessage}
            state.messagesData.push(newMessage)
            state.newMessage = ''
            return state;
        default:
            return state;
    }
}

export const updateNewMessageAC = (newMessage: string) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        newMessage: newMessage
    } as const
}
export const addNewMessageAC = () => {
    return {
        type: ADD_NEW_MESSAGE,
    } as const
}

export default dialogsReducer;