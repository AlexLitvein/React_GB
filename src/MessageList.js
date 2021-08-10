import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import Message from "./Message";
import SendForm from "./SendForm";
import { useSelector, useDispatch } from "react-redux";
import { getShowName } from './reducerProfile/selectors';
import { addMsg, initChatMsgsTracking } from "./reducerChats/actions";
import { getChatMsgs } from "./reducerChats/selectors";
// import firebase from "firebase";

function MessageList() {
    let { chatId } = useParams();
    const bShowName = useSelector(getShowName);
    const messages = useSelector(getChatMsgs);
    const dispatch = useDispatch();

    const addMessage = (msg) => {
        if (msg.auth !== "" && msg.text !== "") {
            dispatch(addMsg(chatId, msg));
        }
    };

    // const addMessage = useCallback(
    //     (message) => {
    //         const id = Date.now();
    //         firebase.database()
    //             .ref("msgs")
    //             .child(chatId)
    //             .child(id)
    //             .set(message);
    //     },
    //     [chatId]
    // );

    useEffect(() => {
        initChatMsgsTracking(dispatch, chatId);
    }, [chatId]);

    const drawMsgs = useCallback(() => {
        return messages.map((itm, idx) => (
            <Message key={itm.key} msg={itm} show={bShowName} />
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