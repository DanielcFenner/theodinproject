export default class List {
  constructor() {
    this.listArray = [];
  }

  add(object) {
    this.listArray.push(object);
  }

  show() {
    return this.listArray;
  }
}
