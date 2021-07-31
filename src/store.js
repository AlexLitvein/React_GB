import profileReducer from './reducerProfile/reducer';
import chatsReducer from './reducerChats/reducer';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({ profile: profileReducer, chatsData: chatsReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const MyStore = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(MyStore);
export default MyStore;