// Boo who
// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

function booWho(bool) {
  if (typeof bool === 'boolean') {
    return true;
  } else {
    return false;
  }
  // return bool;
}

console.log(booWho(null));
console.log(booWho(true));
console.log(booWho(1));
console.log(booWho(''));
