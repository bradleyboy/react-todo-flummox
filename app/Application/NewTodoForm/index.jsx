import React from 'react';

require('./style.sass');

export default class NewTodoForm extends React.Component {
  constructor() {
    this._submit = this._submit.bind(this);
  }

  componentDidMount() {
    this.refs.input.getDOMNode().focus();
  }

  _submit(e) {
    e.preventDefault();

    const input = this.refs.input.getDOMNode();
    const text = input.value.trim();

    if (!text.length) {
      return;
    }

    this.props.flux.getActions('todos').createTodo(text);
    input.value = '';
  }

  render() {
    return <form className="NewTodoForm" onSubmit={this._submit}>
      <input className="NewTodoForm__input" ref="input" type="text" placeholder="Add a new todo" />
    </form>;
  }
}
