import {loginStart, loginSuccess, loginFailure} from './userRedux';
import {publicRequest} from '../requestMethods';

export const login = async (dispatch, userForm) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post('/login/login', userForm);
        dispatch(loginSuccess(res.data));
    } catch (e) {
        // dispatch(loginFailure(e.response.data.msg));
        // console.log(e.response.data.msg);
        dispatch(loginFailure("error"));
        console.log(e.message);
    }
};