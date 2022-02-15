import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { fetchRepositories, fetchRepositoriesSuccess, fetchRepositoriesError } from './homeSlice';
import { getRepositoriesFromGithub } from './HomePage/Portfolio/getRepositoriesFromGithub ';

const loadingDelay = 2000;

function* fetchRepositoriesHandler({ payload: userName }) {
    try {
        yield delay(loadingDelay); // just to show the loading - demo
        const repositories = yield call(getRepositoriesFromGithub, userName);
        yield put(fetchRepositoriesSuccess(repositories));
    } catch (error) {
        yield put(fetchRepositoriesError());
    }
}

export function* watchFetchRepositories() {
    yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}