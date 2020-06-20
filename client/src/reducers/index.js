import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './AuthReducer';


const mainReducer = combineReducers({
    auth: authReducer,
    form: formReducer,
});


export default mainReducer;