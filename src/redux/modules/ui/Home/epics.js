import { combineEpics, ofType } from 'redux-observable'
import { of } from 'rxjs'
import {
  switchMap, flatMap, catchError, takeUntil, debounceTime, repeat,
} from 'rxjs/operators'

import { normalize } from 'normalizr'

import { createApi$ } from '@/utils'
import {
  fetchGetHomeAmiiboSuccess,
  fetchGetHomeAmiiboFailure,
  addAmiiboListEntities,
} from '@/redux/modules/actionCreators'
import * as types from '@/redux/modules/types'

export const fetchGetAmiiboEpic = (action$, state$, { api, schema }) => action$.pipe(
  ofType(types.FETCH_GET_HOME_AMIIBO),
  debounceTime(500),
  switchMap(action => createApi$(action.payload, api, 'fetchGetAmiibo')
    .pipe(
      flatMap((response) => {
        const { entities } = normalize(response.data.amiibo, schema.amiiboList)
        return [
          fetchGetHomeAmiiboSuccess(response.data),
          addAmiiboListEntities(entities),
        ]
      }),
      catchError(error => of(fetchGetHomeAmiiboFailure(error))),
    )),
  takeUntil(action$.pipe(ofType(types.FETCH_GET_HOME_AMIIBO_CANCEL))),
  repeat(),
)

export default combineEpics(fetchGetAmiiboEpic)
