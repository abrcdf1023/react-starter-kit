import _get from 'lodash/get'
import { Observable } from 'rxjs'

module.exports.createApi$ = (payload, api, apiName) => new Observable(async (observer) => {
  const response = await _get(api, apiName)(payload).catch(err => observer.error(err))
  observer.next(response)
  observer.complete()
})
