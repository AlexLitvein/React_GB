import React, { useState, useEffect } from "react";
import { Box, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import orange from '@material-ui/core/colors/orange';
import { Chat } from '@material-ui/icons';
import logo from "./logo.svg";
import "./App.css";
import SendForm from "./SendForm";
import Tittle from "./Tittle";
import Message from "./Message";

function App() {

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

  const [chatList, setChatList] = useState([{ id: "123", name: "chat1" }, { id: "1234", name: "chat2" }, { id: "1235", name: "chat3" }, { id: "1236", name: "chat4" }]);

  const [messageList, setMessageList] = useState([]);

  const addMessage = (msg) => {
    console.log("addMessage");
    if (msg.auth !== "" && msg.text !== "") {
      setMessageList(curr => [...curr, msg]);
    }
  };

  useEffect(() => {
    console.log("useEffect");
    if (messageList.length && messageList[messageList.length - 1].auth !== "Робот") {
      setTimeout(() => {
        addMessage({ auth: "Робот", text: `Привет!` });
      }, 1500);
    }
  }, [messageList]);

  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline />
      <div className="App ">
        <Box className="flxCont flx-col brd App__sidebar">
          <header className="App-header ">
            <img src={logo} className="App-logo" alt="logo" />
            <Tittle text={"Привет!"} />
          </header>
          <List component="nav" aria-label="main mailbox folders">
            {chatList.map((itm) => (
              <ListItem key={itm.id} button>
                <ListItemIcon>
                  <Chat />
                </ListItemIcon>
                <ListItemText primary={itm.name} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box className="flxCont flx-col brd App__main">
          <div className="msg-list flx-grw brd">
            {messageList.map((msg, idx) => (
              <Message key={idx} msg={msg} />
            ))}
          </div>
          <SendForm addMessage={addMessage} />
        </Box>
      </div >
    </ThemeProvider>
  );

  // return (

  //     <div className="App ">

  //         <SendForm addMessage={addMessage} />

  //     </div >
  // );
}

export default App;
