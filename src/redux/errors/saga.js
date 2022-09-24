import { call, put, takeEvery } from "redux-saga/effects";
import { openAlert } from '../alerts/slice';
import * as actionTypes from './actionTypes'; 
import history from "../../routes/history";


// worker


function* badRequestWorker({ payload: data }) {
  try {
    yield put(openAlert(data.data.message, "error"));
  } catch (error) {
    yield put(serverError((500).toString(), error));
  }
}

function* unauthorizedWorker({ payload: data }) {
  try {
    yield call(sessionStorage.removeAllItems);
    yield put(openAlert(data.data.message, "error"));
  } catch (error) {
    yield put(serverError((500).toString(), error));
  } finally {
      history.replace("/login");
    
  }
}

function* forbiddenWorker({ payload: data }) {
  try {
    yield call(sessionStorage.removeAllItems);
    yield put(openAlert(data.data.message, "error"));
  } catch (error) {
    yield put(serverError((500).toString(), error));
  } finally {
    history.replace("/login");
  }
}

function* notfoundWorker({ payload: data }) {
  try {
    yield put(openAlert(data.data.message, "error"));
  } catch (error) {
    yield put(serverError((500).toString(), error));
  }
}


function* networkError({ payload }) {
  try {
    yield put(openAlert(payload.message, "error"));
  } catch (error) {
    yield put(serverError((500).toString(), error));
  } finally {
    history.push("/networkError");
  }
}

function* serverErrorWorker({ payload: data }) {
  try {
    yield put(openAlert(data.data.message, "error"));
  } catch (error) {
    console.log(error);
  } finally {
    history.push("/serverError");
  }
}

// watcher
export default function* errorSagaWatcher() {
  yield takeEvery(actionTypes.BAD_REQUEST_ERROR.toString(), badRequestWorker);
  yield takeEvery(
    actionTypes.UNAUTHORIZED_ERROR.toString(),
    unauthorizedWorker
  );
  yield takeEvery(actionTypes.FORBIDDEN_ERROR.toString(), forbiddenWorker);
  yield takeEvery(actionTypes.NOTFOUND_ERROR.toString(), notfoundWorker);

  yield takeEvery(actionTypes.SERVER_ERROR.toString(), serverErrorWorker);
  yield takeEvery(actionTypes.NETWORK_ERROR.toString(), networkError);
}
