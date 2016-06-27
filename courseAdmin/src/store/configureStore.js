import {createStore} from 'redux';
import rootReducer from '../reducers';

export default function configStrore(initialState) {
    return createStore(
        rootReducer,
        initialState
    );
}