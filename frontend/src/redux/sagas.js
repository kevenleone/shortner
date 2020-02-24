import { takeLatest } from 'redux-saga/effects';
import { setPageType } from './actions/base';
import { signUp, signIn, signOut } from './actions/user';
import { getMyShortners, createShortner } from './actions/shortner';

export default function* root() {
  yield takeLatest('SET_PAGETYPE_SAGA', setPageType);

  yield takeLatest('SIGNUP_SAGA', signUp);
  yield takeLatest('SIGNIN_SAGA', signIn);
  yield takeLatest('SIGNOUT_SAGA', signOut);

  yield takeLatest('GET_MYSHORTNERS_SAGA', getMyShortners);
  yield takeLatest('ADD_SHORTNER_SAGA', createShortner);
}
