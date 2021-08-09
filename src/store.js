import profileReducer from './reducerProfile/reducer';
import chatsReducer from './reducerChats/reducer';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga'
import MySaga from './saga';
import gistsReducer from './reduserGists/reducer';

const rootReducer = combineReducers({
    profile: profileReducer,
    chatsData: chatsReducer,
    gists: gistsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

// const persistConfig = {
//     key: 'root',
//     storage,
// }
// const persistedReducer = persistReducer(persistConfig, rootReducer)
// const MyStore = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

const MyStore = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(MySaga);

// export const persistor = persistStore(MyStore);
export default MyStore;