//NOTE Type conversion and coercion
const inputYear = '1996';
console.log(Number(inputYear) + 18);
console.log(inputYear + 18);

console.log(Number('Victor'));
console.log(typeof NaN);

console.log(String('23'));
//NOTEJS can only convert Number String or boolean

//NOTE Type coercison came up when js have to deal with two types of operations
console.log('i am ' + 23 + ' year old');
//Minus will triget the type coercisom
console.log('23' - '10' - 3);
console.log('23' * '10');
console.log('23' / '10');

//NOTE 5 falsy value, null, Nan, undefiend, 0 , ''
console.log(Boolean(''));
console.log(Boolean('victor'));
console.log(Boolean(0));
console.log(Boolean({}));
console.log(Boolean(null));
console.log(Boolean(undefined));

const money = 12;
if (money) {
  console.log('Dont spent it all');
} else {
  console.log('You should get a job');
}

//NOTE Equality == vs ===
const age = '18';
if (age === 18) console.log('you just become a dult (strick)');
if (age == 18) console.log('you just become a dult (loose)');

//Excercise

/* Write your code below. Good luck! 🙂 */
//Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
const dolphin = [96, 108, 89];
const koalas = [88, 91, 110];

function checkHighestScore(a, b) {
  let higest;
  let firstPlayer = a.reduce((acc, current) => current + acc, 0) / a.length;
  let secondPlayer = b.reduce((acc, current) => current + acc, 0) / b.length;

  if (firstPlayer > secondPlayer) higest = firstPlayer;
  if (secondPlayer > firstPlayer) higest = secondPlayer;

  return higest;
}
console.log(checkHighestScore(dolphin, koalas));

//NOTE expression vs statement
//expression
3 + 4;
true;
1991;

//statement
if (23 > 10) return 'do something';

//NOTE LOOP
for (let rep = 1; rep <= 10; rep++) {
  console.log(`victor have done ${rep}`);
}

//for-loop array
//the while loop
