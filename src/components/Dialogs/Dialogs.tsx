import React, {ChangeEvent, KeyboardEvent} from 'react';
import c from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from '../../redux/store';

type DialogsType = {
    dialogsPage: DialogsPageType
    updateNewMessage: (text: string) => void
    addNewMessage: () => void
}

export function Dialogs(props: DialogsType) {

    const state = props.dialogsPage

    const sendMessage = () => props.addNewMessage()

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessage(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            sendMessage()
        }
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItem}>
                {state.dialogsData.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)}
            </div>
            <div className={c.messages}>
                {state.messagesData.map(m => <Message key={m.id} id={m.id} message={m.message}/>)}
            </div>
            <div className={c.addMessageBlock}>
                <div>
                    <textarea
                        className={c.messageField}
                        placeholder={'Enter your message'}
                        value={state.newMessage}
                        onChange={onChangeMessageHandler}
                        onKeyPress={onKeyPressHandler}
                    />
                </div>
                <div>
                    <button className={c.addMessage} onClick={sendMessage}>Send message</button>
                </div>
            </div>
        </div>
    );
}