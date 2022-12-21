import {ActionsTypes, PostType, ProfilePageType} from "./store";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

 const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
     switch (action.type) {
         case ADD_POST:
             const newPost: PostType = { id: '3', message: action.message, likesCount: 0 }
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

export default profileReducer;