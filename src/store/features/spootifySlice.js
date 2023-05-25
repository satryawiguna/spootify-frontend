import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    access_token: '',
    token_type: '',
    expired_in: ''
}

const spootifySlice = createSlice({
    name: 'spootify',
    initialState: initialState,
    reducers: {
        updateSpootifyTokenAction: (state, {payload}) => {
            state.access_token = payload.access_token
            state.token_type = payload.token_type
            state.expired_in = payload.expired_in

            return state
        }
    }
})

export const {getSpootifyTokenAction, updateSpootifyTokenAction} = spootifySlice.actions

export default spootifySlice.reducer
