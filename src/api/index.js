import { Observable } from 'rxjs'
import axios from 'axios'
import { objectToQueryString } from '@e-group/frontend-utils/async'

const createApi = apiFunc => action => new Observable(async (observer) => {
  const response = await apiFunc(action.payload).catch(err => observer.error(err))
  observer.next(response)
  observer.complete()
})

const config = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
}

export const fetchGetAmiibo = createApi(payload => axios.get(`http://www.amiiboapi.com/api/amiibo/${objectToQueryString(payload)}`, config))
