import React from 'react';
import c from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/store";


export function DialogItem(props: DialogType) {
    return (
        <div className={c.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9NbY6Ma2g-mgWMnuOlZNIdujeLFSUvSbZQ&usqp=CAU" alt=""/>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}