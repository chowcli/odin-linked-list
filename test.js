const LinkedList = require("./linkedList");

const myList = new LinkedList();

myList.append(1);
myList.prepend(0);
myList.append(2);
myList.append(3);
myList.append(4);
myList.prepend(20);
// myList.pop();

const listSize = myList.getSize();
const listHead = myList.getHeadNode();
const listTail = myList.getTailNode();
console.log("List size: ", listSize);
console.log("List head: ", listHead);
console.log("List tail: ", listTail, "\n");
console.log("To string method: ", "\n", myList.toString(), "\n");

console.log("At method: ", "\n", myList.at(3));
console.log(myList.at(6), "\n");
console.log("Contains method: ", "\n", myList.contains(5));
console.log(myList.contains(2), "\n");
console.log("Find method: ", "\n", myList.find(5));
console.log(myList.find(2), "\n");

myList.insertAt(10, 4);
console.log("InsertAt method: ", "\n", myList.toString());

myList.insertAt(5, 8);
console.log("InsertAt method: ", "\n", myList.toString(), "\n");

myList.removeAt(1);
console.log("RemoveAt method: ", "\n", myList.toString());
myList.removeAt(3);
console.log("RemoveAt method: ", "\n", myList.toString());
