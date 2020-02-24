import { put } from 'redux-saga/effects';

export function* setPageType(pageType) {
  yield put({ type: 'SET_PAGETYPE', payload: pageType });
}
