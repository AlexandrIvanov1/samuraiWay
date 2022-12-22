import React from 'react';
import c from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {FriendsBlock} from "./Friends/FriendsBlock";
import {SidebarType} from "../../redux/store";

type NavbarType = {
    state: Array<SidebarType>
}

export const Navbar: React.FC<NavbarType> = (props) => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to={'/profile'} activeClassName={c.active}>Profile</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to={'/dialogs'} activeClassName={c.active}>Messages</NavLink>
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
            <FriendsBlock sidebar={props.state}/>
        </nav>
    )
}