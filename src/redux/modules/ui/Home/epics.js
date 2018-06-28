import { combineEpics, ofType } from 'redux-observable'
import { of } from 'rxjs'
import {
  switchMap, flatMap, catchError, takeUntil, debounceTime, repeat,
} from 'rxjs/operators'

import { normalize } from 'normalizr'

import { createApi$ } from '@/utils'
import { addAmiiboListEntities } from '@/redux/modules/entities/amiiboList/actions'
import { fetchGetAmiiboListSuccess, fetchGetAmiiboListFailure } from './actions'
import { FETCH_GET_AMIIBO_LIST, FETCH_GET_AMIIBO_LIST_CANCEL } from './types'

export const fetchGetAmiiboEpic = (action$, state$, { api, schema }) => action$.pipe(
  ofType(FETCH_GET_AMIIBO_LIST),
  debounceTime(500),
  switchMap(action => createApi$(action.payload, api, 'fetchGetAmiibo')
    .pipe(
      flatMap((response) => {
        const { entities } = normalize(response.data.amiibo, schema.amiiboList)
        return [
          fetchGetAmiiboListSuccess(response.data),
          addAmiiboListEntities(entities),
        ]
      }),
      catchError(error => of(fetchGetAmiiboListFailure(error))),
    )),
  takeUntil(action$.pipe(ofType(FETCH_GET_AMIIBO_LIST_CANCEL))),
  repeat(),
)

export default combineEpics(fetchGetAmiiboEpic)
