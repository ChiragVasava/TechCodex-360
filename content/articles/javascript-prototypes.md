# JavaScript prototypes and this

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 4313–4496](/research?document=interview&start=4313&end=4496). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Objects, Prototypes and this

### Q3.21. What are objects?

Objects store data as key-value pairs and can contain functions called methods.

```javascript
const student = {
    name: "Chirag",
    age: 20,

    introduce() {
        return `My name is ${this.name}`;
    }
};

console.log(student.name);
console.log(student.introduce());
```

Properties can be accessed using dot notation or bracket notation:

```javascript
student.name;
student["name"];
```

### Q3.22. What is the this keyword?

`this` refers to the execution context associated with a function call. Its value depends on how a normal function is called.

```javascript
const user = {
    name: "Chirag",

    greet() {
        console.log(this.name);
    }
};

user.greet(); // Chirag
```

An arrow function does not create its own `this`:

```javascript
const user = {
    name: "Chirag",

    greet: () => {
        console.log(this.name);
    }
};
```

Here, `this` is inherited from the surrounding scope, not the `user` object.

**Practical rule:** Use normal methods when you need the method's `this` to refer to its object.

### Q3.23. Difference between call(), apply() and bind()?

```javascript
function introduce(city, country) {
    console.log(`${this.name} from ${city}, ${country}`);
}

const user = {
    name: "Chirag"
};
```

**call():** Invokes immediately with separate arguments.

```javascript
introduce.call(user, "Vadodara", "India");
```

**apply():** Invokes immediately with arguments in an array.

```javascript
introduce.apply(user, ["Vadodara", "India"]);
```

**bind():** Returns a new function with bound `this`.

```javascript
const boundIntroduce = introduce.bind(
    user,
    "Vadodara",
    "India"
);

boundIntroduce();
```

### Q3.24. What is a prototype?

Every ordinary JavaScript object has an internal prototype link to another object or `null`.

If JavaScript cannot find a property on an object, it searches the prototype chain.

```javascript
const person = {
    greet() {
        return "Hello";
    }
};

const student = Object.create(person);

student.name = "Chirag";

console.log(student.name);   // Chirag
console.log(student.greet()); // Hello
```

### Q3.25. What is prototypal inheritance?

It is the mechanism through which objects inherit properties and methods from other objects.

```javascript
function Person(name) {
    this.name = name;
}

Person.prototype.introduce = function() {
    return `I am ${this.name}`;
};

function Student(name, course) {
    Person.call(this, name);
    this.course = course;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

const student = new Student("Chirag", "CSE");

console.log(student.introduce());
```

### Q3.26. What are JavaScript classes?

Classes provide a cleaner syntax over JavaScript's prototype-based inheritance system.

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        return `I am ${this.name}`;
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }

    getCourse() {
        return this.course;
    }
}

const student = new Student("Chirag", "CSE");

console.log(student.introduce());
console.log(student.getCourse());
```

Important concepts:

- `constructor()`: initializes instances.
- `extends`: inherits from another class.
- `super()`: calls the parent constructor.
- `static`: defines class-level methods.
- `#privateField`: declares a private class field.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
