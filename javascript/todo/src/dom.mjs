export default class Dom {
  constructor(dom) {
    this.activeList = "";
  }

  static resetTodoInput() {
    const todoInput = document.querySelector('input[name="todo-input"]');
    todoInput.value = "";
  }

  static renderTodo(todo, lists) {
    const todoContainer = document.querySelector(".todo-container");

    const div = document.createElement("div");
    div.classList.add("todo-element");

    const p = document.createElement("p");
    p.textContent = todo.title;
    div.appendChild(p);

    const remove = document.createElement("ion-icon");
    remove.name = "close-outline";
    remove.addEventListener("click", () => {
      // find index of item in list
      let listItemIndex = lists[this.activeList].findIndex((listItem) => {
        if (listItem.title === p.textContent) {
          return true;
        }
      });
      todoContainer.removeChild(div);

      lists[this.activeList].splice(listItemIndex, 1);
    });
    div.appendChild(remove);

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
    const listsContainer = document.querySelector("#lists");
    for (const list in lists) {
      const button = document.createElement("button");
      button.textContent = list;
      listsContainer.appendChild(button);
    }
  }

  static activeSidebarButton() {
    const listsContainer = document.querySelector("#lists");
    const sidebarButtons = listsContainer.childNodes;

    for (let i = 0; i < sidebarButtons.length; i++) {
      const sidebarButton = sidebarButtons[i];
      sidebarButton.classList.remove("active");
      if (this.activeList === sidebarButton.textContent) {
        sidebarButton.classList.add("active");
      }
    }
  }

  static addSidebarListeners(lists) {
    const listsContainer = document.querySelector("#lists");
    const sidebarButtons = listsContainer.childNodes;

    for (let i = 0; i < sidebarButtons.length; i++) {
      const sidebarButton = sidebarButtons[i];
      sidebarButton.addEventListener("click", () => {
        this.renderClearTodos();
        this.renderList(lists[sidebarButton.textContent]);
        this.activeList = sidebarButton.textContent;
        this.activeSidebarButton();
      });
    }
  }
}
