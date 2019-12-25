//=========================================
// =========== CUSTOM USER INPUT ==========
//=========================================

// === input QUESTION here ===
let displayTitle = "Exercise 15: Muations";

// === input QUESTION here ===
let displayQuestion =
  `
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

["Alien", "line"] returns...
true
`;

// === input CODE QUSTION here ===
let displayCode =
  `
function mutation(arr) {

  return arr;
}

x = mutation(["Alien", "line"]);
`;


// === input ANSWER here ===
let displayAnswer =
  ` 
function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

x = mutation(["Alien", "line"]);
`;

// === Desired Output (answer) here ===
// for strings use  "let Expecting = 'Hello World' ";

// let expectedOutput = "let Expecting = ['three','four']"
let expectedOutput = "let Expecting = true";

//=========================================
//=========================================
//=========================================