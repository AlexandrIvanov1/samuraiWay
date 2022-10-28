import React, {ChangeEvent} from 'react';
import c from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/state";

type DialogsType = {
    state: {
        dialogsData: Array<DialogType>
        messagesData: Array<MessageType>
        newMessage: string
    }
    updateNewMessage: (newMessage: string) => void
    addNewMessage: (newMessage: string) => void
}

export function Dialogs(props: DialogsType) {

    const sendMessage = () => {
        props.addNewMessage(props.state.newMessage)
    }

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessage(e.currentTarget.value)
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItem}>
                {props.state.dialogsData.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)}
            </div>
            <div className={c.messages}>
                {props.state.messagesData.map(m => <Message key={m.id} id={m.id} message={m.message}/>)}
            </div>
            <div className={c.addMessageBlock}>
                <div>
                    <textarea value={props.state.newMessage} onChange={onChangeMessageHandler}></textarea>
                </div>
                <div>
                    <button className={c.addMessage} onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
}