import {createSlice} from '@reduxjs/toolkit';

const userRedux = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        isFetching: false,
        isError: false,
        message:""
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            console.log(state.currentUser)
        },
        loginFailure: (state,action) => {
            state.isFetching = false;
            state.isError = true;
            state.message = action.payload;
        }
    }
});

export const {loginStart, loginSuccess, loginFailure} = userRedux.actions;
export default userRedux.reducer;