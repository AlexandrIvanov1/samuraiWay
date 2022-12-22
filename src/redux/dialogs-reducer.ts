import {ActionsTypes, DialogsPageType, MessageType} from "./store";

const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

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

const dialogsReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.newMessage
            return state;
        case ADD_NEW_MESSAGE:
            const newMessage: MessageType = {id: '5', message: action.message}
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
export const addNewMessageAC = (message: string) => {
    return {
        type: ADD_NEW_MESSAGE,
        message: message
    } as const
}

export default dialogsReducer;