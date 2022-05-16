import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

class Todo {
  @tracked text = '';
  @tracked isCompleted = false;

  constructor(text) {
    this.text = text;
  }
}

export default class TodoDataService extends Service {
  @tracked todos = [];

  get all() {
    return this.todos;
  }

  get completed() {
    return this.todos.filter(({ isCompleted }) => isCompleted);
  }

  get incomplete() {
    return this.todos.filter(({ isCompleted }) => !isCompleted);
  }

  get todoCountIsOne() {
    return this.incomplete.length === 1;
  }

  @action
  add(text) {
    let newTodo = new Todo(text);

    this.todos.pushObject(newTodo);
  }

  @action
  clearCompleted() {
    this.todos = this.incomplete;
  }

  @action
  toggleCompletion(todo) {
    todo.isCompleted = !todo.isCompleted;
  }
}
