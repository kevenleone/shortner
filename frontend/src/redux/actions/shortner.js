import { call, put } from 'redux-saga/effects';
import { generators } from '../../utils';

export function* getMyShortners() {
  try {
    const response = yield call(generators.fetchApi, { url: '/shortner', loading: true });
    yield put({ type: 'GET_ALL_SHORTNER', payload: response.shortners });
  } catch (e) {}
}

export function* createShortner(action) {
  const { body } = action.payload;
  try {
    const response = yield call(generators.fetchApi, {
      method: 'post',
      url: '/shortner',
      body,
      loading: true,
    });
    yield put({ type: 'ADD_SHORTNER', payload: response.data });
  } catch (e) {}
}

export function* updateShortner(action) {
  const { body, initialData: { id } } = action.payload;
  try {
    const response = yield call(generators.fetchApi, {
      method: 'put',
      url: `/shortner/${id}`,
      body,
      loading: true,
    });
    yield put({ type: 'UPD_SHORTNER', payload: response.data });
  } catch (e) {}
}

export function* deleteShortner(action) {
  const id = action.payload;
  try {
    yield call(generators.fetchApi, {
      method: 'delete',
      url: `/shortner/${id}`,
      loading: true,
    });
    yield put({ type: 'DEL_SHORTNER', payload: id });
  } catch (e) {}
}