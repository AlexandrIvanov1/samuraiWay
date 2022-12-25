import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {ReduxStoreType} from './redux/redux-store';

type AppType = {
    store: ReduxStoreType
}

function App(props: AppType) {

    const state = props.store.getState()

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar state={state.sidebar}/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'} render={() =>
                    <Profile />}/>
                <Route path={'/dialogs'} render={() =>
                    <DialogsContainer />}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>
            </div>
        </div>
    );
}
export default App;