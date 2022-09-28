import { all, fork } from 'redux-saga/effects';

import productSagaWatcher from './product/saga';


export default function* rootSaga () {
    yield all([
        fork(productSagaWatcher)
    ]);
}