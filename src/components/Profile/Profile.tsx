import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";

type ProfileType = {
    profilePage: {
        postsData: Array<PostType>
    }
    addPost: (message: string) => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

export const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                postsData={props.profilePage.postsData}
                addPost={props.addPost}
                newPostText={props.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}