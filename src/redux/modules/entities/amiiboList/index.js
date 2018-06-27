import Immutable from 'immutable'
import { handleActions } from 'redux-actions'
import * as types from './types'

const reducer = handleActions({
  [types.ADD_AMIIBO_LIST_ENTITIES]:
  (state, action) => Immutable.mergeDeep(state, Immutable.fromJS(action.payload.amiiboList)),
}, Immutable.fromJS({}))

export default reducer
