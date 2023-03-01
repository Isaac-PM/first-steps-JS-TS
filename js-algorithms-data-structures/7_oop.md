# Object-oriented programming

JavaScript is a programming language based on **prototypes** rather than classes.

Objects have a characteristic called **prototype chain**. If a property or method is not found on the current object, the language will start following the property chain until it finds the desired property or method.

```
Object.prototype has own properties
└── Person has a "Name"
    └── Teacher has a "Subject"
```
If the `Name` from a `Teacher` object is wanted to be accessed, the prototype chain would be followed until it gets to `Person`.

> All objects inherit from the `Object prototype`.

## Classes

Classes in JavaScript are a **syntactic sugar** for prototypes, giving an easier syntax to follow. The keyword class creates a function that is capable of creating new instances of an object.

# Example: Person, teacher and student

## With classes

```javascript
// Creating the parent class.

class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    set name(name) {
        this._name = name;
    }

    set age(age) {
        this._age = age;
    }

    greet() {
        console.log(`Hi, my name is ${this._name}, and I am ${this._age} years old.`);
    }
}

let person = new Person("John", 30);
person.greet();

// Defining some child classes.

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this._subject = subject;
    }

    get subject() {
        return this._subject;
    }

    set subject(subject) {
        this._subject = subject;
    }

    teach() {
        console.log(`I am Mr. ${this._name}, and I teach ${this._subject}.`);
    }
}

let teacher = new Teacher("Mike", 30, "Math");
teacher.teach();
teacher.greet();

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this._grade = grade;
    }

    get grade() {
        return this._grade;
    }

    set grade(grade) {
        this._grade = grade;
    }

    study() {
        console.log(`I am ${this._name}, and I am in grade ${this._grade}.`);
    }
}

let student = new Student("Jane", 12, 7);
student.study();
student.greet();
```

## With prototypes

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.getName = function() {
      return name;
    }
    this.getAge = function() {
      return age;
    }
}

Person.prototype.greet = function () {
    console.log(`Hi, my name is ${this.name}, and I am ${this.age} years old.`);
}

function Teacher(name, age, subject) {
    Person.call(this, name, age);
    this.subject = subject;
    this.getSubject = function() {
      return subject;
    }
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.teach = function () {
    console.log(`I am Mr. ${this.name}, and I teach ${this.subject}.`);
}

function Student(name, age, grade) {
    Person.call(this, name, age);
    this.grade = grade;
    this.getGrade = function() {
      return grade;
    }
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function () {
    console.log(`I am ${this._name}, and I am in grade ${this._grade}.`);
}

let person = new Person('John', 30);
person.greet();

let teacher = new Teacher('Mike', 30, 'Math');
teacher.greet();
teacher.teach();

let student = new Student('Jane', 15, 10);
student.greet();
student.study();
```

# Know if an object is an instance of a constructor

```javascript
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House(4);
console.log(myHouse instanceof House);
```

# Prototype properties

Prototype properties can be used to set default values to properties from an object.

```javascript
function InternetDevice(ownIP) {
  this.ownIP = ownIP;
}

InternetDevice.prototype.localHost = '127.0.0.1';
```

# Override methods

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`Hi, my name is ${this.name}, and I am ${this.age} years old.`);
}

function Teacher(name, age, subject) {
    Person.call(this, name, age);
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greet = function() { // Overriding the greet method
  console.log(`Hi! I am Mr. ${this.name}, and I teach ${this.subject}.`);
}
```
# Sharing properties and methods between unrelated objects

```javascript
function Person(name) {
    this.name = name;
}

function Bycicle(owner) {
    this.name = 'bycicle'
    this.owner = owner;
}

function Horse(rider) {
    this.name = 'horse';
    this.rider = rider;
}

let rideMixin = function (obj) {
    obj.ride = function () {
        console.log(`A ${this.name} is being ridden.`);
    }
};

let bycicle = new Bycicle('John');
let horse = new Horse('John');

rideMixin(bycicle);
rideMixin(horse);

bycicle.ride();
horse.ride();
```

Both a bycicle and a horse can be ridden, but they are not related in any other way. So we can use a mixin to add the ride method to both objects.

***

# Immediately invoked function expression (IIFE)

A common pattern in JavaScript is to execute a function as soon as it is declared, that can be achieved with the following syntax:

```javascript
(function () {
  console.log("Hello world!");
})();
```

# Creating modules

Functions can be group on modules the following way: 

```javascript
let basicOperationsModule = (function () {
    return {
        add: function (a, b) {
            return a + b;
        },
        subtract: function (a, b) {
            return a - b;
        },
        multiply: function (a, b) {
            return a * b;
        },
        divide: function (a, b) {
            return a / b;
        }
    }
})();

console.log(basicOperationsModule.add(1, 2)); // 3
console.log(basicOperationsModule.subtract(1, 2)); // -1
console.log(basicOperationsModule.multiply(1, 2)); // 2
console.log(basicOperationsModule.divide(1, 2)); // 0.5
```