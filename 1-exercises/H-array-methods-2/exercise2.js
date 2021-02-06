/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  const splittedString = str.split("");
  const makeItCapitalLetter = splittedString[0].toUpperCase();
  splittedString.shift();
  splittedString.unshift(makeItCapitalLetter);
  const firstLetterCapitalisedString = splittedString.join("");
  return firstLetterCapitalisedString;
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/*
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
