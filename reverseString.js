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

//2.Reverse each word in sentence
const sentence = 'My name is Victor';

function reverseSentence(str) {
  if (typeof str !== 'string') return;

  return str.split(' ').reverse().join(' ');
}

console.log(reverseSentence(sentence));
