import firebase from "firebase";
import { addMsg, CHATS_ADD_MSG } from './reducerChats/actions';
import { GISTS_SET_LOADING, setGistsSuccess, setGistsFailure } from './reduserGists/actions';
const { put, takeLatest, delay } = require('redux-saga/effects');

function* sendMsg(act) {
    try {
        console.log('sendMsg', act);
        const id = Date.now();
        yield firebase.database()
            .ref("msgs")
            .child(act.id)
            .child(id)
            .set(act.msg);

        // yield put(addMsg(act.id, { auth: "Робот", text: `Привет!` }));
        yield put(addMsg(act.id, act.msg));

    } catch (e) {
    }
};

function* sayBot(act) {
    try {
        console.log('sayBot', act);
        if (act.msg.auth !== "Робот") {
            yield delay(1000);

            // act.msg = { auth: "Робот", text: `Привет!` };
            // yield put(addMsg(act.id, { auth: "Робот", text: `Привет!` }));
            yield put(addMsg(act.id, { auth: "Робот", text: `Привет!` }));
        }

    } catch (e) {
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
}