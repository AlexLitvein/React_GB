import { createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
    name: 'showName', // A name, used in action types
    initialState: { value: true, },
    reducers: { // An object of "case reducers". Key names will be used to generate actions.
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It      
            // doesn't actually mutate the state because it uses the Immer library,      
            // which detects changes to a "draft state" and produces a brand new      
            // immutable state based off those changes      
            state.value += 1;
        },
        decrement: (state) => { state.value -= 1; },
        show: (state, action) => { state.value = action.payload; },
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, show } = counterSlice.actions;
export default counterSlice.reducer;