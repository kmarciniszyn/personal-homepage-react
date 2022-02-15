import { all } from 'redux-saga/effects';
import { watchFetchRepositories } from './features/home/homeSaga';

export default function* rootSaga() {
    yield all([
        watchFetchRepositories(),
    ]);
};