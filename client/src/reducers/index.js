import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './AuthReducer';
import streamReducer from './streamReducer';


const mainReducer = combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer,
});


export default mainReducer;