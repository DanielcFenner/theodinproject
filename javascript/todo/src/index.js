import { compareAsc, format } from "date-fns";
import Todo from "./todo.mjs";
import List from "./list.mjs";

console.log("hello world");

let list = new List();
let hi = new Todo("hi", "1997");
list.add(hi);
console.log(list.show());
