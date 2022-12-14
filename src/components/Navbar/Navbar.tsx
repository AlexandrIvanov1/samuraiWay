import React from 'react';
import c from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {FriendsContainer} from './Friends/FriendsContainer';

type NavbarType = {
    // state: Array<SidebarType>
}

export const Navbar: React.FC<NavbarType> = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to={'/profile'} activeClassName={c.active}>Profile</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to={'/dialogs'} activeClassName={c.active}>Messages</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to={'/users'} activeClassName={c.active}>Users</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to={'/news'} activeClassName={c.active}>News</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to={'/music'} activeClassName={c.active}>Music</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to={'/settings'} activeClassName={c.active}>Settings</NavLink>
            </div>
            <FriendsContainer/>
        </nav>
    )
}