/**
 * Redux Store
 */
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import RootSaga from './sagas'
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const middlewares = [thunk, sagaMiddleware]

export function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  )
  sagaMiddleware.run(RootSaga)

  return store
}
