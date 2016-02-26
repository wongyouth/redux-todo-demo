import {createAction} from 'redux-actions';

let nextTodoId = 1;

export const addTodo = createAction('ADD_TODO', text => ({
  id: nextTodoId++,
  text
}));

export const toggleTodo = createAction('TOGGLE_TODO', b => b);

export const editingTodo = createAction('EDITING_TODO', b => b)

export const setVisibility = createAction('SET_VISIBILITY', b => b);

export const changeTodoText = createAction('CHANGE_TODO_TEXT', (id, text) => ({id, text}));
