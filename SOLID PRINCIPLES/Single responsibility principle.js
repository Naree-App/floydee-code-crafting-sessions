const fs = require("fs");

let items = [];

function addItem(text) {
  items.push(text);
}

function removeItem(index) {
  items.splice(index, 1);
}

function toString() {
  return items.toString();
}

function save(filename) {
  fs.writeFileSync(filename, toString());
}

function load(filename) {
  // Some implementation
}
