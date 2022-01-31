import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        isDarkMode: false,
    },
    reducers: {
        switchDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
    },
});

export const { switchDarkMode } = themeSlice.actions;

const selectThemeState = state => state.theme;

export const selectIsDarkMode = state => selectThemeState(state).isDarkMode;

export default themeSlice.reducer;