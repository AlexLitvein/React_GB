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

export const addMsg = (val) => ({
    type: CHATS_ADD_MSG,
    payload: val
});

