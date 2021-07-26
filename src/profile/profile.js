import { Checkbox } from '@material-ui/core';

const CHANGE_NAME = "PROFILE::CHANGE_NAME";
const SHOW_NAME = "PROFILE::SHOW_NAME";

const initialState = {
    name: 'Vasa',
    age: 33,
    showName: true,
}

export function rdcrProfile(state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAME: {
            return { ...state, name: action.payload.name, }
        }
        case SHOW_NAME: {
            return { ...state, showName: action.payload.showName, }
        }
        default:
            return state;
    }
}

export const actChangeName = (name) => ({
    type: CHANGE_NAME,
    payload: {
        name: name,
    }
})

export const actShowName = (val) => ({
    type: SHOW_NAME,
    payload: {
        showName: val,
    }
})

export default function Profile() {

    return (
        <>
            <p>Name</p>
            <p>Age</p>
            <Checkbox checked />
        </>
    );
}