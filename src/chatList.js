import React, { useRef, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Button, Box, List, ListItem, ListItemIcon, TextField } from '@material-ui/core';
import { Chat } from '@material-ui/icons';
import { Link } from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import { getChats, selChatsList } from './reducerChats/selectors';
import { addChat, dbChatsSubscrible, delChat, initChatsTracking, initMessageTracking } from './reducerChats/actions';

const ChatList = () => {
    const chats = useSelector(selChatsList);
    // console.log('selChatsList', chats);
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    useEffect(() => {
        // console.log('useEffect initChatsTracking');
        initChatsTracking(dispatch);
    }, []);

    const sendDelChat = (id) => {
        dispatch(delChat(id));
    };

    const sendAddChat = useCallback(() => {
        const newChat = { id: Date.now().toString(), name: inputRef.current.value, msgs: [] };
        dispatch(addChat(newChat));
        inputRef.current.value = '';
    }, [dispatch]);

    const draw = useCallback(() => {
        // console.log('draw');
        return chats.map((itm) => (
            <ListItem key={itm.key} button >
                <ListItemIcon>
                    <Chat />
                </ListItemIcon>
                <Link to={`/chats/${itm.key}`}>{itm.name}</Link>
                <Button
                    variant="contained"
                    startIcon={<DeleteIcon />}
                    onClick={() => { sendDelChat(itm.key); }} // а как еще передать аргумент в фунцию, иначе она вызывается сразу
                >
                    Delete
                </Button>
            </ListItem>
        ));
    }, [chats]);

    return (
        <Box>
            <TextField inputRef={inputRef} label="Имя чата"></TextField>
            <Button variant="contained" onClick={sendAddChat}>Add</Button>
            <List component="nav" >
                {draw()}
            </List>
        </Box>
    );
}

export default ChatList;
