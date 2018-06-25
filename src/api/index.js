import axios from 'axios'
import queryString from 'query-string'

const config = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
}

export const fetchGetAmiibo = payload => axios.get(`http://www.amiiboapi.com/api/amiibo/${queryString.stringify(payload)}`, config)
