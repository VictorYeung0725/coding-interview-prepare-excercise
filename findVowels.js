//. Count vowels insde a string
//NOTE easiers method
function findVowels(str) {
  if (typeof str !== 'string') return 'please pass in a string';
  let vowelsCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === 'a' ||
      str[i] === 'e' ||
      str[i] === 'i' ||
      str[i] === 'o' ||
      str[i] === 'u'
    ) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}

console.log(findVowels('addgregwo'));
console.log(findVowels(3));
console.log(findVowels(null));

//1. first think of the nich case
//2. think of the steps to execture the code
//3. think of the speed of this function

//method 2 NOTE using regular expression
function findVowels(string) {
  if (typeof string !== 'string') return;

  const vowelRegex = /[aeiou]/gi;

  let vowelsCount = 0;

  for (let char of string) {
    if (vowelRegex.test(char)) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

//method 3 NOTE store vowels inside a array and loop through them
function findVowels(string) {
  if (typeof string !== 'string') return;

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let vowelsCount = 0;

  for (let char of string.toLowerCase()) {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

//method 4 NOTE Advance level of by using reduce
