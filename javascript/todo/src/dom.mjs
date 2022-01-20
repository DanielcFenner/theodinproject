export default class Dom {
  constructor(dom) {}

  static resetTodoInput() {
    const todoInput = document.querySelector('input[name="todo-input"]');
    todoInput.value = "";
  }

  static renderTodo(todo) {
    const todoContainer = document.querySelector(".todo-Container");
  }
}
