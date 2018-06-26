import _get from 'lodash/get'
import _forIn from 'lodash/forIn'
import _isPlainObject from 'lodash/isPlainObject'
import _set from 'lodash/set'
import { Observable } from 'rxjs'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import actionCreators from '@/redux/modules/actionCreators'

/**
 * A util reduce redux boilerplate
 * @param {any} mapStateToProps
 * @param {any} actionCreators
 */
export const simpleConnect = (mapStateToProps, path) => {
  if (path) {
    return connect(mapStateToProps, dispatch => bindActionCreators(
      _get(actionCreators, path), dispatch,
    ))
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

/**
 * parse actions to types object
 * @param {any} actions
 */
export const getTypes = (actions) => {
  const types = {}
  function recursiveFuncs(obj, parent) {
    _forIn(obj, (value, key) => {
      if (_isPlainObject(value)) {
        if (parent) {
          recursiveFuncs(value, `${parent}.${key}`)
        } else {
          recursiveFuncs(value, key)
        }
      } else if (parent) {
        _set(types, `${parent}.${key}`, value().type)
      } else {
        _set(types, key, value().type)
      }
    })
  }
  recursiveFuncs(actions)
  return types
}
