import React from "react";
import { useParams } from "react-router-dom";
import Message from "./Message";
import SendForm from "./SendForm";
import { useSelector, useDispatch } from "react-redux";
import { getShowName } from './reducerProfile/selectors';
import { getChats } from './reducerChats/selectors';
import { addMsg, addMessageWithThunk } from './reducerChats/actions';

function MessageList() {
    const bShowName = useSelector(getShowName);
    const chats = useSelector(getChats);
    const dispatch = useDispatch();
    let { chatId } = useParams();    

    const addMessage = (msg) => {
        if (msg.auth !== "" && msg.text !== "") {
            dispatch(addMsg(chatId, msg));         
        }
    };

    return (
        <>
            <div className="msg-chats flx-grw brd">
                {chats.find(e => e.id === chatId).msgs.map((msg, idx) => (
                    <Message key={idx} msg={msg} show={bShowName} />
                ))}
            </div>
            <SendForm addMessage={addMessage} />
        </>
    );

}

export default MessageList;