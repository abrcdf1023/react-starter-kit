import { combineReducers } from 'redux-immutable'
import { combineEpics } from 'redux-observable'

import Home from './Home'
import HomeEpics from './Home/epics'

export const uiEpics = combineEpics(HomeEpics)

export const ui = combineReducers({
  Home,
})
