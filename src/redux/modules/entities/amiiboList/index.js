import Immutable from 'immutable'
import { handleActions } from 'redux-actions'
import { types } from '@/redux/modules/actionCreators'

const reducer = handleActions({
  [types.amiiboList.addEntities]:
  (state, action) => Immutable.mergeDeep(state, Immutable.fromJS(action.payload.amiiboList)),
}, Immutable.fromJS({}))

export default reducer
