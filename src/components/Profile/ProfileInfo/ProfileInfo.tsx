import React from 'react';
import c from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div className={c.content}>
            <div>
                <img
                    src="https://catherineasquithgallery.com/uploads/posts/2021-02/1613402911_12-p-bezhevii-kosmos-fon-16.jpg"
                    alt="background"/>
            </div>
            <div className={c.descriptionBlock}>
                avatar + description
            </div>
        </div>
    )
}