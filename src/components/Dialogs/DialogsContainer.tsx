import React from 'react';
import {addNewMessageAC, updateNewMessageAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {StoreContext} from '../../StoreContext';

type DialogsContainerType = {
    // store: ReduxStoreType
}

export function DialogsContainer() {
    return (
        <StoreContext.Consumer>
            {store => {
                const state = store.getState().dialogsPage
                const sendMessage = () => store.dispatch(addNewMessageAC(state.newMessage))
                const onChangeMessageHandler = (text: string) => {
                    store.dispatch(updateNewMessageAC(text))
                }

                return <Dialogs
                    dialogsPage={state}
                    updateNewMessage={onChangeMessageHandler}
                    addNewMessage={sendMessage}
                />
            }}
        </StoreContext.Consumer>
    )
}