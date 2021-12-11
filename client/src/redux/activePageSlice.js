import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentLocation: '',
};

export const activePageSlice = createSlice({
    name: 'activePage',
    initialState,
    reducers: {
        setActivePageLocation: (state, action) => {
            state.currentLocation = action.payload
        },
    },
});

export const { setActivePageLocation } = activePageSlice.actions;

export default activePageSlice.reducer;