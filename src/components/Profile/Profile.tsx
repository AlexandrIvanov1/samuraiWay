import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";

type ProfileType = {
    state: {
        postsData: Array<PostType>
    }
}

export const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.state.postsData}/>
        </div>
    )
}