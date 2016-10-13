import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'
import undoable from 'redux-undo'

import todos from './todo'

const rootReducer = combineReducers({
    todos:undoable(todos),
    router:routerStateReducer
})

export default rootReducer