import React from 'react';
import {addNewMessageAC, DialogsPageType, updateNewMessageAC} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';

// type DialogsContainerType = {
    // store: ReduxStoreType
// }

// export function DialogsContainer() {
//     return (
//         <StoreContext.Consumer>
//             {store => {
//                 const state = store.getState().dialogsPage
//                 const sendMessage = () => store.dispatch(addNewMessageAC(state.newMessage))
//                 const onChangeMessageHandler = (text: string) => {
//                     store.dispatch(updateNewMessageAC(text))
//                 }
//
//                 return <Dialogs
//                     dialogsPage={state}
//                     updateNewMessage={onChangeMessageHandler}
//                     addNewMessage={sendMessage}
//                 />
//             }}
//         </StoreContext.Consumer>
//     )
// }


export type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

export type MapDispatchToPropsType = {
    updateNewMessage: (text: string) => void
    addNewMessage: () => void
}

export type DialogsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessage: (text: string) => {
            dispatch(updateNewMessageAC(text))
        },
        addNewMessage: () => {
            dispatch(addNewMessageAC())
        }
    }
}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);