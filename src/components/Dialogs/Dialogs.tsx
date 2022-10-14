import React from 'react';
import c from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: string
    name: string
}

type MessageType = {
    message: string
}

function DialogItem (props: DialogItemType) {
    return (
        <div className={c.item + ' ' + c.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message: React.FC<MessageType> = (props) => {
    return <div className={c.message}>{props.message}</div>
}

export function Dialogs() {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItem}>
                <DialogItem name={'Alex'} id={'1'}/>
                <DialogItem name={'Alina'} id={'2'}/>
                <DialogItem name={'Kirill'} id={'3'}/>
                <DialogItem name={'Denis'} id={'4'}/>
            </div>
            <div className={c.messages}>
                <Message message={'Hello'}/>
                <Message message={'How are you?'}/>
                <Message message={'What are you doing today?'}/>
            </div>
        </div>
    );
}