import { compareAsc, format } from "date-fns";
import List from "./list.mjs";
import Todo from "./todo.mjs";
import Dom from "./dom.mjs";

let groceries = new List();
groceries.add(new Todo("Broccoli", "2021", "true"));
groceries.add(new Todo("Tomatoes", "2022", "false"));

console.log(groceries.listArray);

const addTodo = document.querySelector(".add-todo");
addTodo.addEventListener("click", () => {
  Dom.resetTodoInput();
});
