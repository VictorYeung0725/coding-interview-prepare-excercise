// Finders Keepers
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

//test case
// findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.
// findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.

function findElement(arr, func) {
  let num = undefined

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return num = arr[i];
    }
  }
  return num;
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

// function findElement1(arr, func) {
//   let num = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (func(num)) {
//       num = arr[i];
//     } else {
//       return undefined
//     }
//   }

//   return num;
// }




The `findElement` function you provided seems to have a couple of issues. Firstly, the `num` variable is not being used effectively. It is updated within the loop, but the updated value is not being returned. Instead, the function currently returns `undefined` unconditionally.

To fix this, you need to update the `num` variable when the condition `func(arr[i])` is met, and then return the updated `num` variable at the end of the function. Additionally, you can use the `break` statement to exit the loop once the condition is met, as there is no need to continue iterating.


// function findElement(arr, func) {
//   let num = undefined;

//   for (let i = 0; i < arr.length; i++) {
//     if (func(arr[i])) {
//       num = arr[i];
//       break; // Exit the loop once condition is met
//     }
//   }

//   return num;
// }
