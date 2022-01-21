import { compareAsc, format } from "date-fns";
import Todo from "./todo.mjs";
import Dom from "./dom.mjs";

let lists = {
  "🍏 Groceries": [],
  "🥱 Chores": [],
};

Dom.activeList = "🍏 Groceries";

// default data
lists["🍏 Groceries"].push(new Todo("Broccoli", "1996", true));
lists["🍏 Groceries"].push(new Todo("Beans", "1996", true));
lists["🍏 Groceries"].push(new Todo("Tortilla Wraps", "1996", true));
lists["🥱 Chores"].push(new Todo("Take Bins Out", "1996", true));
lists["🥱 Chores"].push(new Todo("Do Laundry", "1996", true));

Dom.renderList(lists[Dom.activeList]);
Dom.renderSidebarLists(lists);
Dom.addSidebarListeners(lists);
Dom.activeSidebarButton();

// add todo button event listener
const addTodo = document.querySelector(".add-todo");
addTodo.addEventListener("click", () => {
  console.log(lists);
  let newTodo = new Todo(Dom.todoInputValue(), "hello", true);
  lists[Dom.activeList].push(newTodo);
  console.log(lists);
  Dom.renderTodo(newTodo, lists[Dom.activeList]);
  Dom.resetTodoInput();
});
