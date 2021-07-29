import React from "react";
import { useParams } from "react-router-dom";
import Message from "./Message";
import SendForm from "./SendForm";
import { useSelector, useDispatch } from "react-redux";
import { getShowName } from './reducerProfile/selector';
import { getChats } from './reducerChats/selector';
import { addMsg } from './reducerChats/slice';

function MessageList() {
    const bShowName = useSelector(getShowName);
    const chats = useSelector(getChats);
    const dispatch = useDispatch();

    let { chatId } = useParams();
    
    const addMessage = (msg) => {
        if (msg.auth !== "" && msg.text !== "") {
            dispatch(addMsg({ id: chatId, msg: msg }));
            if (msg.auth !== "Робот") {
                setTimeout(()=>dispatch(addMsg({ id: chatId, msg: { auth: "Робот", text: `Привет!` } })),
                1500);                
            }
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