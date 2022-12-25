import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

type ProfileType = {
    // store: ReduxStoreType
}

export const Profile: React.FC<ProfileType> = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}