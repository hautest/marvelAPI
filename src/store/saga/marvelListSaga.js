import { all, takeEvery, call, put } from "redux-saga/effects";
import { getMarvelList, setMarvelList, setMaxPage } from "../slice";
import { getMarvelCharacterList } from "../../api/getMarvelCharacterList";

const LIMIT = 9;

function* getMarvelListSaga({ payload }) {
  const { results, total } = yield call(getMarvelCharacterList, payload);

  yield put(setMarvelList(results));
  yield put(setMaxPage(Math.ceil(total / LIMIT)));
}

export function* marvelListSaga() {
  yield all([takeEvery(getMarvelList, getMarvelListSaga)]);
}
