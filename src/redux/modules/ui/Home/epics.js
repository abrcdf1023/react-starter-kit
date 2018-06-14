import { combineEpics } from 'redux-observable'

import { normalize } from 'normalizr'

import { createFetchEpic } from '@/redux/utils'
import { addAmiiboListEntities } from '@/redux/modules/entities/amiiboList/actions'
import * as types from './types'
import * as actions from './actions'

export const fetchGetAmiiboEpic = createFetchEpic({
  type: types.AMIIBO_GET,
  apiName: 'fetchGetAmiibo',
  actions: {
    abort: actions.fetchGetAmiiboAbort(),
    next: (response, schema) => {
      const { entities } = normalize(response.data.amiibo, schema.amiiboList)
      return [
        addAmiiboListEntities(entities),
      ]
    },
    failue: error => actions.fetchGetAmiiboFailure(error),
  },
})

export default combineEpics(fetchGetAmiiboEpic)
