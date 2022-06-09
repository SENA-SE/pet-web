import {createSlice} from '@reduxjs/toolkit';

const registerRedux = createSlice({
    name: 'register',
    initialState: {
        isSuccess: false,
        isFetching: false,
        isError: false,
        message:""
    },
    reducers: {
        registerStart: (state) => {
            state.isFetching = true;
        },
        registerSuccess: (state, action) => {
            state.isFetching = false;
            state.isSuccess = true;
            // state.newUser = action.payload;
            // console.log(state.newUser)
        },
        registerFailure: (state,action) => {
            state.isFetching = false;
            state.isError = true;
            state.message = action.payload;
        }
    }
});

export const {registerStart, registerSuccess, registerFailure} = registerRedux.actions;
export default registerRedux.reducer;