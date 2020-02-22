import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { push } from 'connected-react-router';
import api from '../../services/api';

export function* setPageType(pageType) {
  yield put({ type: 'SET_PAGETYPE', payload: pageType });
}

export function* signUp(action) {
  const form = action.payload;

  try {
    yield call(api.post, '/register', form);
    delete form.password;
    yield put({ type: 'SET_FORMUSER', payload: form });
  } catch (e) {
    toast.error(e.message);
  }
}

export function* signIn(action) {
  const form = action.payload;
  yield put({ type: 'SET_SOFTLOADING' });

  try {
    const response = yield call(api.post, '/auth', form);
    localStorage.setItem('@token', response.data.token.token);
    delete form.password;
    yield put({ type: 'SET_LOGGEDUSER', payload: response.data });
    yield put(push('/dashboard'));
  } catch (e) {
    toast.error(e.message);
  }
  yield put({ type: 'SET_SOFTLOADING' });
}
