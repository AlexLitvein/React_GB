import React, { useState, useEffect } from "react";
import { Box, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import orange from '@material-ui/core/colors/orange';
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
  { id: "1239", name: "chat1", msgs: [{ auth: 'vava', text: 'jlkjlk' }, { auth: 'fapa', text: 'uuuuuu' }] },
  { id: "1234", name: "chat2", msgs: [{ auth: 'vatttva', text: 'cccc' }, { auth: 'fgapa', text: 'nnnnn' }] },
  { id: "1235", name: "chat3", msgs: [{ auth: 'lkava', text: 'mmmmm' }, { auth: 'hfapa', text: 'ccccc' }] },
];

// let srcChatsMsgsLists = [
//   [{ auth: 'vava', text: 'jlkjlk' }, { auth: 'fapa', text: 'uuuuuu' }],
//   [{ auth: 'vatttva', text: 'cccc' }, { auth: 'fgapa', text: 'nnnnn' }],
//   [{ auth: 'lkava', text: 'mmmmm' }, { auth: 'hfapa', text: 'ccccc' }]
// ];

function App() {

  const [currChatIdx, setCurrChatIdx] = useState(2);
  const myTheme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: orange[500]
      },
      background: {
        default: '#009999'
      }
    }
  });

  const [chatList, setChatList] = useState(srcChatList);

  // const [messageList, setMessageList] = useState(srcChatsMsgsLists[currChatIdx]);
  // const addMessage = (msg) => {
  //   console.log("addMessage");
  //   if (msg.auth !== "" && msg.text !== "") {
  //     setMessageList(curr => [...curr, msg]);
  //   }
  // };
  // useEffect(() => {
  //   console.log("useEffect");
  //   if (messageList.length && messageList[messageList.length - 1].auth !== "Робот") {
  //     setTimeout(() => {
  //       addMessage({ auth: "Робот", text: `Привет!` });
  //     }, 1500);
  //   }
  // }, [messageList]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={myTheme}>
        <CssBaseline />

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
                  <Link to="/chats">chats</Link>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </header>

            <List component="nav" aria-label="main mailbox folders">
              {chatList.map((itm) => (
                <ListItem key={itm.id} button onClick={() => {
                  setCurrChatIdx(chatList.findIndex(e => e.id === itm.id))
                  // console.log(currChatIdx);
                }}>
                  <ListItemIcon>
                    <Chat />
                  </ListItemIcon>
                  {/* <ListItemText primary={itm.name} /> */}
                  {/* <Link to={"/chats/:currChatIdx"}>{itm.name}</Link> */}
                  <Link to={`/chats/${currChatIdx}`}>{itm.name}</Link>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box className="flxCont flx-col brd App__main">

            {/* <Switch>
              <Route path="/profile">
              </Route>

              <Route path="/chats/:currChatIdx">
                <MessageList msgs={srcChatsMsgsLists}></MessageList>
              </Route>

              <Route>
                <h3>Page not found</h3>
              </Route>
            </Switch> */}

            <Switch>
              <Route path="/chats/:currChatIdx" children={<MessageList chats={chatList} />}>
                {/* <MessageList msgs={srcChatsMsgsLists}></MessageList> */}
              </Route>
            </Switch>
          </Box>
        </div >

      </ThemeProvider>
    </BrowserRouter>
  );

  // return (
  //     <div className="App ">
  //         <SendForm addMessage={addMessage} />
  //     </div >
  // );
}

export default App;
