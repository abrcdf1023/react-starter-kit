import _isEmpty from 'lodash/isEmpty'
import Immutable from 'immutable'
import { handleActions } from 'redux-actions'
import * as actions from './actions'

const reducer = handleActions({
  [actions.fetchGetAmiibo]: state => Immutable.merge(state, {
    isGetting: true,
    error: false,
  }),
  [actions.fetchGetAmiiboSuccess]: (state, action) => Immutable.merge(state, {
    isGetting: false,
    data: action.payload,
    isEmpty: _isEmpty(action.payload),
  }),
  [actions.fetchGetAmiiboCancel]: state => Immutable.set(state, 'isGetting', false),
  [actions.fetchGetAmiiboFailure]: (state, action) => Immutable.merge(state, {
    isGetting: false,
    error: action.error,
    errorMsg: action.payload.message,
  }),
}, Immutable.fromJS({
  isGetting: false,
  isEmpty: true,
  error: false,
}))

export default reducer
