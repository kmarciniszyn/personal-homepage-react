import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        repositories: [],
        repositoriesLoadingStatus: 'initial',
    },
    reducers: {
        fetchRepositories: state => {
            state.repositoriesLoadingStatus = 'loading';
            state.repositories = null;
        },
        fetchRepositoriesSuccess: (state, { payload: repositories }) => {
            state.repositoriesLoadingStatus = 'success';
            state.repositories = repositories;
        },
        fetchRepositoriesError: state => {
            state.repositoriesLoadingStatus = 'error';
            state.repositories = null;
        },
    },
});

export const selectHomeState = state => state.home;
export const selectRepositories = state => selectHomeState(state).repositories;
export const selectRepositoriesLoadingStatus = state => selectHomeState(state).repositoriesLoadingStatus;

export const {
    fetchRepositories,
    fetchRepositoriesSuccess,
    fetchRepositoriesError
} = homeSlice.actions;

export default homeSlice.reducer;