import React from 'react';
import c from './Dialogs.module.css'
import {DialogItem, DialogItemType} from "./DialogItem/DialogItem";
import {Message, MessageType} from "./Message/Message";

type DialogsType = {
    dialogsData: Array<DialogItemType>
    messagesData: Array<MessageType>
}

export function Dialogs(props: DialogsType) {

    // const dialogsData: Array<DialogItemType> = [
    //     {id: '1', name: 'Alex'},
    //     {id: '2', name: 'Alina'},
    //     {id: '3', name: 'Kirill'},
    //     {id: '4', name: 'Denis'},
    // ]
    // const messagesData: Array<MessageType> = [
    //     {id: '1', message: 'Hello'},
    //     {id: '2', message: 'How are you?'},
    //     {id: '3', message: 'What are you doing today?'},
    //     {id: '4', message: 'Do you play at the bass?'}
    // ]

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItem}>
                {props.dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)}
            </div>
            <div className={c.messages}>
                {props.messagesData.map(m => <Message message={m.message}/>)}
            </div>
        </div>
    );
}