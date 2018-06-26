import { createActions } from 'redux-actions'

const actionMap = {
  UI: {
    HOME: {
      FETCH_GET_AMIIBO: undefined,
      FETCH_GET_AMIIBO_SUCCESS: undefined,
      FETCH_GET_AMIIBO_FAILURE: undefined,
      FETCH_GET_AMIIBO_CANCEL: undefined,
    },
  },
}

const actions = createActions(actionMap)

export default actions

export const {
  fetchGetAmiibo, fetchGetAmiiboSuccess, fetchGetAmiiboFailure, fetchGetAmiiboCancel,
} = actions.ui.home
