import React from "react";
import Message from "./Message";

function MssageList(p) {
    const [messageList, setMessageList] = React.useState([]);

    const addMessage = (msg) => {
        console.log("addMessage");
        if (msg.auth !== "" && msg.text !== "") {
            setMessageList(curr => [...curr, msg]);
        }
    };

    React.useEffect(() => {
        console.log("useEffect");
        if (messageList.length && messageList[messageList.length - 1].auth !== "Робот") {
            setTimeout(() => {
                addMessage({ auth: "Робот", text: `Привет!` });
            }, 1500);
        }
    }, [messageList]);

    return (
        <>
            {messageList.map((msg, idx) => (
                <Message key={idx} msg={msg} />
            ))}
        </>);

}

export default MssageList;