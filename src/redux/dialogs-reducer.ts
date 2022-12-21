import {ActionsTypes, DialogsPageType, MessageType} from "./store";

const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';

const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
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