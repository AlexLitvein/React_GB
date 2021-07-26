import React, { useState, useEffect } from "react";
import { Button, Box, Checkbox } from '@material-ui/core';
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import { decrement, increment } from './profile/profileSlice';

let srcChatList = [
  { id: "aa", name: "chat1", msgs: [{ auth: 'vava0', text: 'jlkjlk' }, { auth: 'fapa', text: 'uuuuuu' }] },
  { id: "bb", name: "chat2", msgs: [{ auth: 'katt1', text: 'cccc' }, { auth: 'fgapa', text: 'nnnnn' }] },
  { id: "cc", name: "chat3", msgs: [{ auth: 'wkav2', text: 'mmmmm' }, { auth: 'hfapa', text: 'ccccc' }] },
];


function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())} >
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())} >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
