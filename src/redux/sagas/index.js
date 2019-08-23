/**
 * Root Sagas
 */
import { all } from 'redux-saga/effects'
// sagas
import commingSoonSagas from './commingSoon'

export default function * rootSaga (getState) {
  yield all([
    commingSoonSagas(),
  ])
}