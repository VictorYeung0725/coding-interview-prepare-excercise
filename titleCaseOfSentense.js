// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

/*
titleCase("I'm a little tea pot") should return a string.
Waiting:titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
Waiting:titleCase("sHoRt AnD sToUt") should return the string Short And Stout.
Waiting:titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.
*/

function titleCase(str) {
  let newArr = [];
  if (typeof str !== 'string') '';
  const array = str.split(' ');

  for (let i = 0; i < array.length; i++) {
    newArr[i] = array[i][0].toUpperCase() + array[i].slice(1).toLowerCase();
    console.log(newArr);
  }
  console.log(newArr);

  return newArr.join(' ');
}

titleCase("I'm a little tea pot");

// function titleCase(str) {
//   const newTitle = str.split(" ");
//   const updatedTitle = [];
//   for (let st in newTitle) {
//     updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
//   }
//   return updatedTitle.join(" ");
// }
