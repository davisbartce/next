import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { SAVE_SUSCRIBER } from '../types'

import {
    saveSuscriberFailure,
    saveSuscriberSuccess
  } from '../actions/commingSoon'

  
// export function * saveSuscriber () {
//     yield takeEvery(SAVE_SUSCRIBER, saveSuscriberApi)
//   }

  function * saveSuscriberApi ({payload}) {
      console.log('saga')
//     let {data, resetFunction,notifyFunction} = payload
//   try {
//     const response = yield db.collection('suscribers').add(data)
//     yield put(saveSuscriberSuccess(response))
//     resetFunction()
//     notifyFunction('Te has Suscrito Correctamente!',{ variant: 'success' })
//   } catch (error) {
//     yield put(saveSuscriberFailure(error))
//     notifyFunction('Error al enviar la Información!',{ variant: 'error' })
//   }
}


/**
 * Root Saga
 */
export default function * rootSaga () {
    yield all([
      // fork(saveSuscriber)
    ])
  }