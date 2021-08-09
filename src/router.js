import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import GistsList from './GistsList';
import Home from './home';
import Login from './login';
import MessageList from "./MessageList";
import Profile from "./profile";
import { SignUp } from './signup';
import firebase from "firebase";

function PrivateRoute({ authenticated, ...rest }) {
    return authenticated ? (<Route {...rest} />) : (<Redirect to={{ pathname: "/login" }} />);
}

function PublicRoute({ authenticated, ...rest }) {
    // return !authenticated ? <Route {...rest} /> : <Redirect to="/chats/aa" />;
    return <Route {...rest} />;
}

const Routes = () => {
    const [authed, setAuthed] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setAuthed(true);
            } else {
                setAuthed(false);
            }
        })
    }, []);

    return (
        <Switch>
            <PublicRoute authenticated={authed} exact path="/">
                <Home />
            </PublicRoute>
            <PublicRoute authenticated={authed} path="/login">
                <Login />
            </PublicRoute>
            <PublicRoute authenticated={authed} path="/signup">
                <SignUp />
            </PublicRoute>
            <PrivateRoute authenticated={authed} path="/profile">
                <Profile />
            </PrivateRoute >
            <PrivateRoute authenticated={authed} path="/gists">
                <GistsList />
            </PrivateRoute >
            <PrivateRoute authenticated={authed} path="/chats/:chatId" component={MessageList} />

            <PublicRoute>
                <h3>Page not found</h3>
            </PublicRoute>
        </Switch>
    );
}

export default Routes;