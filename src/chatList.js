import React, { useEffect, useRef, useState } from 'react';
import { Button, Box, List, ListItem, ListItemText, ListItemIcon, TextField } from '@material-ui/core';
import { Chat } from '@material-ui/icons';
import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';

const ChatList = (props) => {
    const chats = props.chats;
    const [trig, setTrig] = useState(true);
    const inputRef = useRef(null);

    const addChat = () => {
        const newChat = { id: Date.now().toString(), name: inputRef.current.value, msgs: [] };
        chats.push(newChat);
        inputRef.current.value = '';
        setTrig(curr => !curr);
    };

    const delChat = (id) => {
        let idx = chats.findIndex(e => e.id === id);
        chats.splice(idx, 1);
        setTrig(curr => !curr);
    };

    return (
        <Box>
            <TextField inputRef={inputRef} label="Имя чата"></TextField>
            <Button variant="contained" onClick={addChat}>Add</Button>
            <List component="nav" aria-label="main mailbox folders">
                {chats.map((itm) => (
                    <ListItem key={itm.id} button >
                        <ListItemIcon>
                            <Chat />
                        </ListItemIcon>
                        <Link underline='none' to={`/chats/${itm.id}`}>{itm.name}</Link>
                        <Button
                            variant="contained"
                            startIcon={<DeleteIcon />}
                            onClick={() => { delChat(itm.id); }} // а как еще передать аргумент в фунцию, иначе она вызывается сразу
                        >
                            Delete
                        </Button>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default ChatList;
