export default class List {
  constructor() {
    this.listArray = [];
  }

  add(todo) {
    this.listArray.push(todo);
  }

  return() {
    return this.listArray;
  }
}
