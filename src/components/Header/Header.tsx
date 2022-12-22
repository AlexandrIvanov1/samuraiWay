import React from 'react';
import c from './Header.module.css'

export const Header = () => {
    return (
        <header className={c.header}>
            <img src="https://avatars.mds.yandex.net/i?id=8351e314b37c21793f7801563998ecad-3732348-images-thumbs&n=13"
                 alt="logo"/>
        </header>
    )
}