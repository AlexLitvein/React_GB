import React, { useState, useEffect } from "react";
import { Button, Box, Checkbox } from '@material-ui/core';
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import { decrement, increment, show } from '../src/profile/profileSlice';

// let srcChatList = [
//   { id: "aa", name: "chat1", msgs: [{ auth: 'vava0', text: 'jlkjlk' }, { auth: 'fapa', text: 'uuuuuu' }] },
//   { id: "bb", name: "chat2", msgs: [{ auth: 'katt1', text: 'cccc' }, { auth: 'fgapa', text: 'nnnnn' }] },
//   { id: "cc", name: "chat3", msgs: [{ auth: 'wkav2', text: 'mmmmm' }, { auth: 'hfapa', text: 'ccccc' }] },
// ];


function App() {

  const showName = useSelector((state) => state.showName.value);
  const dispatch = useDispatch();
  const [cb1, setCb1] = useState(false);

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(show(false))} >
          Increment
        </button>
        <span>{showName.toString()}</span>
        {/* <button aria-label="Decrement value" onClick={() => dispatch(decrement())} >
          Decrement
        </button> */}
        <Checkbox value={cb1} onClick={() => {
          setCb1(curr => !curr);
          dispatch(show(cb1));
        }} />
      </div>
    </div>
  );
}

export default App;
