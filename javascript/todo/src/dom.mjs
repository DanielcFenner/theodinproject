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
}
