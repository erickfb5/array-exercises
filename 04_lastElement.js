// 04. Write a JavaScript function to get the last element of an array.
// Passing a parameter 'n' will return the last 'n' elements of the array
const lastElement = (arr, n) =>
  !n
    ? arr[arr.length - 1]
    : arr.filter((elem, index) => index > arr.length - 1 - n && elem);

console.log(lastElement([5, 4, 3, 2, 1]));
console.log(lastElement([5, 4, 3, 2, 1], 2));
console.log(lastElement([5, 4, 3, 2, 1], 3));
console.log(lastElement([5, 4, 3, 2, 1], 4));
