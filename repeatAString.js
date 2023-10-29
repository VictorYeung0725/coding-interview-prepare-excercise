// Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
  if (num <= 0) return '';
  let i = 0;
  let newStr = '';
  while (i <= num - 1) {
    newStr = newStr + str;
    i++;
  }
  return newStr;
}

console.log(repeatStringNumTimes('abc', 3));

//Completed 28/10/2023

//one more try
//29/10/2023

function repeatStringNumTimes1(str, num) {
  let repeatStr = '';
  if (typeof str === 'string') {
    let i = 0;
    while (i < num) {
      repeatStr = repeatStr + str;
      i++;
    }
  }
  return repeatStr;
}

console.log(repeatStringNumTimes1('abc', 3));
console.log(repeatStringNumTimes1('*', 9));
