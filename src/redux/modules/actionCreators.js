import { createActions } from 'redux-actions'

const actionMap = {
  ENTITIES: {
    AMIIBO_LIST: {
      ADD: undefined,
    },
  },
  UI: {
    HOME: {
      FETCH_GET_AMIIBO: undefined,
      FETCH_GET_AMIIBO_SUCCESS: undefined,
      FETCH_GET_AMIIBO_FAILURE: undefined,
      FETCH_GET_AMIIBO_CANCEL: undefined,
    },
  },
}

const actionCreators = createActions(actionMap)

export default actionCreators

export const addAmiiboListEntities = actionCreators.entities.amiiboList.add

export const fetchGetHomeAmiibo = actionCreators.ui.home.fetchGetAmiibo
export const fetchGetHomeAmiiboSuccess = actionCreators.ui.home.fetchGetAmiiboSuccess
export const fetchGetHomeAmiiboFailure = actionCreators.ui.home.fetchGetAmiiboFailure
export const fetchGetHomeAmiiboCancel = actionCreators.ui.home.fetchGetAmiiboCancel
