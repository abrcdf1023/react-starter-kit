import { createActions } from 'redux-actions'

const actionMap = {
  ENTITIES: {
    AMIIBO_LIST: {
      ADD_AMIIBO_LIST_ENTITIES: undefined,
    },
  },
  UI: {
    HOME: {
      FETCH_GET_AMIIBO_LIST: undefined,
      FETCH_GET_AMIIBO_LIST_SUCCESS: undefined,
      FETCH_GET_AMIIBO_LIST_FAILURE: undefined,
      FETCH_GET_AMIIBO_LIST_CANCEL: undefined,
    },
  },
}

export default createActions(actionMap)
