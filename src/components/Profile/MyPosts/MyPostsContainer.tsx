import React from 'react';
import {addPostAC, PostType, updateNewPostTextAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';

// type MyPostsContainerType = {
    // store: ReduxStoreType
// }

// export const MyPostsContainer: React.FC<MyPostsContainerType> = () => {
//     return (
//         <StoreContext.Consumer>
//             {store => {
//
//                 const state = store.getState()
//                 const addPost = () => store.dispatch(addPostAC(state.profilePage.newPostText))
//                 const onPostChangeHandler = (text: string) => {
//                     store.dispatch(updateNewPostTextAC(text))
//                 }
//
//                 return <MyPosts
//                     postsData={state.profilePage.postsData}
//                     newPostText={state.profilePage.newPostText}
//                     updateNewPostText={onPostChangeHandler}
//                     addPost={addPost}
//                 />
//             }}
//         </StoreContext.Consumer>
//     )
// }

export type MapStateToPropsType = {
    postsData: Array<PostType>
    newPostText: string
}

export type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export type MyPostType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => dispatch(updateNewPostTextAC(text)),
        addPost: () => dispatch(addPostAC()),
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)