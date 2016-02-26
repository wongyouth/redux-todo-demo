import {createSelector} from 'reselect';

let getTodos = state => state.todos;
let getVisibleFilter = state => state.visibleFilter;

const getVisibleTodos = createSelector(
  [getTodos, getVisibleFilter],
  (todos, visibleFilter) => {
    switch (visibleFilter) {
      case 'ACTIVE':
        return todos.filter(t => !t.completed);
      case 'COMPLETED':
        return todos.filter(t => t.completed);
      default:
        return todos;
    }
  }
)

export default getVisibleTodos;
