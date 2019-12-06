//=========================================
// =========== CUSTOM USER INPUT ==========
//=========================================

// === input QUESTION here ===
let displayTitle = "Exercise 11: Title Case a Sentence";

// === input QUESTION here ===
let displayQuestion =
  `
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

titleCase("No need to SHOUT!") should return "No Need To Shout!"
`;

// === input CODE QUSTION here ===
let displayCode =
  `
function titleCase(str) {
  
  return str;
}

x = titleCase("No need to SHOUT!");
`;


// === input ANSWER here ===
let displayAnswer =
  ` 
function titleCase(str) {
  const words = str.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].substring(0,1).toUpperCase() + 
    words[i].substring(1);
  }
  return words.join(" ");
}

x = titleCase("No need to SHOUT!");

// solution 2  
function titleCase(str) {
  let strLower = str.toLowerCase();
  let words = strLower.split(" ");
  let titleCasedWords = [];

  for (var i = 0; i < words.length; i++) {
    titleCasedWords.push(words[i][0].toUpperCase() + words[i].slice(1));
  }
  return titleCasedWords.join(" ");
}

x = titleCase("No need to SHOUT!");
`;

// === Desired Output (answer) here ===
// for strings use  "let Expecting = 'Hello World' ";

// let expectedOutput = "let Expecting = ['three','four']"
let expectedOutput = "let Expecting = 'No Need To Shout!'";

//=========================================
//=========================================
//=========================================