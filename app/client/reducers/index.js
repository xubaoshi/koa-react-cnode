import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'
import undoable from 'redux-undo'

import todo from './todo'

const rootReducer = combineReducers({
    todo:undoable(todo),
    router:routerStateReducer
})

export default rootReducer