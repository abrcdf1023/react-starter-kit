import Immutable from 'immutable'
import { handleActions } from 'redux-actions'
import * as actions from '@/redux/modules/actionCreators'

const reducer = handleActions({
  [actions.addAmiiboListEntities]:
  (state, action) => Immutable.mergeDeep(state, Immutable.fromJS(action.payload.amiiboList)),
}, Immutable.fromJS({}))

export default reducer
