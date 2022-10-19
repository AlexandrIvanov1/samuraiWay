import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";

export const Profile = () => {

    const postsData: Array<PostType> = [
        {id: '1', message: 'Hello, how are you?', likesCount: 4},
        {id: '2', message: 'It\'s my first post?', likesCount: 15}
    ]

    return (
        <div>
            <ProfileInfo/>
            <MyPosts data={postsData}/>
        </div>
    )
}