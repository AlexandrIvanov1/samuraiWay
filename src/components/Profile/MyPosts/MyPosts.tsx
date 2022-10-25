import React from 'react';
import c from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostType = {
    postsData: Array<PostType>
    addPost: (message: string) => void
}

export const MyPosts: React.FC<MyPostType> = (props) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        debugger
        let text = newPostElement.current?.value
        if (text) {
            props.addPost(text)
            if(newPostElement.current?.value) {
                newPostElement.current.value = ''
            }
        }
    }

    return (
        <div className={c.content}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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