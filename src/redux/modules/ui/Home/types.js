import {
  fetchGetAmiibo,
  fetchGetAmiiboSuccess,
  fetchGetAmiiboFailure,
  fetchGetAmiiboCancel,
} from './actions'

export const FETCH_GET_AMIIBO = fetchGetAmiibo().type
export const FETCH_GET_AMIIBO_SUCCESS = fetchGetAmiiboSuccess().type
export const FETCH_GET_AMIIBO_FAILURE = fetchGetAmiiboFailure().type
export const FETCH_GET_AMIIBO_CANCEL = fetchGetAmiiboCancel().type
