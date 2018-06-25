import { createActions } from 'redux-actions'

import * as types from './types'

const actionCreators = createActions({
  HOME: {
    [types.FETCH_GET_AMIIBO]: undefined,
    [types.FETCH_GET_AMIIBO_SUCCESS]: undefined,
    [types.FETCH_GET_AMIIBO_FAILURE]: undefined,
    [types.FETCH_GET_AMIIBO_CANCEL]: undefined,
  },
})

export const {
  fetchGetAmiibo, fetchGetAmiiboSuccess, fetchGetAmiiboCancel, fetchGetAmiiboFailure,
} = actionCreators.home
