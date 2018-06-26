import { createActions } from 'redux-actions'
import { getTypes } from '@/utils'

const actionMap = {
  AMIIBO_LIST: {
    ADD_ENTITIES: undefined,
  },

  HOME: {
    FETCH_GET_AMIIBO: undefined,
    FETCH_GET_AMIIBO_SUCCESS: undefined,
    FETCH_GET_AMIIBO_FAILURE: undefined,
    FETCH_GET_AMIIBO_CANCEL: undefined,
  },
  FETCH_GET_AMIIBO: undefined,
}

export const actionCreators = createActions(actionMap)

export const types = getTypes(actionCreators)
