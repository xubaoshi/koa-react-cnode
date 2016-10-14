import { createStore, applyMiddleware, compose} from 'redux'
import { createDevTools } from 'redux-devtools'
import { reduxReactRouter } from 'redux-router'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import createLogger from 'redux-logger'
// import promiseMiddleware from '../middleware/promiseMiddleware'
import rootReducer from  '../reducers'

// 坑爹的组件  history与redux-router不同步
const createHistory = createBrowserHistory

const middlewareBuilder = () => {
    let middleware = {}
    let universalMiddleware = [thunk]
    let allComposeElements = []

    if (process.browser) {
        middleware = applyMiddleware(...universalMiddleware,createLogger())
        allComposeElements = [
            middleware,
            reduxReactRouter({
                createHistory
            })
        ]
    } else {
        middleware = applyMiddleware(...universalMiddleware);
        allComposeElements = [
            middleware
        ]
    }
    return allComposeElements;
}

const finalCreateStore = compose(...middlewareBuilder())(createStore)
export default function configureStore(initialState){
    const store = finalCreateStore(rootReducer,initialState)
    return store
}
