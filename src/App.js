import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import logo from "./logo.svg";
import "./App.css";
import SendForm from "./SendForm";
import Tittle from "./Tittle";
import Message from "./Message";
// import MssageList from "./MessageList"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  // const classes = useStyles();

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
    <div className="App">

      <Grid container spacing={2}>
        <Grid className="brd" item xs={4}>
          <header className="App-header ">
            <img src={logo} className="App-logo" alt="logo" />
            <Tittle text={"Привет!"} />
          </header>
        </Grid>
        <Grid container spacing={2} item xs={8}>
          <Grid className="msg-list brd" item xs={12}>
            {messageList.map((msg, idx) => (
              <Message key={idx} msg={msg} />
            ))}
          </Grid>
          <Grid item xs={12}>
            <SendForm addMessage={addMessage} />
          </Grid>
        </Grid>
      </Grid>


    </div >
  );
}

export default App;
