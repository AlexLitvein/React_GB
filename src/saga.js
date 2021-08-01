import { addMsg, CHATS_ADD_MSG } from './reducerChats/actions';
const { call, put, takeEvery, takeLatest, delay } = require('redux-saga/effects');

function* sayBot(act) {
    try {
        if (act.msg.auth !== "Робот") {
            yield delay(1000);
            yield put(addMsg(act.id, { auth: "Робот", text: `Привет!` }));
        }
        
    } catch (e) {
    }
}

export default function* MySaga() {
    yield takeLatest(CHATS_ADD_MSG, sayBot);
    // yield takeEvery(CHATS_ADD_MSG, sayBot);
}