import koa from 'koa'
import serve from 'koa-static';
import router from 'koa-router'

import React from 'react'
import { renderToString } from 'react-dom/server'
import {RouterContext, match} from 'react-router'
import { Provider } from 'react-redux'
import { createLocation } from 'history'

import configureStore from '../client/store/configureStore'
import routes from '../client/routes'

const app = koa()
const route = router()

const renderFullPage = (html, initialState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Isomorphic Redux Example</title>
      </head>
      <body>
        <div id="root"><div class="wrapper">${html}</div></div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}; 
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
}

console.log(__dirname + '\\..\\..\\dist')
app.use(serve(__dirname + '\\..\\..\\dist'))

route.get('*', function* () {
  const location = createLocation(this.url);
  console.log('routes:' + routes)
  console.log('location:' + location)
  match({ routes, location }, (err, redirectLocation, renderProps) => {
    console.log(this.url)
    const store = configureStore({})
    const initialView = (
      <Provider store={store}>
        <RouterContext  {...renderProps} />
      </Provider>
    )
    const componentHTML = renderToString(initialView)
    const initialState = store.getState();
    console.log(componentHTML)
    this.body = renderFullPage(componentHTML, initialState)
  })
})

app.use(route.routes())

app.listen(3000)

console.log("listen on port:3000")
