import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from './chatsSlice';
import { useParams } from "react-router-dom";
import Message from "./Message";
import SendForm from "./SendForm";

function MessageList(props) {
    // const count = useSelector((state) => state.counter.value);
    // const dispatch = useDispatch();

    let { chatId } = useParams();
    const [currChatIdx, setCurrChatIdx] = React.useState(-1);

    console.log('MessageList ' + chatId);

    const chats = props.chats;
    const [msgs, setMsgs] = React.useState([]);

    React.useEffect(() => {
        console.log(`chatId changed: ${chatId}`);

        setCurrChatIdx((curr) => {
            let idx = chats.findIndex(e => e.id === chatId);
            if (curr >= 0) {
                chats[curr].msgs = [...msgs];
            }
            setMsgs([...chats[idx].msgs]);
            console.log(`idx: ${idx} currChatIdx: ${currChatIdx}`);
            return idx;
        });
    }, [chatId]);

    const addMessage = (msg) => {
        if (msg.auth !== "" && msg.text !== "") {
            setMsgs(curr => [...curr, msg]);
        }
    };

    React.useEffect(() => {
        if (msgs.length && msgs[msgs.length - 1].auth !== "Робот") {
            setTimeout(() => {
                addMessage({ auth: "Робот", text: `Привет!` });
            }, 1500);
        }
    }, [msgs]);

    return (
        <>
            <div className="msg-chats flx-grw brd">
                {msgs.map((msg, idx) => (
                    <Message key={idx} msg={msg} />
                ))}
            </div>
            <SendForm addMessage={addMessage} />
        </>
    );

}

export default MessageList;