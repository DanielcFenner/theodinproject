import { compareAsc, format } from "date-fns";
import List from "./list.mjs";
import Todo from "./todo.mjs";
import Dom from "./dom.mjs";

const lists = {
  groceries: new List(),
  chores: new List(),
};
let currentList = "groceries";
lists[currentList].add(new Todo("Broccoli", "1996", true));
lists[currentList].add(new Todo("Broccoli", "1996", true));
lists[currentList].add(new Todo("Broccoli", "1996", true));

Dom.renderList(lists[currentList].return());
Dom.renderSidebarLists(lists);

// add todo button event listener
const addTodo = document.querySelector(".add-todo");
addTodo.addEventListener("click", () => {
  let newTodo = new Todo(Dom.todoInputValue(), "hello", true);
  lists[currentList].add(newTodo);
  Dom.renderTodo(newTodo);
  Dom.resetTodoInput();
});
