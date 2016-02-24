import React from 'react';
import Todo from './Todo';
import TodoEdit from './TodoEdit';

export default ({todos, onTodoClick, onTodoDoubleClick, changeTodoText}) => {
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
