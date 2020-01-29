import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

export function* setPageType(pageType) {
  yield put({ type: 'SET_PAGETYPE', payload: pageType });
}

export function* signUp(action) {
  const form = action.payload;
  try {
    yield call(api.post, '/api/user', form);
    delete form.password;
    yield put({ type: 'SET_FORMUSER', payload: form });
  } catch (e) {
    console.log(e.message);
  }
}

export function* signIn(action) {
  const form = action.payload;
  try {
    const response = yield call(api.post, '/api/user/login', form);
    delete form.password;
    yield put({ type: 'SET_LOGGEDUSER', payload: response.data });
    window.location.href = '/dashboard';
  } catch (e) {
    console.log(e.message);
  }
}
