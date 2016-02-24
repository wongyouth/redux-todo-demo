import React from 'react';

const TodoEdit = ({text, changeText}) => {
  return (
    <div>
      <input type='text' defaultValue={text}
        onKeyUp={ e => { if (e.keyCode === 13) { changeText(e.target.value); } }}
        onBlur={e => { changeText(e.target.value) }} />
    </div>
  );
};

export default TodoEdit;
