import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { push, replace } from 'connected-react-router';
import { generators } from '../../utils';

export function* signUp(action) {
  const body = action.payload;

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
    toast.error(e.message);
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
    localStorage.setItem('@token', response.token.token);
    delete body.password;
    yield put({ type: 'SET_LOGGEDUSER', payload: response });
    yield put(push('/dashboard'));
  } catch (e) {
    toast.error(e.message);
  }
}

export function* signOut() {
  localStorage.removeItem('@token');
  localStorage.removeItem('@me');
  yield put(replace('/sign'));
  window.location.href = '/sign';
}
