import React from "react";
import { useParams } from "react-router-dom";
import Message from "./Message";
import SendForm from "./SendForm";

function MessageList(props) {
    let { currChatId } = useParams();
    console.log('MessageList ' +currChatId);   
    

    const [chats, setChats] = React.useState(props.chats); // 
    const [msgs, setMsgs] = React.useState([]);
    // const [msgs, setMsgs] = React.useState(chats[currChatIdx].msgs); 

    // const [currChatIdx, setCurrChatIdx] = React.useState(chats.findIndex(e => e.id === currChatId));
    const [currChatIdx, setCurrChatIdx] = React.useState(-1);
    // let prevChatIdx = 0;

    // temp
    React.useEffect(() => {
        setCurrChatIdx((curr) => {
            if(curr >= 0) {
                chats[curr].msgs = [...msgs];
            }
            return chats.findIndex(e => e.id === currChatId);
        });

        // console.log(`prevChatIdx: ${prevChatIdx} currChatIdx: ${currChatIdx}`);
        // chats[currChatIdx].msgs = [...msgs];
        if(currChatIdx >= 0) {
            setMsgs(chats[currChatIdx].msgs);  
        }
    }, [currChatId, currChatIdx]); // 

    // React.useEffect(() => { 
    //     console.log('mount_unmount'); 
    // }, []);

    const addMessage = (msg) => {
        // console.log("addMessage");
        if (msg.auth !== "" && msg.text !== "") {
            setMsgs(curr => [...curr, msg]);
            // setMsgs(curr => [...chats[currChatIdx].msgs, msg]);  
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
            {/* <div className="msg-chats flx-grw brd">
                {chats[currChatIdx].msgs.map((msg, idx) => (
                    <Message key={idx} msg={msg} />
                ))}
            </div> */}
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