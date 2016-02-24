import React from 'react';

export default ({completed, text, onClick, onDoubleClick}) => {
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
