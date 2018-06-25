import { combineEpics, ofType } from 'redux-observable'
import { of } from 'rxjs'
import { switchMap, flatMap, catchError, takeUntil, debounceTime, repeat } from 'rxjs/operators'

import { normalize } from 'normalizr'

import { createApi$ } from '@/redux/utils'
import { addAmiiboListEntities } from '@/redux/modules/entities/amiiboList/actions'
import * as actions from './actions'

export const fetchGetAmiiboEpic = (action$, state$, { api, schema }) => action$.pipe(
  ofType(actions.fetchGetAmiibo().type),
  debounceTime(500),
  switchMap(action => createApi$(action.payload, api, 'fetchGetAmiibo')
    .pipe(
      flatMap((response) => {
        const { entities } = normalize(response.data.amiibo, schema.amiiboList)
        return [
          actions.fetchGetAmiiboSuccess(response),
          addAmiiboListEntities(entities),
        ]
      }),
      catchError(error => of(actions.fetchGetAmiiboFailure(error))),
    )),
  takeUntil(action$.pipe(ofType(actions.fetchGetAmiiboCancel().type))),
  repeat(),
)

export default combineEpics(fetchGetAmiiboEpic)
