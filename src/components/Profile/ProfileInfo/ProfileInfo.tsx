import React from 'react';
import c from './ProfileInfo.module.css'
import img from './I.jpeg'

export const ProfileInfo = () => {
    return (
        <div className={c.content}>
            <div>
                <img
                    src="https://catherineasquithgallery.com/uploads/posts/2021-02/1613402911_12-p-bezhevii-kosmos-fon-16.jpg"
                    alt="background"/>
            </div>
            <div className={c.descriptionBlock}>
                <div>
                    <img src={img} alt="avatar"/>
                </div>
                Hello, everyone! My name is Alex Ivanov.<br/> I am musician and frontend developer from Moscow.
            </div>
        </div>
    )
}