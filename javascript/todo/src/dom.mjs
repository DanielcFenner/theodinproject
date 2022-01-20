export default class Dom {
  constructor(dom) {}

  static resetTodoInput() {
    const todoInput = document.querySelector('input[name="todo-input"]');
    todoInput.value = "";
  }

  static renderTodo(todo) {
    const todoContainer = document.querySelector(".todo-container");
    const div = document.createElement("div");
    div.classList.add("todo-element");
    const p = document.createElement("p");
    p.textContent = todo.title;
    div.appendChild(p);
    todoContainer.appendChild(div);
  }

  static todoInputValue() {
    const todoInput = document.querySelector('input[name="todo-input"]');
    return todoInput.value;
  }

  static renderClearTodos() {
    const todos = document.querySelector(".todo-container").childNodes;
    for (let i = todos.length - 1; i >= 0; i--) {
      const element = todos[i];
      element.remove();
    }
  }

  static renderList(list) {
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      this.renderTodo(element);
    }
  }

  static renderSidebarLists(lists) {
    for (let i = 0; i < lists.length; i++) {
      const element = lists[i];
      console.log(element);
    }
  }
}
