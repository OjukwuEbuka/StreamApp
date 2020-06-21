import {
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types';

export default (state={}, action) => {
    switch(action.type){
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload};
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload};
        case FETCH_STREAM:
            return { ...state, [action.payload.id]: action.payload};
        case DELETE_STREAM:
            delete state[action.payload.id];
            return { ...state };
        case FETCH_STREAMS:
            const streams = action.payload.reduce((acc, stream) => { 
                const acc2 = { ...acc, [stream.id]: stream}
                return acc2;
            }, {} )
            return { ...state, ...streams };
        default:
            return state;
    }
}