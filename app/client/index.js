import 'babel-polyfill'
// import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router'
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router'

import {createBrowerHistory} from 'history'

import configureStore from './store/configureStore'
import routes from './routes.js'

const history = createBrowerHistory();
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState);
const rootElement = document.getElementById('root');

render(
    <Provider store={store}>
        {() =>
            <ReduxRouter>
                <Router children={routes} history={history}/>
            </ReduxRouter>
        }
    </Provider>
    ,
    rootElement
)
