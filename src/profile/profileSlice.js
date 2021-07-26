import { createSlice } from '@reduxjs/toolkit';
const profileSlice = createSlice({
    name: 'showName', // A name, used in action types
    initialState: { value: true, },
    reducers: { // An object of "case reducers". Key names will be used to generate actions.        
        show: (state, action) => { state.value = action.payload; },
    },
});

// Action creators are generated for each case reducer function
export const { show } = profileSlice.actions;
export default profileSlice.reducer;