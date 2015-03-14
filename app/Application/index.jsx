import React from 'react';
import FluxComponent from 'flummox/component'
import TodoList from './TodoList';
import TodoProgress from './TodoProgress';
import NewTodoForm from './NewTodoForm';

require('./style.sass');

export default class Application extends React.Component {
  render() {
    return <FluxComponent
      connectToStores="todos"
      render={storeState => {
        return <div className="Application">
          <TodoProgress {...storeState} />

          <h1 className="Application__header">My Todo List</h1>

          <TodoList {...storeState} />

          <NewTodoForm {...storeState} />
        </div>;
      }} />
  }
}
