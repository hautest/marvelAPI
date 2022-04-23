import { all, fork } from "redux-saga/effects";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { marvelListReducer, marvelDetailReducer } from "./slice";
import createSagaMiddleware from "redux-saga";

import { marvelListSaga, marvelDetailSaga } from "./saga";

const rootReducer = combineReducers({
  marvelList: marvelListReducer,
  marvelDetail: marvelDetailReducer,
});

function* rootSaga() {
  yield all([fork(marvelListSaga), fork(marvelDetailSaga)]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);
