import React from 'react';
import c from "./Friends.module.css";
import {SidebarType} from "../../../redux/store";

type FriendsBlockType = {
    sidebar: Array<SidebarType>
}

export const FriendsBlock: React.FC<FriendsBlockType> = (props) => {
    return (
        <div className={c.friendsBlock}>
            <span>Friends</span>
            <div className={c.friends}>
                {props.sidebar.map(f => {
                    return (
                        <div key={f.id} className={c.friend}>
                            <img
                                src={f.avatar}
                                alt="avatar"/>
                            <div>{f.name}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};