import {ActionsTypes} from './redux-store';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type UsersPageType = {
    users: Array<UserType>
}
export type UserType = {
    id: string
    avatarUrl: string
    followed: boolean
    fullName: string
    status: string
    location: {
        country: string
        city: string
    }
}

const initialState: UsersPageType = {
    users: []
}

const usersReducer = (state = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            console.log(state.users[0].followed)
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.userId ? {...u, followed: true} : u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.userId ? {...u, followed: false} : u
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users ,...action.users]}
        default:
            return state;
    }
}

export const followAC = (userId: string) => {
    return {
        type: FOLLOW,
        userId: userId
    } as const
}
export const unfollowAC = (userId: string) => {
    return {
        type: UNFOLLOW,
        userId: userId
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const
}
export default usersReducer;