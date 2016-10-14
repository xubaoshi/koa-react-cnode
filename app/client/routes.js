import { Route } from 'react-router'
import React from 'react'

import App from './containers/App'
import Error404 from './components/Error404'
import Home from './components/Home'


export default (
    <Route name="app" path="/" component={App}>
        <Route path="home" component={Error404} />
        <Route path="*" component={Home} />
    </Route>
)
