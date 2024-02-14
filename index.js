//function isPalindrome(word) {
  // Write your algorithm here
//}
//
/* 
  //Add your pseudocode here
*/
//
/*
  //Add written explanation of your solution here
*/
//
// You can run `node index.js` to view these console logs
//if (require.main === module) {
  // add your own custom tests in here
//  console.log("Expecting: true");
//  console.log("=>", isPalindrome("racecar"));
//
//  console.log("");
//
//  console.log("Expecting: false");
//  console.log("=>", isPalindrome("robot"));
//}

//module.exports = isPalindrome;

function isPalindrome(word) {
  // Convert the string to lowercase to ensure the function is case-insensitive
  const lowerCaseWord = word.toLowerCase();
  // Reverse the input string
  const reversedWord = lowerCaseWord.split('').reverse().join('');
  // Check if the reversed string is the same as the input string
  return lowerCaseWord === reversedWord;
}

// Add your pseudocode here
/*
  1. Lowercase the input string to ensure consistency.
  2. Reverse the input string.
  3. Compare the reversed string with the original string.
  4. Return true if they match, false otherwise.
*/

// Add written explanation of your solution here
/*
  The function lowercases the input string to ignore case sensitivity and splits the string into an array of characters,
  reverses that array, and then joins the characters back into a string. This reversed string is then compared with the
  original (lowercased) string. If they are identical, the function returns true, indicating the string is a palindrome.
  Otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
