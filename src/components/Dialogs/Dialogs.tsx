import React from 'react';
import c from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType = {
    id: string
    name: string
}

type MessageType = {
    id?: string
    message: string
}

function DialogItem(props: DialogItemType) {
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

    const dialogsData: Array<DialogItemType> = [
        {id: '1', name: 'Alex'},
        {id: '2', name: 'Alina'},
        {id: '3', name: 'Kirill'},
        {id: '4', name: 'Denis'},
    ]
    const messagesData: Array<MessageType> = [
        {id: '1', message: 'Hello'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'What are you doing today?'},
        {id: '4', message: 'Do you play at the bass?'}
    ]

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItem}>
                {dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)}
            </div>
            <div className={c.messages}>
                {messagesData.map(m => <Message message={m.message}/>)}
            </div>
        </div>
    );
}