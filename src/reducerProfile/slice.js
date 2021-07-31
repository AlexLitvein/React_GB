import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
    name: 'profile', // A name, used in action types
    initialState: {
        showName: true,
        name: '',
    },

    reducers: { // An object of "case reducers". Key names will be used to generate actions.        
        showName: (state, action) => {
            state.showName = action.payload;
        },

        setName: (state, action) => {
            state.name = action.payload;
        },
    },
},
);

export const { showName, setName } = profileSlice.actions;
export default profileSlice.reducer;