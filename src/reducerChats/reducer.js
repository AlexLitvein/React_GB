import * as actions from "./actions"

const initialState = {
    chats: [
        { id: "aa", name: "chat1", msgs: [{ auth: 'vava0', text: 'jlkjlk' }, { auth: 'fapa', text: 'uuuuuu' }] },
        { id: "bb", name: "chat2", msgs: [{ auth: 'katt1', text: 'cccc' }, { auth: 'fgapa', text: 'nnnnn' }] },
        { id: "cc", name: "chat3", msgs: [{ auth: 'wkav2', text: 'mmmmm' }, { auth: 'hfapa', text: 'ccccc' }] },
    ]
};

export default function chatsReducer(state = initialState, action) {

    switch (action.type) {
        case actions.CHATS_ADD_CHAT:
            return { chats: [...state.chats, action.payload] };
        case actions.CHATS_DEL_CHAT:
            return { chats: state.chats.filter(e => e.id !== action.payload) };
        case actions.CHATS_ADD_MSG:
        {
            const currChat = state.chats.find(e => e.id === action.payload.id);
            currChat.msgs.push(action.payload.msg);
            return {  
                chats: [...state.chats]
            };
        }           
        
        default:
            return state;
    }
}