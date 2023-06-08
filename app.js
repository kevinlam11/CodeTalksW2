// Coding Problem 1

// What is a promise? What are promises used for?  What are pro/cons to using a promise?  Please code some examples of promises to show to the class. Make sure to go into detail as you explain your code to the class.

// A Promise is an object that holds the future value of an asynchronous operation
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Promises solve the problem of call back hell. 
// Pros-Readability,Error handling,Composition
// Cons-Learning curve,No cancellation support,Browser compatibility

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; 
      if (success) {
        resolve("Operation completed successfully!");
      } else {
        reject("Operation failed!");
      }
    }, 2000);
  });
  
  // Handling the Promise
  myPromise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  

// Coding Problem 2 

// What is a callback? What is callback hell? Why does callback hell occur and why should we avoid callback hell?  Please code an example of callback hell to show to the class. Make sure to go into detail as you explain your code to the class.

// A JavaScript callback is a function which is to be executed after another function has finished execution.
// Callback hell is when we nest multiple callbacks within a function. This is effective but can get confusing quick 
// In JavaScript the only way to delay a computation is to put the delayed code inside a callback function. 
// You cannot delay code that was written in traditional synchronous style so you end up with nested callbacks everywhere.
// Node js callback hell can be avoided using Promises and async / await.

// Coding Problem 3

// The “this” keyword works differently in arrow functions vs regularly declared functions.  Explain how the “this” keyword works differently in arrow functions vs normal functions.  Write some code that shows that you understand the difference between how the “this” keyword is used.  Make sure to go into detail as you explain your code to the class.
// In normal functions, this is determined dynamically based on how the function is called. It can change and is influenced by the execution context.
// In arrow functions, this is determined by the surrounding code where the arrow function is defined. It doesn't have its own this context and remains fixed.
// Normal function
function Normal() {
    console.log("Hello, " + this.name);
  }
  
  // Arrow function
  const Arrow = () => {
    console.log("Hello, " + this.name);
  };
  
  const person = {
    name: "Lebron",
    Normal: Normal,
    Arrow: Arrow,
  };
  
  person.Normal(); 
  person.Arrow();  
  



// Coding Problem 4

// Using only the filter method on the numbers array, create a function that returns a new array that only contains the numbers divisible by both 3 and 6 but NOT 9. 
const numbers = [48, 20, 18, 7, 12,9, 8,10,12, 96, 3,36,51];

const divisibleNumbers = numbers.filter(number => number % 3 === 0 && number % 6 === 0 && number % 9 !== 0);

console.log(divisibleNumbers); 

// Coding Problem 5

// What is a async/await? Why is async/await useful?  What are pro/cons to using async/await?  Please code some examples of async/await to show to the class. Make sure to go into detail as you explain your code to the class.
// async and await enables the use of ordinary try / catch blocks around asynchronous code.
// Its useful by increasing the performance and responsiveness of your application, particularly when you have long-running operations that do not require to block the execution 
// Pros-Code is easily readable,Use numerous async functions in a row,Simpler debugging process
//Cons-Error Handling,Too Sequential

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  console.log("Give me a second bruh");
  await delay(2000);
  console.log("Ok Im good now because I waited 2 seconds!");
})();
