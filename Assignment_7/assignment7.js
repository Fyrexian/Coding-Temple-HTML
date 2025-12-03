console.log("Hello from JavaScript!!!");

// Level 1
function greetUser() {
  console.log("Hello, student!");
}

function addTwoNumbers(a, b) {
  return a + b;
}

function greet(name) {
  return "Welcome, " + name;
}

// Level 2
function countToFive() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

function printRange(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

// Level 3
function printArrayElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function getPositiveNumbers(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      result.push(numbers[i]);
    }
  }
  return result;
}

function sumArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// Level 4
function isEven(num) {
  return num % 2 === 0;
}

function countEvens(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

greetUser();

greetUser();
console.log(addTwoNumbers(3, 4));
console.log(greet("Alice"));

countToFive();
printRange(3);

printArrayElements([1, 2, 3]);
console.log(getPositiveNumbers([-5, 0, 7, 2]));
console.log(sumArray([1, 2, 3, 4]));

console.log(isEven(10));
console.log(countEvens([1, 2, 3, 4, 5, 6]));
console.log(findMax([10, 4, 7, 12, 3]));

fizzBuzz(15);
