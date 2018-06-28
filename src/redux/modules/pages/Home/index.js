import _isEmpty from 'lodash/isEmpty'
import Immutable from 'immutable'
import { handleActions } from 'redux-actions'
import {
  FETCH_GET_AMIIBO_LIST,
  FETCH_GET_AMIIBO_LIST_SUCCESS,
  FETCH_GET_AMIIBO_LIST_CANCEL,
  FETCH_GET_AMIIBO_LIST_FAILURE,
} from './types'

const reducer = handleActions({
  [FETCH_GET_AMIIBO_LIST]: state => Immutable.merge(state, {
    isGetting: true,
    error: false,
  }),
  [FETCH_GET_AMIIBO_LIST_SUCCESS]: (state, action) => Immutable.merge(state, {
    isGetting: false,
    data: action.payload,
    isEmpty: _isEmpty(action.payload),
  }),
  [FETCH_GET_AMIIBO_LIST_CANCEL]: state => Immutable.set(state, 'isGetting', false),
  [FETCH_GET_AMIIBO_LIST_FAILURE]: (state, action) => Immutable.merge(state, {
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
