import React from 'react';

require('./style.sass');

export default class TodoProgress extends React.Component {
  render() {
    const completed = this.props.todos.filter(todo => todo.completed).length;
    const total = this.props.todos.length;

    const width = total ? completed / total : 0;
    const style = { width: `${width*100}%` };

    const classNames = ['TodoProgress'];

    if (width === 1) {
      classNames.push('TodoProgress--completed')
    }
    return <div className={classNames.join(' ')} style={style}></div>;
  }
}
