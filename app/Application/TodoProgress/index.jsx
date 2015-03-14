import React from 'react';
import classnames from 'classnames';

require('./style.sass');

export default class TodoProgress extends React.Component {
  render() {
    const width = this.props.todos.length ? this.props.counts.complete / this.props.todos.length : 0;
    const style = { width: `${width*100}%` };

    const classNames = classnames({
      TodoProgress: true,
      'TodoProgress--completed': width === 1,
    });

    return <div className={classNames} style={style} />;
  }
}
