import React, {ChangeEvent} from 'react';
import c from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, addPostAC, PostType, updateNewPostTextAC} from "../../../redux/state";

type MyPostType = {
    postsData: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

export const MyPosts: React.FC<MyPostType> = (props) => {

    const addPost = () => {
        props.dispatch(addPostAC(props.newPostText))
        // props.dispatch({type: "ADD-POST", message: props.newPostText})
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.dispatch(updateNewPostTextAC(text))
        // props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text})
    }

    return (
        <div className={c.content}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        value={props.newPostText}
                        onChange={onPostChangeHandler}
                    />
                </div>
                <div>
                    <button className={c.addPost} onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={c.posts}>
                {props.postsData.map((p, i) => <Post key={i} id={p.id} message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
}