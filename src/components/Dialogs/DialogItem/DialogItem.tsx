import React from 'react';
import c from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type DialogItemType = {
    id: string
    name: string
}

export function DialogItem(props: DialogItemType) {
    return (
        <div className={c.item + ' ' + c.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}