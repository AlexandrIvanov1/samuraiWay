import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {StoreContext} from '../../../StoreContext';

type MyPostsContainerType = {
    // store: ReduxStoreType
}

export const MyPostsContainer: React.FC<MyPostsContainerType> = (props) => {
    return (
        <StoreContext.Consumer>
            {store => {

                const state = store.getState()

                const addPost = () => store.dispatch(addPostAC(state.profilePage.newPostText))

                const onPostChangeHandler = (text: string) => {
                    store.dispatch(updateNewPostTextAC(text))
                }

                return <MyPosts
                    postsData={state.profilePage.postsData}
                    newPostText={state.profilePage.newPostText}
                    updateNewPostText={onPostChangeHandler}
                    addPost={addPost}
                />
            }}
        </StoreContext.Consumer>
    )
}