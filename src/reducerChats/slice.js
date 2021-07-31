import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    chats: [
        { id: "aa", name: "chat1", msgs: [{ auth: 'vava0', text: 'jlkjlk' }, { auth: 'fapa', text: 'uuuuuu' }] },
        { id: "bb", name: "chat2", msgs: [{ auth: 'katt1', text: 'cccc' }, { auth: 'fgapa', text: 'nnnnn' }] },
        { id: "cc", name: "chat3", msgs: [{ auth: 'wkav2', text: 'mmmmm' }, { auth: 'hfapa', text: 'ccccc' }] },
    ]
};

const chatSlice = createSlice({
    name: 'chats', // пространство имен создаваемых действий (${name}/${action.type});
    initialState,

    reducers: { // An object of "case reducers". Key names will be used to generate actions.        
        addChat: (state, action) => {
            state.chats.push(action.payload);
        },

        delChat: (state, action) => {
            state.chats.splice(state.chats.findIndex(e => e.id === action.payload), 1);
        },

        addMsg: (state, action) => {
            state.chats.find(e => e.id === action.payload.id).msgs.push(action.payload.msg);
        },
    },
},
);

export const { addChat, delChat, addMsg } = chatSlice.actions;
export default chatSlice.reducer;