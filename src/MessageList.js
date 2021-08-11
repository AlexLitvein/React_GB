import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import Message from "./Message";
import SendForm from "./SendForm";
import { useSelector, useDispatch } from "react-redux";
import { getShowName } from './reducerProfile/selectors';
import { addMsg, initChatMsgsTracking } from "./reducerChats/actions";
import { getChatMsgs } from "./reducerChats/selectors";

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
            <div className="msg-list flx-grw brd">
                {drawMsgs()}
            </div>
            <SendForm addMessage={addMessage} />
        </>
    );

}

export default MessageList;