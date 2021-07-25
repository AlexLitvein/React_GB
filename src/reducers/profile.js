import { CHANGE_NAME } from "../actions/profile";

const initialState = {
    name: 'Vasa',
    age: 33,
}
export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAME: {
            return {
                ...state,
                name: action.payload.name,
            }
        }

        default:
            return state;
    }
}