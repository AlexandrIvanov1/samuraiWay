import React from 'react';
import c from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={c.content}>
            <div>
                <img
                    src="https://catherineasquithgallery.com/uploads/posts/2021-02/1613402911_12-p-bezhevii-kosmos-fon-16.jpg"
                    alt="background"/>
            </div>
            <div>
                avatar + description
            </div>
            <MyPosts/>
        </div>
    )
}