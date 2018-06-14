import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux-immutable'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import Immutable from 'immutable'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import * as api from '@/api'
import * as schema from '@/api/schema'

import entities from './modules/entities'
import { uiEpics, ui } from './modules/ui'

// reducer
const reducer = combineReducers({
  entities,
  ui,
  router: routerReducer,
})

// initialState
const initialState = Immutable.fromJS()

// middleware
export const history = createHistory()
const epicMiddleware = createEpicMiddleware({
  dependencies: { api, schema },
})

let middleware = [epicMiddleware, routerMiddleware(history)]

if (process.env.NODE_ENV !== 'production') {
  // redux logger
  const { createLogger } = require('redux-logger')
  const { Iterable } = require('immutable')
  const stateTransformer = (state) => {
    if (Iterable.isIterable(state)) return state.toJS()
    return state
  }
  const logger = createLogger({ stateTransformer })
  middleware = [...middleware, logger]
}

export const store = createStore(reducer, initialState, applyMiddleware(...middleware))

const rootEpic = combineEpics(uiEpics)
epicMiddleware.run(rootEpic)
