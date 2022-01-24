import {
  compareAsc,
  format,
  formatDistanceToNow,
  formatDistanceToNowStrict,
} from "date-fns";

export default class Dom {
  constructor(dom) {
    this.activeList = "";
  }

  static resetTodoInput() {
    const todoInput = document.querySelector('input[name="todo-input"]');
    todoInput.value = "";
  }

  static renderTodo(todo, list) {
    const todoContainer = document.querySelector(".todo-container");

    const div = document.createElement("div");
    div.classList.add("todo-element");

    const p = document.createElement("p");
    p.textContent = todo.title;
    div.appendChild(p);

    const innerDiv = document.createElement("div");
    innerDiv.classList.add("todo-right-side");

    const date = document.createElement("p");
    date.textContent = this.dateStringMaker(todo.due);
    innerDiv.appendChild(date);

    const remove = document.createElement("ion-icon");
    remove.name = "close-outline";
    remove.addEventListener("click", () => {
      console.log(list);
      // find index of item in list
      let listItemIndex = list.findIndex((listItem) => {
        if (listItem.title === p.textContent) {
          return true;
        }
      });
      todoContainer.removeChild(div);
      list.splice(listItemIndex, 1);
    });
    innerDiv.appendChild(remove);

    div.appendChild(innerDiv);

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

  static async renderList(list) {
    for (let i = 0; i < list.length; i++) {
      const element = list[i];
      this.renderTodo(element, list);
      await this.waitforme(50);
    }
  }

  static renderSidebarLists(lists) {
    const listsContainer = document.querySelector("#lists");
    const inboxContainer = document.querySelector("#inbox");
    for (const list in lists) {
      const button = document.createElement("button");
      button.textContent = list;

      if (this.isInbox(list)) {
        inboxContainer.appendChild(button);
      } else {
        listsContainer.appendChild(button);
      }
    }
  }

  static renderClearSidebarLists() {
    const listsContainer = document.querySelector("#lists").childNodes;
    for (let i = listsContainer.length - 1; i >= 0; i--) {
      const element = listsContainer[i];
      element.remove();
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
        this.renderTodoTitle();
      });
    }
  }

  static waitforme(milisec) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, milisec);
    });
  }

  static newListEventListener() {
    const newListButton = document.querySelector("#new-list");
    const modal = document.querySelector("#modal");
    newListButton.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  }

  static modalEventListener() {
    const modal = document.querySelector("#modal");
    modal.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.id === "modal") {
        modal.style.display = "none";
      }
    });
  }

  static addNewListEventListener(todoLists) {
    const addListButton = document.querySelector("#add-list-button");
    const modalInput = document.querySelector("#add-list-input");
    addListButton.addEventListener("click", (e) => {
      e.preventDefault();
      todoLists[modalInput.value] = [];
      console.log(todoLists);
      this.renderClearSidebarLists();
      this.renderSidebarLists(todoLists);
      this.addSidebarListeners(todoLists);
      modal.style.display = "none";
    });
  }

  static renderTodoTitle() {
    const todoTitle = document.querySelector(".todo-title");
    todoTitle.textContent = this.activeList;
  }

  static removeListEventListener(todoLists) {
    const removeListButton = document.querySelector("#remove-list");
    const addListButton = document.querySelector("#new-list");

    removeListButton.addEventListener("click", () => {
      delete todoLists[this.activeList];
      this.renderClearSidebarLists();
      this.renderSidebarLists(todoLists);
      this.addSidebarListeners(todoLists);
      console.log(Object.keys(todoLists)[0]);
      this.renderClearTodos();
      // if there is no list
      if (Object.keys(todoLists)[0] === undefined) {
        addListButton.click();
      } else {
        this.activeList = Object.keys(todoLists)[0];
        this.renderList(todoLists[this.activeList]);
        this.activeSidebarButton();
        this.renderTodoTitle();
      }
    });
  }

  static todoInputDate() {
    const date = document.querySelector("#date");

    if (date.value === "") {
      return new Date();
    } else {
      return new Date(date.value + "T12:00:00");
    }
  }

  static dateStringMaker(date) {
    let string = formatDistanceToNowStrict(date, {
      unit: "day",
      addSuffix: true,
    });

    if (string === "0 days ago") {
      return "Today";
    } else if (string === "in 1 day") {
      return "Tomorrow";
    } else {
      return string;
    }
  }

  static isInbox(list) {
    if (
      list === "🕡️ Today" ||
      list === "📅 This Week" ||
      list === "🗓️ This Month"
    ) {
      return true;
    } else {
      return false;
    }
  }
}
