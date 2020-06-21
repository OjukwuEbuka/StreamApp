import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    EDIT_STREAM,
    DELETE_STREAM
} from './types';
import streams from '../apis/streams';
import History from '../history';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createStream = formVals => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const res = await streams.post('streams', {...formVals, userId})

    dispatch({ type: CREATE_STREAM, payload: res.data});
    History.push('/');
}

export const fetchStream = id => async dispatch => {
    const res = await streams.get(`/streams/${id}`);

    dispatch({type: FETCH_STREAM, payload: res.data});
}
export const fetchStreams = () => async dispatch => {
    const res = await streams.get(`/streams`);

    dispatch({type: FETCH_STREAMS, payload: res.data});
}
export const editStream = (id, streamVal) => async dispatch => {
    const res = await streams.put(`/streams/${id}`, streamVal);

    dispatch({type: EDIT_STREAM, payload: res.data});
}
export const deleteStream = id => async dispatch => {
    const res = await streams.delete(`/streams/${id}`);

    dispatch({type: DELETE_STREAM, payload: id });
}