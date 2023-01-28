//02. Write a JavaScript function to clone an array.

const cloneArray = (array) => array.map((newArr) => newArr);
console.log(cloneArray([2, 0, 2, 3]));
console.log(cloneArray(["2", 0, 2, "3"]));

const cloneArray2 = (array) => array.slice(0);
console.log(cloneArray2(["Erick"]));
console.log(cloneArray2(["Brandao"]));

const cloneArray3 = (array) => [...array];
console.log(cloneArray3(["spread"]));
console.log(cloneArray3(["operator"]));
