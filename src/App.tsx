import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {RootStateType} from "./redux/state";

type AppType = {
    state: RootStateType
    addPost: (message: string) => void
}

function App(props: AppType) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;