import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'
import undoable from 'redux-undo'

import todo from './todo'

console.log(routerStateReducer)

const rootReducer = combineReducers({
    router:routerStateReducer,
    todo:undoable(todo)
})

export default rootReducer