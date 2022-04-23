import { all, takeEvery, call, put } from "redux-saga/effects";
import { setMarvelDetail, getMarvelDetail } from "../slice";
import { getMarvelCharacterDetail } from "../../api/getMarvelCharacterDetail";

function* getMarvelDetailSaga({ payload }) {
  const { results } = yield call(getMarvelCharacterDetail, payload);

  yield put(setMarvelDetail(results[0]));
}

export function* marvelDetailSaga() {
  yield all([takeEvery(getMarvelDetail, getMarvelDetailSaga)]);
}
