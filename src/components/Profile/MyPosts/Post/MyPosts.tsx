import React from 'react';
import c from './MyPosts.module.css'

export const MyPosts = () => {
    return (
        <div className={c.content}>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={c.posts}>
                    <div className={c.post}>Post 1</div>
                    <div className={c.post}>Post 2</div>
                </div>
            </div>
        </div>
    )
}