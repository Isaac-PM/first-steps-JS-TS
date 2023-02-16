let myArray = ["John Doe", 1, true];

// Pushing a new element to the array
myArray.push("New element");
console.log(myArray); // ["John Doe", 1, true, "New element"]

// Removing the last element of the array
myArray.pop(); // The pop() method returns the removed element.
console.log(myArray); // ["John Doe", 1, true]

let john = myArray.shift(); // The shift() method returns the removed element.
console.log(myArray); // [1, true]
console.log(john); // John Doe