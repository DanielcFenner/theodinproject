import Todo from "./todo.mjs";
import Dom from "./dom.mjs";

let todoLists = {};
getList();

// if todoLists is empty, push in some default data
if (Object.keys(todoLists).length === 0) {
  todoLists["🍏 Groceries"] = [];
  todoLists["🥱 Chores"] = [];
  todoLists["🍏 Groceries"].push(new Todo("Broccoli", new Date(), true));
  todoLists["🍏 Groceries"].push(new Todo("Beans", new Date(), true));
  todoLists["🍏 Groceries"].push(new Todo("Tortilla Wraps", new Date(), true));
  todoLists["🥱 Chores"].push(new Todo("Take Bins Out", new Date(), true));
  todoLists["🥱 Chores"].push(new Todo("Do Laundry", new Date(), true));
}

let inboxLists = {
  "🕡️ Today": [],
  "📅 This Week": [],
  "🗓️ This Month": [],
};

Dom.activeList = Object.keys(todoLists)[0];

// logic for getting and recreating items from storage
function getList() {
  for (let i = 0; i < localStorage.length; i++) {
    const list = JSON.parse(localStorage.getItem(localStorage.key(i)));
    for (let key in list) {
      for (let j = 0; j < list[key].length; j++) {
        let listItem = list[key][j];
        let recreateItem = new Todo(
          listItem["title"],
          new Date(listItem["due"])
        );
        if (todoLists[key] === undefined) {
          todoLists[key] = [];
        }
        todoLists[key].push(recreateItem);
      }
    }
  }
}

// initialize
Dom.renderList(todoLists[Dom.activeList]);
Dom.renderSidebarLists(todoLists);
Dom.addSidebarListeners(todoLists);
Dom.activeSidebarButton();
Dom.newListEventListener();
Dom.modalEventListener();
Dom.addNewListEventListener(todoLists);
Dom.renderTodoTitle();
Dom.removeListEventListener(todoLists);
Dom.addInboxEventListeners(todoLists, inboxLists);

// add todo button event listener
const addTodo = document.querySelector(".add-todo");
addTodo.addEventListener("click", (e) => {
  e.preventDefault();
  let newTodo = new Todo(Dom.todoInputValue(), Dom.todoInputDate());
  todoLists[Dom.activeList].push(newTodo);
  Dom.renderTodo(newTodo, todoLists[Dom.activeList]);
  Dom.resetTodoInput();
  Dom.localStorageSave(todoLists);
});
