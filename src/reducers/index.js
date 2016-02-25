import {combineReducers} from 'redux';

let todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
        editing: false
      };

    case 'TOGGLE_TODO':
      if (state.id != action.id) {
        return state;
      }

      return Object.assign({}, state, {completed: !state.completed});

    case 'EDITING_TODO':
      if (state.id != action.id) {
        return state;
      }

      return Object.assign({}, state, {editing: true});

    case 'CHANGE_TODO_TEXT':
      if (state.id != action.id) {
        return state;
      }

      return Object.assign({}, state, {text: action.text, editing: false});

    default:
      return state;
  }
}

let todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];

    case 'TOGGLE_TODO':
    case 'EDITING_TODO':
    case 'CHANGE_TODO_TEXT':
      return state.map(t => {
        return todo(t, action);
      });

    default:
      return state;
  }
}

let visibleFilter = (state = 'ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY':
      return action.filter;
    default:
      return state;
  }
}

export default combineReducers({
  todos,
  visibleFilter
});
