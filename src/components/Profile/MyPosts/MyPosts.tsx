import React, {ChangeEvent} from 'react';
import c from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostType = {
    postsData: Array<PostType>
    addPost: (message: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const MyPosts: React.FC<MyPostType> = (props) => {

    const addPost = () => {
        props.addPost(props.newPostText)
    }

    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.updateNewPostText(text)
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