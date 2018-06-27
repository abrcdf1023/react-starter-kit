import _get from 'lodash/get'
import { Observable } from 'rxjs'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actionCreators from '@/redux/modules/actionCreators'

/**
 * A util reduce redux boilerplate
 * @param {any} mapStateToProps
 * @param {String} actionCreators
 */
export const simpleConnect = (mapStateToProps, path) => {
  if (path) {
    return connect(
      mapStateToProps,
      dispatch => bindActionCreators(_get(actionCreators, path), dispatch),
    )
  }
  return connect(mapStateToProps)
}


/**
 * Create observable api
 * @param {any} payload
 * @param {any} api
 * @param {string} apiName
 */
export const createApi$ = (payload, api, apiName) => new Observable(async (observer) => {
  const response = await _get(api, apiName)(payload).catch(err => observer.error(err))
  observer.next(response)
  observer.complete()
})
