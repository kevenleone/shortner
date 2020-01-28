import { takeLatest } from 'redux-saga/effects';

function* test() {}

export default function* root() {
  // REPOSITORIES SAGA
  // yield takeLatest('ADD_REPOSITORY_SAGA', addRepository);
  yield takeLatest('FETCH_MORE_COMMITS_SAGA', test);
}
