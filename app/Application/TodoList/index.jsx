import React from 'react';
import TodoListItem from './TodoListItem';

require('./style.sass');

export default class TodoList extends React.Component {
  _onToggle(index) {
    this.props.flux.getActions('todos').toggleCompleted(index);
  }

  render() {
    if (!this.props.todos.length) {
      return null;
    }

    return <ul className="TodoList">
      {this.props.todos.map((todo, index) => <TodoListItem
        key={index}
        index={index}
        text={todo.text}
        checked={todo.completed}
        onChange={this._onToggle.bind(this, index)} /> )}
    </ul>;
  }
}
