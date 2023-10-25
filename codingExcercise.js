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
