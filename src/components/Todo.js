import React, {PropTypes} from 'react';

const Todo = ({completed, text, onClick, onDoubleClick}) => {
  return (
    <li
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
  );
};

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onDoubleClick: PropTypes.func.isRequired
}

export default Todo;
