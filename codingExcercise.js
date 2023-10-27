//1. how can i clone a object in javascript
// NOTE concept behind the scenes
// object are reference value in memory
let obj = { a: 1, b: 2 };
obj;

// spread operator
let cloneObj = { ...obj };
cloneObj;

cloneObj.a = 3;
cloneObj;
obj;
//object assign
let assignObj = Object.assign({}, obj);
assignObj.b = 4;
assignObj;
obj;

// Q
const Person = {
  name: 'victor',
  age: 23,
};

//output: change it to array
const arrayPerson = Object.entries(Person);
arrayPerson;
const retriveKey = arrayPerson.map((person) => person[0]);
retriveKey;
const retriveValue = arrayPerson.map((person) => person[1]);
retriveValue;

const getObjectEntries = (obj) => {
  const objKey = Object.keys(obj);
  console.log(objKey);

  const newArry = objKey.map((key) => {
    const value = obj[key];
    return [key, value];
  });
  return newArry;
};

console.log(getObjectEntries(Person));
