//=========================================
// =========== CUSTOM USER INPUT ==========
//=========================================

// === input QUESTION here ===
let displayTitle = "You are in Editor Mode";

// === input QUESTION here ===
let displayQuestion =
  `
We have defined a function, mixedNumbers, which we are passing an array as an argument. 

Modify the function by using push() and unshift() to add "one", "two" to the beginning of the array and "five", "six" to the end.

mixedNumbers(["three", "four"]) should now return
["one", "two", "three", "four", "five", "six"]
`;

// === input CODE QUSTION here ===
let displayCode =
  `
  function mixedNumbers(arr) {
 
    return arr;
  }
  
  x = mixedNumbers(["three", "four"]);
`;


// === input ANSWER here ===
let displayAnswer =
  ` 
  function mixedNumbers(arr) {

    arr.unshift("one", "two");
    arr.push("five", "six");

    return arr;
  }
  
  x = mixedNumbers(["three", "four"]);
`;

// === Desired Output (answer) here ===
// for strings use  "let Expecting = 'Hello World' ";

// let expectedOutput = "let Expecting = ['three','four']"
// let expectedOutput = "let Expecting = 6";
let expectedOutput = "let Expecting = 'one,two,three,four,five,six'";

//=========================================
//=========================================
//=========================================