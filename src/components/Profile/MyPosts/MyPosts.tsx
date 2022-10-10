import React from 'react';
import c from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={c.content}>
            My posts
            <div>
                <textarea/>
                <button>Add post</button>
            </div>
            <div className={c.posts}>
                <Post message={'Hello, how are you?'} likesCount={4}/>
                <Post message={'It\'s my first post'} likesCount={15}/>
            </div>
        </div>
    )
}