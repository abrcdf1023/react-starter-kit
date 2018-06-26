import { combineEpics, ofType } from 'redux-observable'
import { of } from 'rxjs'
import {
  switchMap, flatMap, catchError, takeUntil, debounceTime, repeat,
} from 'rxjs/operators'

import { normalize } from 'normalizr'

import { createApi$ } from '@/utils'
import { actionCreators, types } from '@/redux/modules/actionCreators'

export const fetchGetAmiiboEpic = (action$, state$, { api, schema }) => action$.pipe(
  ofType(types.home.fetchGetAmiibo),
  debounceTime(500),
  switchMap(action => createApi$(action.payload, api, 'fetchGetAmiibo')
    .pipe(
      flatMap((response) => {
        const { entities } = normalize(response.data.amiibo, schema.amiiboList)
        return [
          actionCreators.home.fetchGetAmiiboSuccess(response.data),
          actionCreators.amiiboList.addEntities(entities),
        ]
      }),
      catchError(error => of(actionCreators.home.fetchGetAmiiboFailure(error))),
    )),
  takeUntil(action$.pipe(ofType(types.home.fetchGetAmiiboCancel))),
  repeat(),
)

export default combineEpics(fetchGetAmiiboEpic)
