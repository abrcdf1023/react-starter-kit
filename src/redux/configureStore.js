import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux-immutable'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import Immutable from 'immutable'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import * as schema from '@/api/schema'

import entities from './modules/entities'
import { pagesEpics, pages } from './modules/pages'

// reducer
const reducer = combineReducers({
  entities,
  pages,
  router: routerReducer,
})

// initialState
const initialState = Immutable.fromJS()

// middleware
export const history = createHistory()
const epicMiddleware = createEpicMiddleware({
  dependencies: { schema },
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

const rootEpic = combineEpics(pagesEpics)
epicMiddleware.run(rootEpic)
