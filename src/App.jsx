import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { hot } from 'react-hot-loader'

import { Dashboard, Home, Login, SignUp } from '@/loadables'

export default hot(module)(() => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/" component={Home} />
  </Switch>
))
