let nextTodoId = 0;

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: text
  };
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id: id
  };
};

export const editingTodo = (id) => {
  return {
    type: 'EDITING_TODO',
    id: id
  };
};

export const setVisibility = (filter) => {
  return {
    type: 'SET_VISIBILITY',
    filter: filter
  };
};

export const changeTodoText = (id, text) => {
  return {
    type: 'CHANGE_TODO_TEXT',
    id: id,
    text: text
  }
}
