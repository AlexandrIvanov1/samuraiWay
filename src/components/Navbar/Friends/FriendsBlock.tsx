import React from 'react';
import c from './Friends.module.css';
import {StoreContext} from '../../../StoreContext';

type FriendsBlockType = {
    // sidebar: Array<SidebarType>
}

export const FriendsBlock: React.FC<FriendsBlockType> = () => {
    return (
        <StoreContext.Consumer>
            {store => {

                const state = store.getState()

                return (
                    <div className={c.friendsBlock}>
                        <span>Friends</span>
                        <div className={c.friends}>
                            {state.sidebar.map(f => {
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
                )
            }}
        </StoreContext.Consumer>
    )
};