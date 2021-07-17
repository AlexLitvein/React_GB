import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function Tittle(props) {
  return <p>{props.text}</p>;
}

function SendForm(props) {
  const [author, setAuthor] = useState("");
  const handleChange = (event) => {
    setAuthor(event.target.value);
  };

  const [text, setText] = useState("");
  const handleText = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="send-form cont">
      <label>
        Author
        <input className="author" type="text" value={author} onChange={handleChange}></input>
      </label>
      <label>
        Text
        <textarea className="text" type="text" value={text} onChange={handleText}></textarea>
      </label>
      <button
        onClick={() => {
          props.addMsg({ auth: author, text: text });
        }}
      >
        Send
      </button>
    </div>
  );
}

function App() {
  const [messageList, addMsg] = useState([]);
  const addMessage = (msg) => {
    let res = false;
    console.log("addMessage");
    if (msg.auth !== "" && msg.text !== "") {
      res = true;
      messageList.push(msg);
      addMsg([...messageList]);
    }
    return res;
  };

  const [msg, setMsg] = useState({ auth: "", text: "" });

  function setMessage(msgIn) {
    console.log("setMessage");
    setMsg(msgIn);
  }

  useEffect(() => {
    console.log("useEffect");
    let res = addMessage(msg);
    if (res) {
      setTimeout(() => {
        addMessage({ auth: "Робот", text: `Привет ${msg.auth}!` });
      }, 1500);
    }
  }, [msg]);

  return (
    <div className="App">
      <header className="App-header cont">
        <img src={logo} className="App-logo" alt="logo" />
        <Tittle text={"Привет!"} />
      </header>

      <div className="app-body cont">
        <SendForm addMsg={setMessage} />
        <div className="msg-list cont">
          {messageList.map((msg, idx) => (
            <div key={idx}>
              {msg.auth}: {msg.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
