import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { store, history } from './redux/configureStore'
import { hot } from 'react-hot-loader'

import {
  Dashboard, Home, Login, SignUp,
} from '@/loadables'

export default hot(module)(() => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={Home} />
      </Switch>
    </ConnectedRouter>
  </Provider>
))
