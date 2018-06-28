import { combineEpics, ofType } from 'redux-observable'
import { of } from 'rxjs'
import {
  switchMap, flatMap, catchError, takeUntil, debounceTime, repeat,
} from 'rxjs/operators'

import { normalize } from 'normalizr'

import { createApi$ } from '@/utils'
import { addCharacterListEntities } from '@/redux/modules/entities/characterList/actions'
import { addAmiiboListEntities } from '@/redux/modules/entities/amiiboList/actions'
import {
  fetchGetCharacterListSuccess, fetchGetCharacterListFailure,
  fetchGetAmiiboListSuccess, fetchGetAmiiboListFailure,
} from './actions'
import { FETCH_GET_CHARACTER_LIST, FETCH_GET_AMIIBO_LIST, FETCH_GET_AMIIBO_LIST_CANCEL } from './types'

export const fetchGetCharacterListEpic = (action$, state$, { schema }) => action$.pipe(
  ofType(FETCH_GET_CHARACTER_LIST),
  switchMap(action => createApi$(action.payload, 'fetchGetCharacterList')
    .pipe(
      flatMap((response) => {
        const { entities } = normalize(response.data.amiibo, schema.characterList)
        return [
          fetchGetCharacterListSuccess(response.data),
          addCharacterListEntities(entities),
        ]
      }),
      catchError(error => of(fetchGetCharacterListFailure(error))),
    )),
)

export const fetchGetAmiiboEpic = (action$, state$, { schema }) => action$.pipe(
  ofType(FETCH_GET_AMIIBO_LIST),
  debounceTime(500),
  switchMap(action => createApi$(action.payload, 'fetchGetAmiiboList')
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

export default combineEpics(fetchGetCharacterListEpic, fetchGetAmiiboEpic)
