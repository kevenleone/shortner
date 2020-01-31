import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { constants } from '../../config';

const { TOAST: { ERROR } } = constants;

export function* getMyShortners() {
  try {
    const response = yield call(api.get, '/shortner');
    yield put({
      type: 'GET_ALL_SHORTNER',
      payload: response.data.shortners,
    });
  } catch (e) {
    yield put({
      type: 'ADD_TOAST',
      payload: {
        ...ERROR,
        text: e.message,
      },
    });
  }
}

export function* createShortner(action) {
  try {
    const response = yield call(api.post, '/shortner', action.payload);
    yield put({
      type: 'ADD_SHORTNER',
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: 'ADD_TOAST',
      payload: {
        ...ERROR,
        text: e.message,
      },
    });
  }
}
