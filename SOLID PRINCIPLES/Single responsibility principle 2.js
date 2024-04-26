function createTodoList() {
  const items = [];

  function addItem(text) {
    items.push(text);
  }

  function removeItem(index) {
    items.splice(index, 1);
  }

  function toString() {
    return items.toString();
  }

  return {
    addItem,
    removeItem,
    toString,
  };
}

// Example usage:
const todoList = createTodoList();
todoList.addItem("Item 1");
todoList.addItem("Item 2");
console.log(todoList.toString()); // Output: Item 1,Item 2
