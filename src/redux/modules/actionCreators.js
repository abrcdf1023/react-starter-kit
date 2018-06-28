import { createActions } from 'redux-actions'

const actionMap = {
  ENTITIES: {
    CHARACTER_LIST: {
      ADD_CHARACTER_LIST_ENTITIES: undefined,
    },
    AMIIBO_LIST: {
      ADD_AMIIBO_LIST_ENTITIES: undefined,
    },
  },
  PAGES: {
    HOME: {
      FETCH_GET_CHARACTER_LIST: undefined,
      FETCH_GET_CHARACTER_LIST_SUCCESS: undefined,
      FETCH_GET_CHARACTER_LIST_FAILURE: undefined,

      FETCH_GET_AMIIBO_LIST: undefined,
      FETCH_GET_AMIIBO_LIST_SUCCESS: undefined,
      FETCH_GET_AMIIBO_LIST_FAILURE: undefined,
      FETCH_GET_AMIIBO_LIST_CANCEL: undefined,
    },
  },
}

export default createActions(actionMap)
