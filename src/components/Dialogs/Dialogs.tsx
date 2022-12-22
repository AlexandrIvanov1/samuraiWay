import React, {ChangeEvent, KeyboardEvent} from 'react';
import c from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, DialogType, MessageType} from "../../redux/store";
import {addNewMessageAC, updateNewMessageAC} from '../../redux/dialogs-reducer';

type DialogsType = {
    state: {
        dialogsData: Array<DialogType>
        messagesData: Array<MessageType>
        newMessage: string
    }
    dispatch: (action: ActionsTypes) => void
}

export function Dialogs(props: DialogsType) {

    const sendMessage = () => props.dispatch(addNewMessageAC(props.state.newMessage))

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageAC(e.currentTarget.value))
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            sendMessage()
        }
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
                    <textarea
                        className={c.messageField}
                        placeholder={'Enter your message'}
                        value={props.state.newMessage}
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