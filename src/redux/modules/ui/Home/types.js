import {
  fetchGetAmiiboList,
  fetchGetAmiiboListSuccess,
  fetchGetAmiiboListFailure,
  fetchGetAmiiboListCancel,
} from './actions'

export const FETCH_GET_AMIIBO_LIST = fetchGetAmiiboList().type
export const FETCH_GET_AMIIBO_LIST_SUCCESS = fetchGetAmiiboListSuccess().type
export const FETCH_GET_AMIIBO_LIST_FAILURE = fetchGetAmiiboListFailure().type
export const FETCH_GET_AMIIBO_LIST_CANCEL = fetchGetAmiiboListCancel().type
