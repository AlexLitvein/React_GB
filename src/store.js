import profileReducer from './reducerProfile/reducer';
import chatsReducer from './reducerChats/reducer';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga'
import MySaga from './saga';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({ profile: profileReducer, chatsData: chatsReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const MyStore = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(MySaga);

export const persistor = persistStore(MyStore);
export default MyStore;