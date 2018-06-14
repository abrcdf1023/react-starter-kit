import { createAction } from 'redux-actions'

import * as types from './types'

export const fetchGetAmiibo = createAction(types.AMIIBO_GET)
export const fetchGetAmiiboAbort = createAction(types.AMIIBO_GET_ABORT)
export const fetchGetAmiiboFailure = createAction(types.AMIIBO_GET_FAILURE)
