import { Store } from 'flummox';

export default class TodoStore extends Store {
  constructor(flux) {
    super();

    const todoActionIds = flux.getActionIds('todos');
    
    this.register(todoActionIds.createTodo, this.handleNewTodo);
    this.register(todoActionIds.toggleCompleted, this.handleToggleCompleted);

    this.state = {
      todos: [],
      counts: {
        complete: 0,
        incomplete: 0,
      },
    };
  }

  handleToggleCompleted(index) {
    const todos = this.state.todos;
    todos[index].completed = !todos[index].completed;

    const incomplete = todos.filter((todo) => !todo.completed).length;
    const complete = todos.length - incomplete;
    const counts = { incomplete, complete };

    this.setState({ todos, counts });
  }

  handleNewTodo(todo) {
    this.setState({
      todos: this.state.todos.concat([todo]),
      counts: {
        incomplete: this.state.counts.incomplete + 1,
        complete: this.state.counts.complete,
      },
    });
  }
}
