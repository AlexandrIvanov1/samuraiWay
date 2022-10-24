import React from 'react';
import c from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/state";

type DialogsType = {
    state: {
        dialogsData: Array<DialogType>
        messagesData: Array<MessageType>
    }
}

export function Dialogs(props: DialogsType) {

    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const sendMessage = () => {
        const newMessage = newMessageElement.current?.value
        alert(newMessage)
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItem}>
                {props.state.dialogsData.map(d => <DialogItem id={d.id} name={d.name} />)}
            </div>
            <div className={c.messages}>
                {props.state.messagesData.map(m => <Message id={m.id} message={m.message}/>)}
            </div>
            <div className={c.addMessageBlock}>
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button className={c.addMessage} onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
}