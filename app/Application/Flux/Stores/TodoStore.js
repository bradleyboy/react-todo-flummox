import { Store } from 'flummox';

export default class TodoStore extends Store {
  constructor(flux) {
    super();

    const todoActionIds = flux.getActionIds('todos');
    this.register(todoActionIds.createTodo, this.handleNewTodo);
    this.register(todoActionIds.toggleCompleted, this.handleToggleCompleted);

    this.state = {
      todos: []
    };
  }

  handleToggleCompleted(index) {
    const todos = this.state.todos;
    todos[index].completed = !todos[index].completed;
    this.setState({todos});
  }

  handleNewTodo(todo) {
    this.setState({
      todos: this.state.todos.concat([todo])
    });
  }
}
