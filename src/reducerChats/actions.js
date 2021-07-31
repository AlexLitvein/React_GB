export const CHATS_ADD_CHAT = 'CHATS_ADD_CHAT';
export const CHATS_DEL_CHAT = 'CHATS_DEL_CHAT';
export const CHATS_ADD_MSG = 'CHATS_ADD_MSG';


export const addChat = (val) => ({
    type: CHATS_ADD_CHAT,
    payload: val
});

export const delChat = (val) => ({
    type: CHATS_DEL_CHAT,
    payload: val
});

export const addMsg = (chatId, msg) => ({
    type: CHATS_ADD_MSG,
    id: chatId,
    msg: msg
});

export const addMessageWithThunk = (chatId, msg) => (dispatch, getState) => {
    dispatch(addMsg(chatId, msg));
    if (msg.auth !== "Робот") {
        setTimeout(() => dispatch(addMsg(chatId, { auth: "Робот", text: `Привет!` })), 1000);
    }
}
