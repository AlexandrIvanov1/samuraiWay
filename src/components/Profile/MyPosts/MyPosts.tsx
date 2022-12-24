import React, {ChangeEvent} from 'react';
import c from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/store";

type MyPostType = {
    postsData: Array<PostType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export const MyPosts: React.FC<MyPostType> = (props) => {
    const addPost = () => props.addPost()

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
                {props.postsData.map((p, i) => {
                    return <Post key={i} id={p.id} message={p.message} likesCount={p.likesCount}/>})}
            </div>
        </div>
    )
}