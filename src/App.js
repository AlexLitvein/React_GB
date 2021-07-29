import React, { useState, useEffect } from "react";
import { Button, Box, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import logo from "./logo.svg";
import "./App.css";
import Tittle from "./Tittle";
import MessageList from "./MessageList";
import Profile from "./profile";
import {
  Switch,
  Link,
  Route,
  useParams
} from "react-router-dom";
import ChatList from "./chatList";

let srcChatList = [
  { id: "aa", name: "chat1", msgs: [{ auth: 'vava0', text: 'jlkjlk' }, { auth: 'fapa', text: 'uuuuuu' }] },
  { id: "bb", name: "chat2", msgs: [{ auth: 'katt1', text: 'cccc' }, { auth: 'fgapa', text: 'nnnnn' }] },
  { id: "cc", name: "chat3", msgs: [{ auth: 'wkav2', text: 'mmmmm' }, { auth: 'hfapa', text: 'ccccc' }] },
];

function App() {
  const [chatList, setChatList] = useState(srcChatList);

  return (
    <div className="App ">
      <Box className="flxCont flx-col brd App__sidebar">
        <header className="App-header ">
          <img src={logo} className="App-logo" alt="logo" />
          <Tittle text={"Привет!"} />
          <ul>
            <li>
              <Link to="/profile">profile</Link>
            </li>
            <li>
              <Link to="/chats/bb">chats</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </header>
        <ChatList chats={chatList}></ChatList>
      </Box>
      <Box className="flxCont flx-col brd App__main">
        <Switch>
          <Route path="/profile"><Profile />
          </Route>
          <Route path="/chats/:chatId" children={<MessageList chats={chatList} />}>
          </Route>
          <Route path="/"><h1>Home</h1>
          </Route>
          <Route>
            <h3>Page not found</h3>
          </Route>
        </Switch>
      </Box>
    </div >
  );
}

export default App;
