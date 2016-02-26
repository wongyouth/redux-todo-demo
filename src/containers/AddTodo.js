import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

const AddTodo = ({dispatch}) => {
  let input;

  return (
    <div>
      <input ref={node => input = node} onKeyUp={(e)=> {
        if (e.keyCode === 13 && input.value != '') {
          dispatch(addTodo(input.value));
          input.value = '';
        }
      }}/>
    </div>
  )
}

export default connect()(AddTodo);
