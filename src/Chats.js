import React from "react";
import { useParams } from "react-router-dom";
import MessageList from "./MessageList";

function Chats() {
    const { chatId } = useParams();
    const [chats, setChats] = React.useState(initialChats);

    return (
        <>
            <header>Header</header>
            <div className="">
                <div>
                    <ChatList
                        chats={chats}
                        chatId={chatId}
                    />
                </div>
                <div>
                    <MessageList messages={chats[chatId].messages} />
                </div>
            </div>
        </>
    );
}

export default Chats;