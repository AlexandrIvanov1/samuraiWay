import {combineReducers, createStore} from 'redux';
import profileReducer, {addPostAC, updateNewPostTextAC} from './profile-reducer';
import dialogsReducer, {addNewMessageAC, updateNewMessageAC} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC> | ReturnType<typeof updateNewMessageAC> | ReturnType<typeof addNewMessageAC>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

export const reduxStore = createStore(rootReducer)

// export type ReduxStoreType = typeof reduxStore

export type AppStateType = ReturnType<typeof rootReducer>