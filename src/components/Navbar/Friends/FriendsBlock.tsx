import React from 'react';
import c from './Friends.module.css';
import {connect} from 'react-redux';
import {RootStateType, SidebarType} from '../../../redux/store';

type FriendsBlockType = MapStateToPropsType & MapDispatchToPropsType

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
    )
};

export type MapStateToPropsType = {
    sidebar: Array<SidebarType>
}
export type MapDispatchToPropsType = {

}

const mapStateToProps = (state: RootStateType) => {
    return {
        sidebar: state.sidebar
    }
}
const mapDispatchToProps = () => {
    return {

    }
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsBlock)