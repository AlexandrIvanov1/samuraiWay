import React from 'react';
import c from './../Dialogs.module.css'
import {MessageType} from "../../../redux/store";


export const Message: React.FC<MessageType> = (props) => {
    return <div className={c.message}>{props.message}</div>
}