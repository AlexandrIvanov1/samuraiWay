import React from 'react';
import c from './MyPosts.module.css'
import {Post, PostType} from "./Post/Post";

type MyPostType = {
    data: Array<PostType>
}

export const MyPosts: React.FC<MyPostType> = (props) => {

    return (
        <div className={c.content}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button className={c.addPost}>Add post</button>
                </div>
            </div>
            <div className={c.posts}>
                {props.data.map(p => <Post message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
}