import React, {PropTypes} from 'react';
import Todo from './Todo';
import TodoEdit from './TodoEdit';

const TodoList = ({todos, onTodoClick, onTodoDoubleClick, changeTodoText}) => {
  return (
    <ul>
      {
        todos.map(todo => {
          return (
            todo.editing ?
              <TodoEdit key={todo.id} {...todo} changeText={ (text) => changeTodoText(todo.id, text)} /> :
              <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
                onDoubleClick={() => onTodoDoubleClick(todo.id)}
              />
          );
        })
      }
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    editing: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onTodoDoubleClick: PropTypes.func.isRequired,
  changeTodoText: PropTypes.func.isRequired
}

export default TodoList;
