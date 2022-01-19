import { compareAsc, format } from "date-fns";
import List from "./list.mjs";
import Dom from "./dom.mjs";

console.log("hello world");

let list = new List();
let list2 = new List();

list.add("Get brocc", "1996", true);
list2.add("Get sausage", "2012", false);
console.log(list.show());
console.log(list2.show());
