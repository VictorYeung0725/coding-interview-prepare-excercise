const victor = { name: 'victorYeung', age: 27, job: 'web developer' };
const convertVictor = Object.entries(victor);
convertVictor;
//nested array

// Anonymous function
function anonymous() {
  console.log(this); // logs the window object
}

// Arrow function
const arrow = () => {
  console.log(this); // logs the window object
};

// Call the anonymous function
anonymous();

// Call the arrow function
arrow();

// Method
const method = {
  // Anonymous function
  anonymous() {
    console.log(this); // logs the method object
  },

  // Arrow function
  arrow: () => {
    console.log(this); // logs the window object
  },
};

// Call the anonymous function
method.anonymous();

// Call the arrow function
method.arrow();

//1. write a function that will reverse a string
function reverseString(str) {
  let reverStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    // reverStr.push(str[i]);
    reverStr = reverStr + str[i];
  }

  return reverStr;
}
console.log(reverseString('hello'));
