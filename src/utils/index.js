import _get from 'lodash/get'
import { Observable } from 'rxjs'
import * as apis from '@/api'

/**
 * Create observable api
 * @param {any} payload
 * @param {any} api
 * @param {string} apiName
 */
export const createApi$ = (payload, apiName) => {
  const api = _get(apis, apiName)
  if (api) {
    return new Observable(async (observer) => {
      const response = await api(payload).catch(err => observer.error(err))
      observer.next(response)
      observer.complete()
    })
  }
  throw new Error(`Undefined api name "${apiName}" please check you have this api.`)
}
