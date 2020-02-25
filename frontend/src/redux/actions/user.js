import { call, put } from 'redux-saga/effects';
import { push, replace } from 'connected-react-router';
import { generators } from '../../utils';

export function* signUp(action) {
  const { data: body, formRef } = action.payload;

  try {
    yield call(generators.fetchApi, {
      method: 'post',
      url: '/register',
      body,
      loading: true,
    });
    delete body.password;
    yield put({ type: 'SET_FORMUSER', payload: body });
  } catch (e) {
    formRef.current.setErrors({ email: 'Email Already Exists' });
  }
}

export function* signIn(action) {
  const body = action.payload;

  try {
    const response = yield call(generators.fetchApi, {
      method: 'post',
      url: '/auth',
      body,
      softLoading: true,
    });
    const data = response.data;
    localStorage.setItem('@token', data.token.token);
    delete body.password;
    yield put({ type: 'SET_LOGGEDUSER', payload: data });
    yield put(push('/dashboard'));
  } catch (e) {}
}

export function* signOut() {
  localStorage.removeItem('@token');
  localStorage.removeItem('@me');
  yield put(replace('/sign'));
  window.location.href = '/sign';
}
