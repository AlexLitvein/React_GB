import React from 'react';
import { Switch, Route } from "react-router-dom";
import MessageList from "./MessageList";
import Profile from "./profile";

const ChatRouter = () => {
    return (
        <Switch>
            <Route path="/profile"><Profile />
            </Route>
            <Route path="/chats/:chatId" component={MessageList} />
            <Route path="/">
                <h1>Home</h1>
            </Route>
            <Route>
                <h3>Page not found</h3>
            </Route>
        </Switch>
    );
}

export default ChatRouter;