import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from '../reducer/reducer'
import createLogger from 'redux-logger';

const configureStore = preloadedState =>{
    return createStore(
        rootReducer,
        preloadedState,
        compose (
            applyMiddleware(createLogger)
        )
    );
}

const store = configureStore();
export default store;