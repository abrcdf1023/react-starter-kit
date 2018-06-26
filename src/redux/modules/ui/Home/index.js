import _isEmpty from 'lodash/isEmpty'
import Immutable from 'immutable'
import { handleActions } from 'redux-actions'
import * as actions from '@/redux/modules/actionCreators'

const reducer = handleActions({
  [actions.fetchGetHomeAmiibo]: state => Immutable.merge(state, {
    isGetting: true,
    error: false,
  }),
  [actions.fetchGetHomeAmiiboSuccess]: (state, action) => Immutable.merge(state, {
    isGetting: false,
    data: action.payload,
    isEmpty: _isEmpty(action.payload),
  }),
  [actions.fetchGetHomeAmiiboCancel]: state => Immutable.set(state, 'isGetting', false),
  [actions.fetchGetHomeAmiiboFailure]: (state, action) => Immutable.merge(state, {
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
