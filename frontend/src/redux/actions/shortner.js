import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../services/api';

export function* getMyShortners() {
  try {
    const response = yield call(api.get, '/shortner');
    yield put({
      type: 'GET_ALL_SHORTNER',
      payload: response.data.shortners,
    });
  } catch (e) {
    toast.error(e.message);
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
    toast.error(e.message);
  }
}
