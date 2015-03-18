import { Flux } from 'flummox';
import TodoActions from './Actions/TodoActions';
import TodoStore from './Stores/TodoStore';

export default class TodoFlux extends Flux {
  constructor() {
    super();

    this.createActions('todos', TodoActions);

    this.createStore('todos', TodoStore, this);
  }
}
