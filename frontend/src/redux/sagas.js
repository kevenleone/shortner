import { takeLatest } from 'redux-saga/effects';
import { setPageType, signUp, signIn } from './actions/base';

export default function* root() {
  yield takeLatest('SET_PAGETYPE_SAGA', setPageType);
  yield takeLatest('SIGNUP_SAGA', signUp);
  yield takeLatest('SIGNIN_SAGA', signIn);
}
