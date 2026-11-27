# JavaScript

JavaScript is a programming language whose core semantics are standardized as ECMAScript; browsers and server runtimes supply additional APIs around that language.

## Language, engine and runtime

The language defines values, expressions, objects, functions and execution rules. An engine implements these rules. A runtime combines an engine with host facilities: a browser exposes the [DOM](/knowledge/dom), while [Node.js](/knowledge/nodejs) exposes server-oriented APIs. A browser API is not automatically part of ECMAScript.

JavaScript lets developers describe behavior rather than encode every instruction for a specific processor. Functions create execution contexts represented on the [call stack](/knowledge/call-stack). Work in a single agent executes one job at a time; host facilities coordinate timers, network completion and other asynchronous work.

## A practical example

```javascript
console.log("start");
Promise.resolve().then(() => console.log("promise"));
console.log("end");
```

The synchronous messages print before the promise reaction. The reaction runs later at a microtask checkpoint; the promise does not create a new operating-system thread. See the [event loop](/knowledge/event-loop) for the scheduling mechanism.

## Boundaries and common mistakes

Long synchronous work can block browser interaction even inside an async function. Awaiting a value permits continuation scheduling; it does not move computation to another core. [Web Workers](/knowledge/web-workers) supply a separate execution context for appropriate browser computation.

Avoid executing strings received from users. Validate external values at a trust boundary and use safe document APIs when rendering them. Dynamic typing makes runtime checks particularly important.

## Learning progression

First practice variables, functions, arrays and object identity. Then trace a function call and a promise reaction by hand. Assessment: explain which behavior comes from ECMAScript and which comes from the host. Continue with [concurrency](/knowledge/concurrency) before comparing browser and server scheduling.

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [JavaScript execution model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model) — MDN Web Docs.
- [HTML Living Standard — Event loops](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops) — WHATWG.

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 3725–4021](/research?document=interview&start=3725&end=4021). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## JavaScript Fundamentals and Runtime

### Q3.1. What is JavaScript?

**Answer:**

JavaScript is a high-level, dynamically typed, prototype-based programming language primarily used to build interactive web applications.

It executes in different environments:

| Environment | Purpose                                          |
| ----------- | ------------------------------------------------ |
| Browser     | DOM manipulation, events, frontend logic         |
| Node.js     | Backend APIs, file operations, server-side logic |
| Deno        | JavaScript and TypeScript runtime                |
| Bun         | JavaScript runtime and development toolkit       |

Common uses include frontend development, backend development, browser extensions, REST APIs, automation, testing and real-time applications.

JavaScript and Java are two different programming languages.

### Q3.2. Is JavaScript interpreted or compiled?

**Answer:**

Modern JavaScript engines use a combination of interpretation and Just-In-Time (JIT) compilation.

For example, Google's V8 engine broadly follows this process:

**JavaScript source code**

**Parser → Abstract Syntax Tree (AST)**

**Bytecode generation**

**Ignition interpreter**

**TurboFan optimizes frequently executed code**

**Optimized machine code**

- An interpreter executes instructions.
- A compiler translates code into another representation or machine code.
- A JIT compiler compiles code during execution and can optimize frequently executed paths.

### Q3.3. What is the difference between JavaScript and ECMAScript?

**Answer:**

- ECMAScript is the language specification.
- JavaScript is an implementation of that specification.
- JavaScript engines implement the ECMAScript standard.

ES6 (ECMAScript 2015) introduced features such as `let`, `const`, classes, arrow functions, promises and modules.

### Q3.4. What is the difference between a JavaScript engine and runtime?

**Answer:**

A JavaScript engine executes JavaScript. A runtime provides the surrounding environment and APIs.

| Engine         | Environment/runtime |
| -------------- | ------------------- |
| V8             | Chrome              |
| V8             | Node.js             |
| SpiderMonkey   | Firefox             |
| JavaScriptCore | Safari              |

Node.js provides APIs such as filesystem access, HTTP, networking and process management.

Browsers provide APIs such as:

```javascript
document
window
localStorage
fetch()
setTimeout()
```

`document.querySelector()` does not work in a standard Node.js application because `document` is a browser API, not a core JavaScript language feature.



## Variables, Data Types and Type Conversion

### Q3.5. Difference between var, let and const?

| Feature                      | `var`       | `let` | `const` |
| ---------------------------- | ----------- | ----- | ------- |
| Scope                        | Function    | Block | Block   |
| Reassignment                 | Yes         | Yes   | No      |
| Redeclaration in same scope  | Yes         | No    | No      |
| Hoisted                      | Yes         | Yes   | Yes     |
| Access before initialization | `undefined` | Error | Error   |

```javascript
var name = "Chirag";
var name = "Rahul"; // Allowed

let age = 20;
age = 21; // Allowed

const country = "India";
// country = "USA"; // TypeError
```

**Practical rule:** Use `const` by default, `let` when reassignment is required, and avoid `var` in modern code.

Important: `const` prevents reassignment of the variable, not mutation of an object stored in that variable.

```javascript
const user = { name: "Chirag" };

user.name = "Amit"; // Allowed
// user = {};       // Not allowed
```

### Q3.6. What is block scope?

A block is code enclosed in `{}`. Variables declared with `let` and `const` are accessible only inside their block.

```javascript
if (true) {
    let age = 20;
    const name = "Chirag";
    var city = "Vadodara";
}

console.log(city); // Vadodara

// console.log(age);  // ReferenceError
// console.log(name); // ReferenceError
```

`var` is function-scoped, not block-scoped.

### Q3.7. What are JavaScript's data types?

JavaScript has seven primitive types:

1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. BigInt
7. Symbol

Objects are non-primitive values. Arrays and functions are also objects.

```javascript
let name = "Chirag";
let age = 20;
let isStudent = true;
let salary;
let value = null;
let largeNumber = 12345678901234567890n;

let student = {
    name: "Chirag",
    age: 20
};

let marks = [80, 90, 85];
```

Important `typeof` results:

```javascript
console.log(typeof "Hello");      // string
console.log(typeof 20);           // number
console.log(typeof true);         // boolean
console.log(typeof undefined);    // undefined
console.log(typeof null);         // object
console.log(typeof []);           // object
console.log(typeof {});           // object
console.log(typeof function(){}); // function
```

`typeof null === "object"` is a historical JavaScript quirk.

Use `Array.isArray()` to check arrays:

```javascript
console.log(Array.isArray([])); // true
```

### Q3.8. Difference between undefined and null?

- `undefined`: A variable has not been assigned a value, or a property is absent.
- `null`: An intentional absence of a value.

```javascript
let username;

console.log(username); // undefined

let selectedUser = null;

console.log(selectedUser); // null
```

### Q3.9. What is type coercion?

Type coercion is the conversion of a value from one type to another.

Implicit conversion:

```javascript
console.log("5" + 2);  // "52"
console.log("5" - 2);  // 3
console.log("5" * 2);  // 10
console.log(true + 1); // 2
```

Explicit conversion:

```javascript
Number("100");      // 100
String(100);        // "100"
Boolean(1);         // true
parseInt("25");     // 25
parseFloat("3.5");  // 3.5
```

For external data, explicitly convert and validate values.

```javascript
const ageInput = "20";
const age = Number(ageInput);

if (Number.isNaN(age)) {
    console.log("Invalid age");
} else {
    console.log(age + 5); // 25
}
```

### Q3.10. Difference between == and ===?

- `==` allows type coercion.
- `===` compares without type coercion.

```javascript
console.log(5 == "5");  // true
console.log(5 === "5"); // false

console.log(0 == false);  // true
console.log(0 === false); // false

console.log(null == undefined);  // true
console.log(null === undefined); // false
```

Prefer `===` in application code.

### Q3.11. What are truthy and falsy values?

Falsy values include:

```javascript
false
0
-0
0n
""
null
undefined
NaN
```

Everything else is truthy, including empty arrays and empty objects.

```javascript
if ([]) {
    console.log("Runs");
}

if ({}) {
    console.log("Also runs");
}
```


**Transcript exercise: why does an empty array enter an if block?**

```javascript
if ([]) console.log('runs'); // runs
console.log([] == true);   // false
console.log([] == false);  // true
```

An array is an object, so its Boolean conversion is true. Loose equality follows a different conversion path: true becomes 1; [] becomes an empty string and then 0, so [] == true compares 0 with 1. For [] == false, both sides become 0. Do not infer Boolean conversion from loose equality.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
