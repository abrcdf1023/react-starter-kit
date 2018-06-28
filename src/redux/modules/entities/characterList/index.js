import Immutable from 'immutable'
import { handleActions } from 'redux-actions'
import { ADD_CHARACTER_LIST_ENTITIES } from './types'

const reducer = handleActions({
  [ADD_CHARACTER_LIST_ENTITIES]:
  (state, action) => Immutable.mergeDeep(state, Immutable.fromJS(action.payload.characterList)),
}, Immutable.fromJS({}))

export default reducer
