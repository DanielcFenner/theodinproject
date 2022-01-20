export default class List {
  constructor(title) {
    this.title = title;
    this.listArray = [];
  }

  add(todo) {
    this.listArray.push(todo);
  }
}
