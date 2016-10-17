import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../actions/todo';

const initialState = [{
  text: 'Use Redux',
  completed: false,
  id: 0
}];

export default function todo(state = initialState, action) {
  if(state[0].id == 0) return
  switch (action.type) {
  case ADD_TODO:
    console.log("ADD_TODO")
    return [{
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      completed: false,
      text: action.text
    }, ...state];

  case DELETE_TODO:
  console.log("DELETE_TODO")
    return state.filter(todo =>
      todo.id !== action.id
    );

  case EDIT_TODO:
  console.log("EDIT_TODO")
    return state.map(todo =>
      todo.id === action.id ?
        Object.assign({}, todo, { text: action.text }) :
        todo
    );

  case COMPLETE_TODO:
  console.log("COMPLETE_TODO")
    return state.map(todo =>
      todo.id === action.id ?
        Object.assign({}, todo, { completed: !todo.completed }) :
        todo
    );

  case COMPLETE_ALL:
  console.log("COMPLETE_ALL")
    const areAllMarked = state.every(todo => todo.completed);
    return state.map(todo => Object.assign({}, todo, {
      completed: !areAllMarked
    }));

  case CLEAR_COMPLETED:
  console.log("CLEAR_COMPLETED")
    return state.filter(todo => todo.completed === false);

  default:
  console.log("default")
    return state;
  }
}