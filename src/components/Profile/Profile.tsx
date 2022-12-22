import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostType} from "../../redux/store";

type ProfileType = {
    profilePage: {
        postsData: Array<PostType>
    }
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

export const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                postsData={props.profilePage.postsData}
                newPostText={props.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}