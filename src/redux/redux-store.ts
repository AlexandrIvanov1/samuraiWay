import {combineReducers, createStore} from 'redux';
import profileReducer, {addPostAC, updateNewPostTextAC} from './profile-reducer';
import dialogsReducer, {addNewMessageAC, updateNewMessageAC} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer, {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from './users-reducer';

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC> | ReturnType<typeof updateNewMessageAC> | ReturnType<typeof addNewMessageAC> | ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC> | ReturnType<typeof setTotalUsersCountAC>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

export const reduxStore = createStore(rootReducer)

// export type ReduxStoreType = typeof reduxStore

export type AppStateType = ReturnType<typeof rootReducer>