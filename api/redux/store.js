import {createStore, applyMiddleware} from 'redux';

// Redux-persist
// import {persistStore, persistCombineReducers} from 'redux-persist';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
// import storage from 'redux-persist/lib/storage';
import reducers from './reducers/index';

// Middlewares
import logger from 'redux-logger';
import thunk from 'redux-thunk';


const config = {
    key: 'root',
    storage: AsyncStorage
};

// const reducer = persistCombineReducers(config, reducers);
const reducer = persistReducer( config, reducers )

export default function configureStore() {
    let store = createStore(reducer, applyMiddleware(thunk, logger));
    let persistor = persistStore(store);

    return {store, persistor};
}
