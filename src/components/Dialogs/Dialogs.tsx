import React from 'react';
import c from './Dialogs.module.css'
import {DialogItem, DialogItemType} from "./DialogItem/DialogItem";
import {Message, MessageType} from "./Message/Message";

type DialogsType = {
    state: {
        dialogsData: Array<DialogItemType>
        messagesData: Array<MessageType>
    }
}

export function Dialogs(props: DialogsType) {

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItem}>
                {props.state.dialogsData.map(d => <DialogItem id={d.id} name={d.name} />)}
            </div>
            <div className={c.messages}>
                {props.state.messagesData.map(m => <Message message={m.message}/>)}
            </div>
        </div>
    );
}