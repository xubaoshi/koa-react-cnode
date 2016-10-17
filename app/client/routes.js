import { Route,IndexRoute } from 'react-router'
import React from 'react'

import App from './containers/App'
import Error404 from './components/Error404'
import Home from './components/Home'


export default (
    <Route name="app" path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="home" component={Home} />
        <Route path="*" component={Error404} />
    </Route>
)
