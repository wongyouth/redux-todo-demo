import TodoList from '../components/TodoList';
import {connect} from 'react-redux';
import {toggleTodo} from '../actions';

let filterVisibility = (todos, filter) => {
  switch (filter) {
    case 'ACTIVE':
      return todos.filter(todo => !todo.completed);
    case 'COMPLETED':
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
}

let mapStateToProps = (state) => {
  return {
    todos: filterVisibility(state.todos, state.visibleFilter)
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
