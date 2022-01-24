import { compareAsc, format, formatDistanceToNow } from "date-fns";
import Todo from "./todo.mjs";
import Dom from "./dom.mjs";

let todoLists = {
  "🍏 Groceries": [],
  "🥱 Chores": [],
};

Dom.activeList = "🍏 Groceries";

// default data
todoLists["🍏 Groceries"].push(new Todo("Broccoli", new Date(), true));
todoLists["🍏 Groceries"].push(new Todo("Beans", new Date(), true));
todoLists["🍏 Groceries"].push(new Todo("Tortilla Wraps", new Date(), true));
todoLists["🥱 Chores"].push(new Todo("Take Bins Out", new Date(), true));
todoLists["🥱 Chores"].push(new Todo("Do Laundry", new Date(), true));

Dom.renderList(todoLists[Dom.activeList]);
Dom.renderSidebarLists(todoLists);
Dom.addSidebarListeners(todoLists);
Dom.activeSidebarButton();
Dom.newListEventListener();
Dom.modalEventListener();
Dom.addNewListEventListener(todoLists);
Dom.renderTodoTitle();
Dom.removeListEventListener(todoLists);

// add todo button event listener
const addTodo = document.querySelector(".add-todo");
addTodo.addEventListener("click", (e) => {
  e.preventDefault();
  let newTodo = new Todo(Dom.todoInputValue(), Dom.todoInputDate());
  todoLists[Dom.activeList].push(newTodo);
  Dom.renderTodo(newTodo, todoLists[Dom.activeList]);
  Dom.resetTodoInput();
  console.log(todoLists);
});

let dateTest = formatDistanceToNow(todoLists["🍏 Groceries"][0]["due"]);
