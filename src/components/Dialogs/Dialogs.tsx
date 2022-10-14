import React from 'react';
import c from './Dialogs.module.css'

export function Dialogs() {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItem}>
                <div className={c.item + ' ' + c.active}>
                    Alina
                </div>
                <div className={c.item}>
                    Kirill
                </div>
                <div className={c.item}>
                    Denis
                </div>
                <div className={c.item}>
                    Alex
                </div>
            </div>
            <div className={c.messages}>
                <div className={c.message}>Hello</div>
                <div className={c.message}>How are you?</div>
                <div className={c.message}>What's your name?</div>
            </div>
        </div>
    );
}