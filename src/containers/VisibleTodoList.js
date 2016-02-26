import TodoList from '../components/TodoList';
import {connect} from 'react-redux';
import {toggleTodo, editingTodo, changeTodoText} from '../actions';
import getVisibleTodos from '../selectors/getVisibleTodos';

let mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state)
  };
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
