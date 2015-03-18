import { Store } from 'flummox';

export default class TodoStore extends Store {
  constructor(flux) {
    super();

    const todoActionIds = flux.getActionIds('todos');

    this.register(todoActionIds.createTodo, this.handleNewTodo);
    this.register(todoActionIds.toggleCompleted, this.handleToggleCompleted);

    this.state = {
      todos: [],
      progressPercentage: 0,
    };
  }

  _getCompleteCount() {
    return this.state.todos.filter((todo) => todo.completed).length;
  }

  handleToggleCompleted(index) {
    const todos = this.state.todos;
    todos[index].completed = !todos[index].completed;

    const progressPercentage = (this._getCompleteCount() / todos.length) * 100;

    this.setState({ todos, progressPercentage });
  }

  handleNewTodo(todo) {
    this.setState({
      todos: this.state.todos.concat([todo]),
      progressPercentage: (this._getCompleteCount() / (this.state.todos.length + 1)) * 100,
    });
  }
}
