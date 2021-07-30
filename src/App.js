import { Box } from '@material-ui/core';
import "./App.css";
import ChatList from "./chatList";
import Menu from "./menu";
import ChatRouter from './router';

function App() {
  return (
    <div className="App ">
      <Box className="flxCont flx-col brd App__sidebar">
        <Menu />
        <ChatList />
      </Box>
      <Box className="flxCont flx-col brd App__main">
        <ChatRouter />
      </Box>
    </div >
  );
}

export default App;
