import _isEmpty from 'lodash/isEmpty'
import Immutable from 'immutable'
import { handleActions } from 'redux-actions'
import { types } from '@/redux/modules/actionCreators'

const reducer = handleActions({
  [types.home.fetchGetAmiibo]: state => Immutable.merge(state, {
    isGetting: true,
    error: false,
  }),
  [types.home.fetchGetAmiiboSuccess]: (state, action) => Immutable.merge(state, {
    isGetting: false,
    data: action.payload,
    isEmpty: _isEmpty(action.payload),
  }),
  [types.home.fetchGetAmiiboCancel]: state => Immutable.set(state, 'isGetting', false),
  [types.home.fetchGetAmiiboFailure]: (state, action) => Immutable.merge(state, {
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
