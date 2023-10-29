// Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
  console.log(str.length);
  let newArr = '';
  if (str.length > num) {
    return (newArr = str.slice(0, num, '...') + '...');
  } else {
    return str;
  }
}
// truncateString('A-tisket a-tasket A green and yellow basket', 8);
// truncateString("A-tisket a-tasket A green and yellow basket", 8) should return the string A-tisket....
// Passed:truncateString("Peter Piper picked a peck of pickled peppers", 11) should return the string Peter Piper....
// Passed:truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return the string A-tisket a-tasket A green and yellow basket.
// Passed:truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return the string A-tisket a-tasket A green and yellow basket.
// Passed:truncateString("A-", 1) should return the string A....
// Passed:truncateString("Absolutely Longer", 2) should return the string Ab....

//second try 29/10/2023
function truncateString1(str, num) {
  let newStr = '';
  if (num <= 0 && typeof str !== 'string') return '';

  //forgot the edge case (what if the num is less then the length of str)
  if (str.length > num) {
    newStr = str.slice(0, num) + '...';
  } else {
    return str;
  }

  return newStr;
}

console.log(truncateString1('A-tisket a-tasket A green and yellow basket', 8));
