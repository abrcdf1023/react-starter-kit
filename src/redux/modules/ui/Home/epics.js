import { combineEpics, ofType } from 'redux-observable'
import { of } from 'rxjs'
import {
  switchMap, flatMap, catchError, takeUntil, debounceTime, repeat,
} from 'rxjs/operators'

import { normalize } from 'normalizr'

import { createApi$ } from '@/utils'
import { addAmiiboListEntities } from '@/redux/modules/entities/amiiboList/actions'
import * as actions from './actions'
import * as types from './types'

export const fetchGetAmiiboEpic = (action$, state$, { api, schema }) => action$.pipe(
  ofType(types.FETCH_GET_AMIIBO),
  debounceTime(500),
  switchMap(action => createApi$(action.payload, api, 'fetchGetAmiibo')
    .pipe(
      flatMap((response) => {
        const { entities } = normalize(response.data.amiibo, schema.amiiboList)
        return [
          actions.fetchGetAmiiboSuccess(response.data),
          addAmiiboListEntities(entities),
        ]
      }),
      catchError(error => of(actions.fetchGetAmiiboFailure(error))),
    )),
  takeUntil(action$.pipe(ofType(types.FETCH_GET_AMIIBO_CANCEL))),
  repeat(),
)

export default combineEpics(fetchGetAmiiboEpic)
