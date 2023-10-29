// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  const targetLenght = target.length;
  console.log(targetLenght);
  const strLength = str.length;
  console.log(strLength - 1);
  const value = str.substring(strLength - targetLenght, targetLenght);
  console.log(value);

  if (value === target) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding('Bastian', 'n'));
console.log(confirmEnding('Bastian', 'ian'));

//Unable to completed 28/10/2023

//try one more time 29/10/2023
function confirmedEndstr(str, target) {
  console.log(str);
  console.log(target);
  if (typeof str === 'string' && typeof target === 'string') {
    console.log(str);
    console.log(str.length);
    console.log(target.length);
    const newStr = str.slice(str.length - target.length);
    console.log(newStr);
    return target === newStr ? true : false;
  }
}
console.log(confirmedEndstr('Bastian', 'ian'));

function confirmEnding(str, target) {
  if (typeof str === 'string' && typeof target === 'string') {
    const ending = str.slice(-target.length);
    return ending === target;
  }
  return false;
}

console.log(confirmEnding('Bastian', 'n')); // true
console.log(confirmEnding('Congratulation', 'on')); // true
console.log(confirmEnding('Connor', 'n')); // false
console.log(
  confirmEnding(
    'Walking on water and developing software from a specification are easy if both are frozen',
    'specification'
  )
); // false
console.log(confirmEnding('He has to give me a new name', 'name')); // true
console.log(confirmEnding('Open sesame', 'same')); // true
console.log(confirmEnding('Open sesame', 'sage')); // false
console.log(confirmEnding('Open sesame', 'game')); // false
console.log(
  confirmEnding(
    'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
    'mountain'
  )
); // false
console.log(confirmEnding('Abstraction', 'action')); // true
