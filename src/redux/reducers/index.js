/**
 * App Reducers
 */
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import commingSoonReducer from './commingSoon'

const reducers = combineReducers({
  home: commingSoonReducer,
  form: formReducer
})

export default reducers