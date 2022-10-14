import React from 'react';
import c from './MyPosts.module.css'
import {Post, PostType} from "./Post/Post";

export const MyPosts = () => {

    const postsData: Array<PostType> = [
        {id: '1', message: 'Hello, how are you?', likesCount: 4},
        {id: '2', message: 'It\'s my first post?', likesCount: 15}
    ]

    return (
        <div className={c.content}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={c.posts}>
                {postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)}
            </div>
        </div>
    )
}