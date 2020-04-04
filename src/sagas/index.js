import { put, takeLatest, all } from "redux-saga/effects";
import { actionTypes } from "../actions";
import axios from "axios";

const { REACT_APP_API_ENDPOINT, REACT_APP_API_KEY } = process.env;

function* fetchComics(action) {
  const config = {
    headers: { Authorization: `Bearer ${REACT_APP_API_KEY}` },
  };
  const response = yield axios.get(
    `${REACT_APP_API_ENDPOINT}/comics${
      action.payload ? `?q=${action.payload}` : ""
    }`,
    config
  );
  yield put({ type: actionTypes.COMICS_RECEIVED, payload: response.data });
}

function* actionWatcher() {
  yield takeLatest(actionTypes.GET_COMICS, fetchComics);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
