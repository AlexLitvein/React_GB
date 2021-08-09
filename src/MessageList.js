import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import Message from "./Message";
import SendForm from "./SendForm";
import { useSelector, useDispatch } from "react-redux";
import { getShowName } from './reducerProfile/selectors';
// import { getChats } from './reducerChats/selectors';
// import { addMsg, addMessageWithThunk } from './reducerChats/actions';
import firebase from "firebase";

function MessageList() {
    let { chatId } = useParams();
    const bShowName = useSelector(getShowName);
    // const chats = useSelector(getChats);
    // const dispatch = useDispatch();
    // const drawMsgs = useCallback(() => {
    //     return chats.find(e => e.id === chatId).msgs.map((msg, idx) => (
    //         <Message key={idx} msg={msg} show={bShowName} />
    //     ));
    // }, [chatId]);
    // const addMessage = (msg) => {
    //     if (msg.auth !== "" && msg.text !== "") {
    //         dispatch(addMsg(chatId, msg));
    //     }
    // };

    const [messages, setMessages] = useState([]);

    const addMessage = useCallback(
        (message) => {
            const id = Date.now();
            firebase.database() 
                .ref("chats")
                .child(chatId)
                .child('msgs')
                .child(id)
                .set(message);
        },
        [chatId]
    );

    useEffect(() => {
        console.log('subscrible to ON');
        firebase.database().ref("chats").child(chatId).child('msgs').on("value", (snapshot) => {
            console.log('on("value")');
            console.log(snapshot);
            const newMessages = [];
            snapshot.forEach(entry => {
                newMessages.push(entry.val());
            });
            setMessages(newMessages);
        });

        return () => {  
            console.log('willUnmount');  
        }  
    }, [chatId]);

    const drawMsgs = useCallback(() => {
        console.log('drawMsgs');
        console.log(messages);
        return messages.map((msg, idx) => (
            <Message key={idx} msg={msg} show={bShowName} />
        ));
    }, [messages]);

    return (
        <>
            <div className="msg-chats flx-grw brd">
                {drawMsgs()}
            </div>
            <SendForm addMessage={addMessage} />
        </>
    );

}

export default MessageList;