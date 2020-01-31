import { takeLatest } from 'redux-saga/effects';
import { setPageType, signUp, signIn } from './actions/base';
import { getMyShortners, createShortner } from './actions/shortner';

export default function* root() {
  yield takeLatest('SET_PAGETYPE_SAGA', setPageType);
  yield takeLatest('SIGNUP_SAGA', signUp);
  yield takeLatest('SIGNIN_SAGA', signIn);

  yield takeLatest('GET_MYSHORTNERS_SAGA', getMyShortners);
  yield takeLatest('ADD_SHORTNER_SAGA', createShortner);
}
