import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class TodoListComponent extends Component {
  @service('todo-data') todos;
}
