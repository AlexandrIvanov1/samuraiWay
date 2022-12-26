import {ActionsTypes, PostType, ProfilePageType} from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState: ProfilePageType = {
    postsData: [
        {id: '1', message: 'Hello, how are you?', likesCount: 4},
        {id: '2', message: 'It\'s my first post?', likesCount: 15}
    ],
    newPostText: 'IT-Incubator!'
}

 const profileReducer = (state = initialState, action: ActionsTypes) => {
     switch (action.type) {
         case ADD_POST:
             const newPost: PostType = { id: '3', message: state.newPostText, likesCount: 0 }
             state.postsData.push(newPost)
             state.newPostText = ''
             return state;
         case UPDATE_NEW_POST_TEXT:
             state.newPostText = action.newText
             return state;
         default:
             return state;
     }
 }

export const addPostAC = () => {
    return {
        type: ADD_POST,
        // message: message
    } as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}

export default profileReducer;