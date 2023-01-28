//01. Write a JavaScript function to check whether an `input` is an array or not.

const isArray = (input) => Array.isArray(input);

console.log(isArray("erick"));
console.log(isArray(["Brandao"]));

//weird solution
const isArray2 = (input) => toString.call(input) === "[object Array]";
console.log(isArray2("erick"));
console.log(isArray2(["Brandao"]));
