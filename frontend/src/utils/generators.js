import { call, put, delay } from 'redux-saga/effects';
import api from '../services/api';

function* handleLoading(type) {
  if (type) {
    yield put({ type });
  }
}

export function* fetchApi(params) {
  const {
    method = 'get', url, body = {}, loading, softLoading,
  } = params;
  let LOADING_TYPE = null;
  let data;
  let err;

  if (loading || softLoading) {
    LOADING_TYPE = loading ? 'SET_LOADING' : 'SET_SOFTLOADING';
  }

  yield handleLoading(LOADING_TYPE);

  try {
    const response = yield call(api[method], url, body);
    data = response.data;
  } catch (e) {
    err = e;
  }

  yield delay(1000);
  yield handleLoading(LOADING_TYPE);

  if (err) {
    throw err;
  }

  return data;
}
