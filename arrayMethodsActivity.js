// Use concat() to join two arrays: arr1 = ["Cecile", "Lone"] and arr2 = ["Emil", "Tobias", "Linus"].
let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];

let conc = arr1.concat(arr2);

console.log(conc); // the output is: [ 'Cecile', 'Lone', 'Emil', 'Tobias', 'Linus' ]


// Use push() to add an element "Kiwi" to the array fruits = ["Banana", "Orange", "Apple", "Mango"].
let fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.push("Kiwi");

console.log(fruits); // the output is: [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]


//  Use unshift() to add two numbers 4 and 5 to the beginning of the array array1 = [1, 2, 3].
let array1 = [1, 2, 3];

array1.unshift(4, 5);

console.log(array1); // the output is: [ 4, 5, 1, 2, 3 ]


//Use pop() to remove the last element from the fruits array.
let fruitss = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

let removedElement = fruitss.pop();

console.log(fruitss); // the output is: [ 'Banana', 'Orange', 'Apple', 'Mango' ]
console.log(removedElement); // Kiwi


// Use shift() to remove the first element from the array array2 = [1, 2, 3].
let array2 = [1, 2, 3];

let removedElement = array2.shift();

console.log(array2); // [ 2, 3 ]
console.log(removedElement); // 1


//Use sort() to sort the fruits array alphabetically.
let fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

fruits.sort();

console.log(fruits); // the output is: [ 'Apple', 'Banana', 'Kiwi', 'Mango', 'Orange' ]


//Use slice() to create a new array containing a portion of the fruits array.
let fruits = ["Apple", "Banana", "Kiwi", "Mango", "Orange"];

let New = fruits.slice(0, 2);

console.log(New); // the output is: [ 'Apple', 'Banana' ]


// Use splice() to insert and remove elements in the months array.
let months = ["Jan", "Mar", "May", "Jul"];

months.splice(1, 0, "Feb"); // added next to Jan
months.splice(3, 0, "Apr"); // added next to Mar
months.splice(5, 0, "Jun"); // added next to May
months.splice(3, 1); // Mar will be removed

console.log(months) // the output is: [ 'Jan', 'Feb', 'Mar', 'May', 'Jun', 'Jul' ]
