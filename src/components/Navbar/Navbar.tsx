import React from 'react';
import c from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={c.nav}>
            <div className={`${c.item} ${c.active}`}>
                <a href={'#'}>Profile</a>
            </div>
            <div className={c.item}>
                <a href={'#'}>Messages</a>
            </div>
            <div className={c.item}>
                <a href={'#'}>News</a>
            </div>
            <div className={c.item}>
                <a href={'#'}>Music</a>
            </div>
            <div className={c.item}>
                <a href={'#'}>Settings</a>
            </div>
        </nav>
    )
}