import Immutable from 'immutable'
import { handleActions } from 'redux-actions'
import * as types from '@/redux/modules/types'

const reducer = handleActions({
  [types.addAmiiboListEntities]:
  (state, action) => Immutable.mergeDeep(state, Immutable.fromJS(action.payload.amiiboList)),
}, Immutable.fromJS({}))

export default reducer
