// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


//------------------------------------ Assessment Start ------------------------------------

// jest test template:
// describe ("nameOfFunction", () => {
//     it("explains what it takes and return expectation in plain English as this is for the programmer", () => {
//         expect(nameOfFunction()).toEqual(expected return)
//     })
// })

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

//------------------------------------ My Test Code ------------------------------------

// pseudo code:
// for this one I need to use the .toContain matcher to allow the return to be in any order
// Using jest test template to test a function "chaosArray"
// it "takes an array as an argument, removes the first item returns the rest of the array shuffled"
// expect(chaosArray(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
// expect(chaosArray(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
// input: since there isn't a function to test, there is no input and I expect a fail (red)
// output: should output a ReferenceError: chaosArray is not defined

describe ("chaosArray", () => {
  it("takes an array as an argument, removes the first item returns the rest of the array shuffled", () => {
    expect(chaosArray(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(chaosArray(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
  })

//output:
// FAIL  ./code-challenges.test.js
// ReferenceError: chaosArray is not defined

// b) Create the function that makes the test pass.

// pseudo code:
// what's needed? A function "chaosArray" that takes an array as an argument, removes the first item returns the rest of the array shuffled
// use .shift() method to remove the first item in the array
// use array.sort((a, b) => 0.5 - Math.random()) to shuffle the array ref: https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
// input: an array
// output: array shuffled, minus the first element
// expected result:  PASS

const chaosArray = (array) => {
  array.shift()
  return array.sort(() => Math.random() - 0.5)
}

// output:  
// PASS  ./code-challenges.test.js
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// note: I couldn't get my matcher to work by using toContain as I initially thought. I did some reaserach and found expect.arrayContaining(array) which worked ref: https://jestjs.io/docs/expect#expectarraycontainingarray


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

//------------------------------------ My Test Code ------------------------------------

// pseudo code:
// Using jest test template to test a function "totalVotes"
// it "takes as an argument an object of votes(key) and number-of-votes (value)"
// expect(totalVotes(votes1)).toEqual(11)
// expect(totalVotes(votes2)).toEqual(-31)
// input: since there isn't a function to test, there is no input and I expect a fail (red)
// output: should output a ReferenceError: totalVotes is not defined

describe ("totalVotes", () => {
  it("takes as an argument an object of votes(key) and number-of-votes (value)", () => {
    expect(totalVotes(votes1)).toEqual(11)
    expect(totalVotes(votes2)).toEqual(-31)
    })
  })

// output:
// FAIL  ./code-challenges.test.js
// ReferenceError: totalVotes is not defined

// b) Create the function that makes the test pass.

// pseudo code:
// what's needed? A function "totalVotes" that takes as an argument an object of votes(key) and number-of-votes (value)
// access values using object.key() to subtract the downVotes from the upVotes
// input: an object
// output: the result of upVotes - downVotes
// expected result:  PASS

const totalVotes = (object) => {
  return object.upVotes - object.downVotes
}

// output:
// PASS  ./code-challenges.test.js
// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

//------------------------------------ My Test Code ------------------------------------

// pseudo code:
// Using jest test template to test a function "uniqueCombinedArrays"
// it "takes two arrays as arguments. It combines them and filters out any duplicate values"
// expect(uniqueCombinedArrays(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
// input: since there isn't a function to test, there is no input and I expect a fail (red)
// output: should output a ReferenceError: uniqueCombinedArrays is not defined

describe ("uniqueCombinedArrays", () => {
  it("takes two arrays as arguments. It combines them and filters out any duplicate values", () => {
    expect(uniqueCombinedArrays(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
    })
  })

// output:
// FAIL  ./code-challenges.test.js
// ReferenceError: uniqueCombinedArrays is not defined

// b) Create the function that makes the test pass.

// pseudo code:
// what's needed? A function "uniqueCombinedArrays" that takes two arrays as arguments. It combines them and filters out any duplicate values.
// use the spread operator to merge the arrays
// create a variable to hold the new array use .filter to remove duplicates
// input: two arrays
// output: combined array with no duplicate values
// expected result:  PASS

const uniqueCombinedArrays = (array1, array2) => {
  let comboArray = [...array1, ...array2]
  comboArray = comboArray.filter((value, index) => {
    return comboArray.indexOf(value) === index
  })
  return comboArray
}

// output:
// PASS  ./code-challenges.test.js
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total