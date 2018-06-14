import _isEmpty from 'lodash/isEmpty'
import { ofType } from 'redux-observable'
import { of } from 'rxjs'
import { switchMap, flatMap, catchError } from 'rxjs/operators'

/**
 * Create fetch epic without check response data is empty
 * @param {!string} type
 * @param {!string} apiName
 * @param {!Object} actions
 * @param {!$action} actions.abort
 * @param {!func} actions.next
 * @param {!func} actions.failue
 */
module.exports.createFetchEpic = function createFetchEpic({ type, apiName, actions }) {
  return (action$, state$, { api, schema }) => action$
    .pipe(
      ofType(type),
      switchMap(action => api[apiName](action)
        .pipe(
          flatMap(response => [
            actions.abort,
            ...actions.next(response, schema, action),
          ]),
          catchError(error => of(actions.abort, actions.failue(error))),
        )),
    )
}

/**
 * Create fetch epic with check response data is empty
 * @param {!string} type
 * @param {!string} apiName
 * @param {!Object} actions
 * @param {!$action} actions.abort
 * @param {!$action} actions.notfound
 * @param {!func} actions.next
 * @param {!func} actions.failue
 */
module.exports.createFetchEpicWithCheckResponseData =
function createFetchEpicWithCheckResponseData({ type, apiName, actions }) {
  return (action$, state$, { api, schema }) => action$
    .pipe(
      ofType(type),
      switchMap(action => api[apiName](action)
        .pipe(
          flatMap(response => (_isEmpty(response.data) ? [
            actions.abort,
            actions.notfound,
          ] : [
            actions.abort,
            ...actions.next(response, schema, action),
          ])),
          catchError(error => of(actions.abort, actions.failue(error))),
        )),
    )
}
