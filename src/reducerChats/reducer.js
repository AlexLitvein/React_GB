import * as actions from "./actions"

const initialState = { // chatsData
    chats: [
        // { key: "aa", name: "chat1" },
        // { key: "bb", name: "chat2" },
    ],
    msgs: [
        // { key: 'aa', msgs: [{ key: 12, auth: 'katt1', text: 'cccc' }] },
        // { key: 'bb', msgs: [{ key: 123, auth: 'pepe', text: 'jkjkj' }] },
    ]
};

export default function chatsReducer(state = initialState, action) {

    switch (action.type) {
        case actions.CHATS_SET_LIST: {
            return { ...state, chats: [...action.payload] };
        }

        case actions.CHATS_SET_MSGS: {
            return { ...state, msgs: [...action.msgs] };
        }


        // case actions.CHATS_ADD_CHAT:
        //     return { chats: [...state.chats, action.payload] };

        // case actions.CHATS_DEL_CHAT:
        //     return { chats: state.chats.filter(e => e.id !== action.payload) };

        // case actions.CHATS_ADD_MSG:
        //     {
        //         const currChat = state.chats.find(e => e.id === action.id);
        //         currChat.msgs.push(action.msg);
        //         return {
        //             chats: [...state.chats]
        //         };
        //     }

        default:
            return state;
    }
}