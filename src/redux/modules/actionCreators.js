import { createActions } from 'redux-actions'

const actionMap = {
  ENTITIES: {
    AMIIBO_LIST: {
      ADD_AMIIBO_LIST_ENTITIES: undefined,
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

export default createActions(actionMap)
