import Todo from "./todo.mjs";

export default class List {
  constructor(title) {
    this.title = title;
    this.listArray = [];
  }

  add(title, due) {
    this.listArray.push(new Todo(title, due));
  }

  show() {
    return this.listArray;
  }
}
