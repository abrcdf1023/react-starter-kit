import { createActions } from 'redux-actions'

const actionMap = {
  ENTITIES: {
    AMIIBO_LIST: {
      ADD_AMIIBO_LIST_ENTITIES: undefined,
    },
  },
}

const actions = createActions(actionMap)

export default actions

export const { addAmiiboListEntities } = actions.entities.amiiboList
