import { combineReducers } from 'redux-immutable'
import { combineEpics } from 'redux-observable'

import Home from './Home'
import HomeEpics from './Home/epics'

export const pagesEpics = combineEpics(HomeEpics)

export const pages = combineReducers({
  Home,
})
