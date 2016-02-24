import TodoList from '../components/TodoList';
import {connect} from 'react-redux';
import {toggleTodo, editingTodo, changeTodoText} from '../actions';

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
    },
    onTodoDoubleClick: (id) => {
      dispatch(editingTodo(id));
    },
    changeTodoText: (id, text) => {
      dispatch(changeTodoText(id, text));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
