import React from "react";
import { useParams } from "react-router-dom";
import Message from "./Message";
import SendForm from "./SendForm";

function MessageList(props) {
    let { currChatIdx } = useParams();
    console.log(currChatIdx);

    const [messageList, setMessageList] = React.useState(props.chats[currChatIdx].msgs); // 

    // temp
    React.useEffect(() => { console.log('useEffect MessageList '); });

    const addMessage = (msg) => {
        console.log("addMessage");
        if (msg.auth !== "" && msg.text !== "") {
            setMessageList(curr => [...curr, msg]);
        }
    };

    React.useEffect(() => {
        if (messageList.length && messageList[messageList.length - 1].auth !== "Робот") {
            setTimeout(() => {
                addMessage({ auth: "Робот", text: `Привет!` });
            }, 1500);
        }
    }, [messageList]);

    return (
        <>
            {/* {typeof (currChatIdx).toString()} */}
            <div className="msg-list flx-grw brd">
                {messageList.map((msg, idx) => (
                    <Message key={idx} msg={msg} />
                ))}
            </div>
            <SendForm addMessage={addMessage} />
        </>
    );

}

export default MessageList;