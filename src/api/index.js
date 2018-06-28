import axios from 'axios'
import queryString from 'query-string'

const config = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
}
// Api docs, http://www.amiiboapi.com/

export const fetchGetCharacterList = () => axios.get('http://www.amiiboapi.com/api/character', config)

export const fetchGetAmiiboList = payload => axios.get(`http://www.amiiboapi.com/api/amiibo/?${queryString.stringify(payload)}`, config)
