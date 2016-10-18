import 'babel-polyfill'
import React from 'react';
var ReactDOM  = require('react-dom')
import { Router } from 'react-router'
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router'

import { createBrowserHistory } from 'history'

import configureStore from './store/configureStore'
import routes from './routes'

console.log(routes)


const history = createBrowserHistory();
// const initialState = window.__INITIAL_STATE__;
const store = configureStore({});
const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
       <ReduxRouter>
             <Router children={routes} history={history}/>
       </ReduxRouter>
    </Provider>
    ,
    rootElement
)

