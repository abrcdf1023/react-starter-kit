import Immutable from 'immutable'
import { handleActions } from 'redux-actions'
import { ADD_AMIIBO_LIST_ENTITIES } from './types'

const reducer = handleActions({
  [ADD_AMIIBO_LIST_ENTITIES]:
  (state, action) => Immutable.mergeDeep(state, Immutable.fromJS(action.payload.amiiboList)),
}, Immutable.fromJS({}))

export default reducer
