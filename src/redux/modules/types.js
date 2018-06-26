import {
  addAmiiboListEntities,
  fetchGetHomeAmiibo,
  fetchGetHomeAmiiboSuccess,
  fetchGetHomeAmiiboFailure,
  fetchGetHomeAmiiboCancel,
} from './actionCreators'

export const ADD_AMIIBO_LIST_ENTITIES = addAmiiboListEntities().type

export const FETCH_GET_HOME_AMIIBO = fetchGetHomeAmiibo().type
export const FETCH_GET_HOME_AMIIBO_SUCCESS = fetchGetHomeAmiiboSuccess().type
export const FETCH_GET_HOME_AMIIBO_FAILURE = fetchGetHomeAmiiboFailure().type
export const FETCH_GET_HOME_AMIIBO_CANCEL = fetchGetHomeAmiiboCancel().type
