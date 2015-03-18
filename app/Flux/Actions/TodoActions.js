import { Actions } from 'flummox';

export default class TodoActions extends Actions {
  createTodo(text) {
    return {
      text,
      completed: false,
    };
  }

  toggleCompleted(index) {
    return index;
  }
}
