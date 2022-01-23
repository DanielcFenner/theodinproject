import { compareAsc, format } from "date-fns";
import Todo from "./todo.mjs";
import Dom from "./dom.mjs";

let todoLists = {
  "🍏 Groceries": [],
  "🥱 Chores": [],
};

Dom.activeList = "🍏 Groceries";

// default data
todoLists["🍏 Groceries"].push(new Todo("Broccoli", "1996", true));
todoLists["🍏 Groceries"].push(new Todo("Beans", "1996", true));
todoLists["🍏 Groceries"].push(new Todo("Tortilla Wraps", "1996", true));
todoLists["🥱 Chores"].push(new Todo("Take Bins Out", "1996", true));
todoLists["🥱 Chores"].push(new Todo("Do Laundry", "1996", true));

Dom.renderList(todoLists[Dom.activeList]);
Dom.renderSidebarLists(todoLists);
Dom.addSidebarListeners(todoLists);
Dom.activeSidebarButton();
Dom.newListEventListener();
Dom.modalEventListener();
Dom.addNewListEventListener(todoLists);

// add todo button event listener
const addTodo = document.querySelector(".add-todo");
addTodo.addEventListener("click", (e) => {
  e.preventDefault();
  let newTodo = new Todo(Dom.todoInputValue(), "hello", true);
  todoLists[Dom.activeList].push(newTodo);
  Dom.renderTodo(newTodo, todoLists[Dom.activeList]);
  Dom.resetTodoInput();
});
