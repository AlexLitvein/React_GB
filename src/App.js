import React, { useState, useEffect } from "react";
import { Box, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
// import { createTheme, ThemeProvider } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import orange from '@material-ui/core/colors/orange';
import { Chat } from '@material-ui/icons';
import logo from "./logo.svg";
import "./App.css";
// import SendForm from "./SendForm";
import Tittle from "./Tittle";
import MessageList from "./MessageList";

import {
  BrowserRouter,
  Switch,
  Link,
  Route,
  useParams
} from "react-router-dom";

let srcChatList = [
  { id: "aa", name: "chat1", msgs: [{ auth: 'vava0', text: 'jlkjlk' }, { auth: 'fapa', text: 'uuuuuu' }] },
  { id: "bb", name: "chat2", msgs: [{ auth: 'katt1', text: 'cccc' }, { auth: 'fgapa', text: 'nnnnn' }] },
  { id: "cc", name: "chat3", msgs: [{ auth: 'wkav2', text: 'mmmmm' }, { auth: 'hfapa', text: 'ccccc' }] },
];

// let srcChatsMsgsLists = [
//   [{ auth: 'vava', text: 'jlkjlk' }, { auth: 'fapa', text: 'uuuuuu' }],
//   [{ auth: 'vatttva', text: 'cccc' }, { auth: 'fgapa', text: 'nnnnn' }],
//   [{ auth: 'lkava', text: 'mmmmm' }, { auth: 'hfapa', text: 'ccccc' }]
// ];

function App() {

  const [chatList, setChatList] = useState(srcChatList);

  return (
    <BrowserRouter>
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

          <List component="nav" aria-label="main mailbox folders">
            {chatList.map((itm) => (
              <ListItem key={itm.id} button >
                <ListItemIcon>
                  <Chat />
                </ListItemIcon>
                <Link to={`/chats/${itm.id}`}>{itm.name}</Link>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box className="flxCont flx-col brd App__main">
          <Switch>
            <Route path="/profile"><h1>Профиль</h1>
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
    </BrowserRouter>
  );
}

export default App;
