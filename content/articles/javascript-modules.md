# JavaScript modules and errors

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 5440–5547](/research?document=interview&start=5440&end=5547). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## JavaScript Modules and Error Handling

### Q3.56. What are JavaScript modules?

Modules divide code into reusable files.

`math.js`

```javascript
export function add(a, b) {
    return a + b;
}

export const PI = 3.14159;
```

`app.js`

```javascript
import { add, PI } from "./math.js";

console.log(add(10, 20));
console.log(PI);
```

Default export:

```javascript
// user.js
export default class User {
    constructor(name) {
        this.name = name;
    }
}
```

```javascript
// app.js
import User from "./user.js";

const user = new User("Chirag");
```

### Q3.57. Difference between CommonJS and ES Modules?

| CommonJS                           | ES Modules                                |
| ---------------------------------- | ----------------------------------------- |
| `require()`                        | `import`                                  |
| `module.exports`                   | `export`                                  |
| Traditionally used in Node.js      | Standard JavaScript module system         |
| Runtime-oriented loading           | Static module structure                   |
| Less suited to static tree shaking | Supports static analysis and tree shaking |

CommonJS:

```javascript
const express = require("express");

module.exports = {
    name: "My Application"
};
```

ES Modules:

```javascript
import express from "express";

export const name = "My Application";
```

Node.js supports both. Project configuration and file extensions determine how files are interpreted.

### Q3.58. What is error handling in JavaScript?

JavaScript uses `try`, `catch`, `finally` and `throw`.

```javascript
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Execution completed");
}
```

Common error types:

- `SyntaxError`: invalid syntax.
- `ReferenceError`: accessing an unavailable variable.
- `TypeError`: operation incompatible with the value's type.
- `RangeError`: value outside an allowed range.
- `Error`: general error object.

Engineering practice: Avoid silently swallowing errors. Log useful context, propagate errors when necessary and return appropriate API error responses.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
