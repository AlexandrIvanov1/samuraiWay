import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {ActionsTypes, RootStateType} from "./redux/store";

type AppType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

function App(props: AppType) {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'} render={() =>
                    <Profile
                        profilePage={props.state.profilePage}
                        newPostText={props.state.profilePage.newPostText}
                        dispatch={props.dispatch}
                    />}/>
                <Route path={'/dialogs'} render={() =>
                    <Dialogs
                        state={props.state.dialogsPage}
                        dispatch={props.dispatch}
                    />}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;