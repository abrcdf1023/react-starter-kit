import _isEmpty from 'lodash/isEmpty'
import Immutable from 'immutable'
import { handleActions } from 'redux-actions'
import * as types from '@/redux/modules/types'

const reducer = handleActions({
  [types.fetchGetHomeAmiibo]: state => Immutable.merge(state, {
    isGetting: true,
    error: false,
  }),
  [types.ui.home.fetchGetAmiiboSuccess]: (state, action) => Immutable.merge(state, {
    isGetting: false,
    data: action.payload,
    isEmpty: _isEmpty(action.payload),
  }),
  [types.fetchGetHomeAmiiboCancel]: state => Immutable.set(state, 'isGetting', false),
  [types.fetchGetHomeAmiiboFailure]: (state, action) => Immutable.merge(state, {
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
