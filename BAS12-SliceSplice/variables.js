//=========================================
// =========== CUSTOM USER INPUT ==========
//=========================================

// === input QUESTION here ===
let displayTitle = "Exercise 12: Slice and Splice";

// === input QUESTION here ===
let displayQuestion =
  `
You are given two arrays and an index.

Use the array methods slice and splice to copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

Result...
[4,1,2,3,5,6]
`;

// === input CODE QUSTION here ===
let displayCode =
  `
function frankenSplice(arr1, arr2, n) {
  let localArr = arr2.slice();

  return localArr;
}

x = frankenSplice([1, 2, 3], [4, 5, 6], 1);
`;


// === input ANSWER here ===
let displayAnswer =
  ` 
function frankenSplice(arr1, arr2, n) {
  let localArr = arr2.slice();

  localArr.splice(n, 0, ...arr1);

  return localArr;
}

x = frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Solution 2
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}
`;

// === Desired Output (answer) here ===
// for strings use  "let Expecting = 'Hello World' ";

// let expectedOutput = "let Expecting = ['three','four']"
let expectedOutput = "let Expecting = '4,1,2,3,5,6'";

//=========================================
//=========================================
//=========================================