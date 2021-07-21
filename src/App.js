import React, { useState, useEffect } from "react";
import { Grid, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
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
      <div className="App">
        <Grid container spacing={1}>
          <Grid className="flxCont" item xs={4}>
            <div className="flxItm brd">
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
            </div>
          </Grid>
          <Grid className="flxCont" container spacing={1} item xs={8}>
            <Grid className="flxItm" item xs={12}>
              <div className="msg-list brd">
                {messageList.map((msg, idx) => (
                  <Message key={idx} msg={msg} />
                ))}
              </div>
            </Grid>
            <Grid item xs={12}>
              <SendForm addMessage={addMessage} />
            </Grid>
          </Grid>
        </Grid>
      </div >
    </ThemeProvider>
  );
}

export default App;
