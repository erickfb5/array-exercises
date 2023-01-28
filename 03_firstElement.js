//03. Write a JavaScript function to get the first element of an array.
// Passing a parameter 'n' will return the first 'n' elements of the array.

const firstElement = (array, n) => array.slice(0, n);

console.log(firstElement([2023, "git", , "hub", ".com"], 4));
console.log(firstElement([20, 23, 0, 1], 2));
console.log(firstElement(["eb", [2], 0, -7], 1));
