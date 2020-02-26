import { call, put } from 'redux-saga/effects';
import { generators } from '../../utils';

export function* getMyShortners() {
  try {
    const response = yield call(generators.fetchApi, { url: '/shortner', loading: true });
    yield put({ type: 'GET_ALL_SHORTNER', payload: response.shortners });
  } catch (e) {}
}

export function* createShortner(action) {
  try {
    const response = yield call(generators.fetchApi, {
      method: 'post',
      url: '/shortner',
      body: action.payload,
      loading: true,
    });
    yield put({ type: 'ADD_SHORTNER', payload: response.data });
  } catch (e) {}
}
