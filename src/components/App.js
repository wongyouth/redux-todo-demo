import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from '../components/Footer';

const App = () => {
  return (
    <div className='app'>
      <AddTodo />
      <VisibleTodoList />
      <Footer></Footer>
    </div>
  )
};

export default App;
