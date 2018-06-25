import axios from 'axios'
import { objectToQueryString } from '@e-group/frontend-utils/async'

const config = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
}

export const fetchGetAmiibo = payload => axios.get(`http://www.amiiboapi.com/api/amiibo/${objectToQueryString(payload)}`, config)
