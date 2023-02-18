# Basic JavaScript module

---

# Setting up the environment

## Installation of Visual Studio Code

This tutorial can be found [here](https://github.com/Isaac-PM/tutorial-flask), at the 'Eligiendo un editor de código' section.

## Installation of Node.js

Download and install **Node.js** from [nodejs.org](https://nodejs.org/en/download/)

![](images/node_js_1.png)

![](images/node_js_2.png)

![](images/node_js_3.png)

![](images/node_js_4.png)

![](images/node_js_5.png)

![](images/node_js_6.png)

![](images/node_js_7.png)

![](images/node_js_8.png)

The last step is to press the `Enter` key, at the pop-up prompt, to accept the installation of additional tools.

## Extensions reccomended for Visual Studio Code

By using the [extension profiles](https://marketplace.visualstudio.com/items?itemName=evald24.vscode-extension-profiles) tool, the file `extensions.json` can be used to install the extensions that are needed.

Or you can install them manually:

- astro-build.astro-vscode
- formulahendry.code-runner
- PolymerMallard.css-alphabetize
- GitHub.copilot
- GitHub.vscode-pull-request-github
- oderwat.indent-rainbow
- VisualStudioExptTeam.vscodeintellicode
- VisualStudioExptTeam.intellicode-api-usage-examples
- xabikos.JavaScriptSnippets
- ms-vscode.vscode-typescript-next
- ms-vscode.live-server
- ritwickdey.LiveServer
- esbenp.prettier-vscode
- bradlc.vscode-tailwindcss

# Basics

## Recomendations

- Use camelCase for variables and functions.
- Single quotes for strings are preferred.
- Use `const` for variables that are not going to be reassigned.
- Use `let` for variables that are going to be reassigned; avoid using `var`.
- `===` is the preferred equality operator, and `!==` is the preferred inequality operator.

For more information, see [JavaScript Coding Conventions](https://www.w3schools.com/js/js_conventions.asp) or [JavaScript Standard Style](https://standardjs.com/rules.html).

## Print to the console

```javascript
console.log('Hello World!');
```

## Variables

Variables are declared using the `let` keyword, the default naming convention is camelCase.

```javascript
let myName = 'John Doe';

// Example of arithmetic operations
let alpha = 10;
let beta = 5;

// Addition
let gamma = alpha + beta;
console.log(gamma); // 15

// Subtraction
let delta = alpha - beta;
console.log(delta); // 5

// Multiplication
let epsilon = alpha * beta;
console.log(epsilon); // 50

// Division
let zeta = alpha / beta;
console.log(zeta); // 2

// Modulus (remainder)
let eta = alpha % beta;
console.log(eta); // 0

// Compound assignment
let theta = 0;

// Increment and decrement
theta++; // theta = theta + 1
console.log(theta); // 1

theta--; // theta = theta - 1
console.log(theta); // 0

// Compound assignment with augmented multiplication and division

(theta = 5), (theta *= 2); // theta = theta * 2
console.log(theta); // 10

theta /= 2; // theta = theta / 2
console.log(theta); // 5
```

## Constants

Constants are declared using the `const` keyword.

```javascript
const MY_NAME = 'John Doe';
```

## Arrays

Arrays are declared using the `[]` brackets.

```javascript
let myArray = ['John Doe', 1, true];

// Pushing a new element to the array (at the end)
myArray.push('New element');
console.log(myArray); // ['John Doe', 1, true, 'New element']

// Removing the last element of the array
myArray.pop(); // The pop() method returns the removed element.
console.log(myArray); // ['John Doe', 1, true]

// Pushing a new element to the array (at the beginning)
myArray.unshift('New element');
console.log(myArray); // ['New element', 'John Doe', 1, true]

// Removing the first element of the array
myArray.shift(); // The shift() method returns the removed element.
console.log(myArray); // ['John Doe', 1, true]
```

They can include any type of data, including other arrays.

## Functions

Functions are declared using the `function` keyword.

```javascript
function myFunction() {
    console.log('Hello World!');
}

function functionWithArgs(arg1, arg2) {
    return arg1 + arg2;
}

function testingComparisonOperators(value) {
    // Not strict equality and inequality operators
    if (value == 10) {
        console.log('The value is 10 (not strict))');
    }
    if (value != 10) {
        console.log('The value is not 10 (not strict))');
    }
    /*
    This operators are used to compare two values (numbers, strings, or booleans), but they does not perform type conversions.
    So if value = '10' (string),'10' == 10 (number) will return true.
    */

    // Strict equality and inequality operators
    if (value === 10) {
        console.log('The value is 10 (strict)');
    }
    if (value !== 10) {
        console.log('The value is not 10 (strict)');
    }
    /*
    This operators perform type conversions.
    So if value = '10' (string),'10' === 10 (number) will return false.
    */
}
```
## Objects

Objects are declared using the `{}` brackets, where properties can be listed.

```javascript
const cat = {
    name: 'Whiskers',
    legs: 4,
    tails: 1,
    enemies: ['Water', 'Dogs']
    'favorite food': 'Tuna' // Properties with a space in their name must be enclosed in quotes.
};

const catName = cat.name;
const favoriteFood = cat['favorite food']; // Bracket notation can be used to access properties with a space in their name.

cat.[name] = 'Fluffy'; // Updating the value of a property.

cat.[bark] = 'Meow'; // Adding a new property.

delete cat.tails; // Deleting a property.

cat.hasOwnProperty('tails')? console.log('tails property exists') : console.log('tails property does not exist'); // Checking if a property exists.
```

### Accessing to object properties

#### Bracket notation

```javascript
const person = {
    name: 'John',
    age: 30,
};

const personNameA = person.name;
console.log(personNameA); // John

const personNameB = person['name'];
console.log(personNameB); // John

const personNameC = person[name]; // ReferenceError: name is not defined.
console.log(personNameC);

let nameVar = 'name';
const personNameD = person[nameVar];
console.log(personNameD); // John
```

#### Dot notation

```javascript
const person = {
    name: 'John',
    age: 30,
};

const personNameA = person.name;
console.log(personNameA); // John
```

## Random whole numbers

```javascript
function randomIntFromInterval(min, max) { // Both min and max are included.
  return Math.floor(Math.random() * (max - min + 1) + min); // Math.floor() rounds a number DOWNWARDS to the nearest integer.
}
```