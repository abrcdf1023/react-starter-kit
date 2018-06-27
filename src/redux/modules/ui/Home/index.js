import _isEmpty from 'lodash/isEmpty'
import Immutable from 'immutable'
import { handleActions } from 'redux-actions'
import * as types from './types'

const reducer = handleActions({
  [types.FETCH_GET_AMIIBO]: state => Immutable.merge(state, {
    isGetting: true,
    error: false,
  }),
  [types.FETCH_GET_AMIIBO_SUCCESS]: (state, action) => Immutable.merge(state, {
    isGetting: false,
    data: action.payload,
    isEmpty: _isEmpty(action.payload),
  }),
  [types.FETCH_GET_AMIIBO_CANCEL]: state => Immutable.set(state, 'isGetting', false),
  [types.FETCH_GET_AMIIBO_FAILURE]: (state, action) => Immutable.merge(state, {
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
