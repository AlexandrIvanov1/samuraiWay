import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';
import {SidebarType} from '../../../redux/sidebar-reducer';
import {FriendsBlock} from './FriendsBlock';


export type MapStatePropsType = {
    sidebar: Array<SidebarType>
}
export type MapDispatchPropsType = {

}

export type FriendsBlockType = MapStatePropsType & MapDispatchPropsType



const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        sidebar: state.sidebar
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {

    }
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsBlock);