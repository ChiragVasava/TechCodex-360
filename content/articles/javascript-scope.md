# JavaScript scope and hoisting

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 4022–4141](/research?document=interview&start=4022&end=4141). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Scope, Hoisting and Temporal Dead Zone

### Q3.12. What is scope?

Scope determines where variables and functions can be accessed.

Important types:

1. Global scope
2. Function scope
3. Block scope
4. Module scope

```javascript
const globalName = "Chirag";

function example() {
    const functionName = "Inside function";

    if (true) {
        let blockName = "Inside block";
        console.log(blockName);
    }

    console.log(functionName);
    console.log(globalName);
}
```

The scope chain allows inner scopes to access variables from outer scopes.

### Q3.13. What is hoisting?

Hoisting is the behaviour where JavaScript processes declarations before executing statements in their respective scopes. It does not mean source code is physically moved.

```javascript
console.log(name); // undefined

var name = "Chirag";
```

Conceptually:

```javascript
var name;

console.log(name);

name = "Chirag";
```

With `let`:

```javascript
console.log(age); // ReferenceError

let age = 20;
```


**Transcript correction: block function declarations**

The transcript reports "25undefined", but its reconstructed code evaluates `typeof f` **inside** the block containing the function declaration. That exact code produces "25function". The reported output cannot be reconciled without the original code and execution mode; it is not an answer to memorize.

```javascript
'use strict';
var abc = 25;
if (true) {
  abc = abc + typeof f;
  function f() {}
}
console.log(abc);      // 25function
console.log(typeof f); // undefined: outside the block in strict mode
```

Ask whether code runs as a module, strict script, or non-strict script before discussing the outer binding; legacy non-strict block-function behavior differs.

### Q3.14. What is the Temporal Dead Zone (TDZ)?

The TDZ is the period between entering a scope and initializing a `let` or `const` variable.

```javascript
{
    // TDZ starts

    // console.log(age); // ReferenceError

    let age = 20;

    // TDZ ends
    console.log(age);
}
```

### Q3.15. Difference between function declaration and function expression?

Function declaration:

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

Function expressions are assigned to variables:

```javascript
const greet = function() {
    console.log("Hello");
};

greet();
```

A function expression assigned to a `let` or `const` variable cannot be called before that variable is initialized.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
