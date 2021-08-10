import firebase from "firebase";
import { addMsg, CHATS_ADD_CHAT, CHATS_ADD_MSG, CHATS_DEL_CHAT } from './reducerChats/actions';
import { PROFILE_SET_NAME, PROFILE_SHOW_NAME } from "./reducerProfile/actions";
import { GISTS_SET_LOADING, setGistsSuccess, setGistsFailure } from './reduserGists/actions';
const { put, takeLatest, delay } = require('redux-saga/effects');


function* profileShowName(act) {
    try {
        yield firebase.database()
            .ref("profile")
            .child(firebase.auth().currentUser.uid)
            .child('showName')
            .set(act.payload);
    } catch (e) {
        console.log(e);
    }
};

function* profileSetName(act) {
    try {
        yield firebase.database()
            .ref("profile")
            .child(firebase.auth().currentUser.uid)
            .child('name')
            .set(act.payload);
    } catch (e) {
        console.log(e);
    }
};

function* sendMsg(act) {
    try {
        const id = Date.now();
        yield firebase.database()
            .ref("msgs")
            .child(act.id)
            .child(id)
            .set(act.msg);
    } catch (e) {
        console.log(e);
    }
};

function* addChat(act) {
    try {
        yield firebase.database()
            .ref("chats")
            .child(act.payload.id)
            .child('name')
            .set(act.payload.name);
    } catch (e) {
        console.log(e);
    }
};

function* delChat(act) {
    try {
        yield firebase.database()
            .ref("chats")
            .child(act.payload)
            .remove();

        yield firebase.database()
            .ref("msgs")
            .child(act.payload)
            .remove();

    } catch (e) {
        console.log(e);
    }
};

function* sayBot(act) {
    try {
        if (act.msg.auth !== "Робот") {
            yield delay(1000);
            yield put(addMsg(act.id, { auth: "Робот", text: `Привет!` }));
        }

    } catch (e) {
        console.log(e);
    }
}

function* getAllGists(act) {
    try {
        const res = yield fetch(act.payload);
        if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);
        }
        const result = yield res.json();
        yield put(setGistsSuccess(result));
    } catch (err) {
        yield put(setGistsFailure(err.message));
    }
};

export default function* MySaga() {
    yield takeLatest(CHATS_ADD_MSG, sendMsg);
    yield takeLatest(CHATS_ADD_MSG, sayBot);
    yield takeLatest(GISTS_SET_LOADING, getAllGists);
    yield takeLatest(CHATS_ADD_CHAT, addChat);
    yield takeLatest(CHATS_DEL_CHAT, delChat);
    yield takeLatest(PROFILE_SHOW_NAME, profileShowName);
    yield takeLatest(PROFILE_SET_NAME, profileSetName);
}