import Immutable from 'immutable'
import { handleActions } from 'redux-actions'
import * as actions from './actions'

const reducer = handleActions({
  [actions.fetchGetAmiibo]: state => Immutable.merge(state, {
    isGetting: true,
    error: false,
  }),
  [actions.fetchGetAmiiboAbort]: state => Immutable.set(state, 'isGetting', false),
  [actions.fetchGetAmiiboFailure]: (state, action) => Immutable.merge(state, {
    error: action.error,
    errorMsg: action.payload.message,
  }),
}, Immutable.fromJS({
  isGetting: false,
  error: false,
}))

export default reducer
