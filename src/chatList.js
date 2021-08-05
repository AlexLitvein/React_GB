import React, { useRef, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Button, Box, List, ListItem, ListItemIcon, TextField } from '@material-ui/core';
import { Chat } from '@material-ui/icons';
import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import { getChats } from './reducerChats/selectors';
import { addChat, delChat } from './reducerChats/actions';

const ChatList = () => {    
    const chats = useSelector(getChats);
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const _delChat = (id) => {
        dispatch(delChat(id));
    };

    const _addChat = useCallback(() => {
        const newChat = { id: Date.now().toString(), name: inputRef.current.value, msgs: [] };
        dispatch(addChat(newChat));
        inputRef.current.value = '';
    }, [dispatch]);

    return (
        <Box>
            <TextField inputRef={inputRef} label="Имя чата"></TextField>
            <Button variant="contained" onClick={_addChat}>Add</Button>
            <List component="nav" >
                {chats.map((itm) => (
                    <ListItem key={itm.id} button >
                        <ListItemIcon>
                            <Chat />
                        </ListItemIcon>
                        <Link to={`/chats/${itm.id}`}>{itm.name}</Link>
                        <Button
                            variant="contained"
                            startIcon={<DeleteIcon />}
                            onClick={() => { _delChat(itm.id); }} // а как еще передать аргумент в фунцию, иначе она вызывается сразу
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
