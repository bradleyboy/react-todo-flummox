import React from 'react';
import classnames from 'classnames';

export default class TodoListItem extends React.Component {
  render() {
    const id = `todolist-item-${this.props.index}`;
    const classNames = classnames({
      TodoListItem: true,
      'TodoListItem--checked': this.props.checked,
    });

    return <li className={classNames}>
      <input
        id={id}
        type="checkbox"
        onChange={this.props.onChange}
        checked={this.props.checked} />

      <label htmlFor={id}>
        {this.props.text}
      </label>
    </li>;
  }
}
