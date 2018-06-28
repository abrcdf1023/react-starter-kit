import { combineReducers } from 'redux-immutable'

import amiiboList from './amiiboList'
import characterList from './characterList'

export default combineReducers({
  amiiboList,
  characterList,
})
