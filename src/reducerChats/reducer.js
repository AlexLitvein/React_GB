import * as actions from "./actions"

const initialState = { // chatsData
    chats: [
    ],
    msgs: [
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
        default:
            return state;
    }
}