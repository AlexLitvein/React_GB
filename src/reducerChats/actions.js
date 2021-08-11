import firebase from "firebase";

export const CHATS_ADD_CHAT = 'CHATS_ADD_CHAT';
export const CHATS_DEL_CHAT = 'CHATS_DEL_CHAT';
export const CHATS_ADD_MSG = 'CHATS_ADD_MSG';
export const CHATS_SET_LIST = 'CHATS_SET_LIST';
export const CHATS_SET_MSGS = 'CHATS_SET_MSGS';

const getPayloadFromSnapshot = (snapshot) => {
    const data = [];
    snapshot.forEach((itm) => {
        data.push({ key: itm.key, ...itm.val() });
    });
    return data;
}

export const initChatsTracking = (dispatch) => {
    firebase.database().ref("chats").on("value", (snapshot) => {
        const payload = getPayloadFromSnapshot(snapshot);
        dispatch({
            type: CHATS_SET_LIST,
            payload,
        });
    });
};

export const initChatMsgsTracking = (dispatch, chatId) => {
    firebase.database().ref("msgs").child(chatId).on("value", (snapshot) => {
        const payload = [];
        snapshot.forEach((itm) => {
            payload.push({ key: itm.key, ...itm.val() });
        });

        dispatch({
            type: CHATS_SET_MSGS,
            msgs: payload,
            chatId: snapshot.key
        });
    });
};

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
