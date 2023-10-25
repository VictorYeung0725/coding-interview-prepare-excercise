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
