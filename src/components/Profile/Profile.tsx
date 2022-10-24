import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";

type ProfileType = {
    state: {
        postsData: Array<PostType>
    }
    addPost: (message: string) => void
}

export const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.state.postsData} addPost={props.addPost}/>
        </div>
    )
}