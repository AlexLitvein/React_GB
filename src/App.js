import { Box } from '@material-ui/core';
import logo from "./logo.svg";
import "./App.css";
import Tittle from "./Tittle";
import MessageList from "./MessageList";
import Profile from "./profile";
import {
  Switch,
  Link,
  Route,
} from "react-router-dom";
import ChatList from "./chatList";

function App() {
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
        <ChatList />
      </Box>
      <Box className="flxCont flx-col brd App__main">
        <Switch>
          <Route path="/profile"><Profile />
          </Route>
          <Route path="/chats/:chatId" children={<MessageList />}>
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
