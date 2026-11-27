# Closures

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 4142–4312](/research?document=interview&start=4142&end=4312). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Functions, Callbacks and Closures

### Q3.16. What are JavaScript functions?

Functions are reusable blocks of code that perform specific tasks.

```javascript
function calculateTotal(price, quantity) {
    return price * quantity;
}

const total = calculateTotal(100, 3);

console.log(total); // 300
```

JavaScript functions are first-class citizens. They can be:

- Stored in variables.
- Passed as arguments.
- Returned from other functions.
- Stored in objects and arrays.

### Q3.17. What are arrow functions?

```javascript
function add(a, b) {
    return a + b;
}

const addArrow = (a, b) => {
    return a + b;
};

const multiply = (a, b) => a * b;
```

| Feature                | Normal function | Arrow function |
| ---------------------- | --------------- | -------------- |
| Own `this`             | Yes             | No             |
| Own `arguments`        | Yes             | No             |
| Constructor with `new` | Possible        | Not possible   |
| Own prototype property | Yes             | No             |
| Implicit return        | No              | Possible       |

Arrow functions inherit `this` from their surrounding lexical scope.

### Q3.18. What is a callback function?

A callback is a function passed to another function as an argument and invoked by that function.

```javascript
function processUser(name, callback) {
    console.log("Processing:", name);
    callback();
}

function completed() {
    console.log("Completed");
}

processUser("Chirag", completed);
```

Output:

```text
Processing: Chirag
Completed
```

### Q3.19. What is a higher-order function?

A higher-order function either accepts another function as an argument or returns a function.

Examples include `map()`, `filter()`, `reduce()` and `forEach()`.

```javascript
function calculate(operation, a, b) {
    return operation(a, b);
}

function add(a, b) {
    return a + b;
}

console.log(calculate(add, 10, 20)); // 30
```


**Transcript exercise: infinite currying**

```javascript
function sum(a) {
  return function next(b) {
    if (b === undefined) return a;
    return sum(a + b);
  };
}
console.log(sum(2)(3)(4)()); // 9
console.log(sum(2)(0)(3)()); // 5
```

An empty call terminates the chain. Testing `if (!b)` would incorrectly stop at zero. This API treats an explicit undefined argument as termination too; explain that contract.

### Q3.20. What is a closure?

Very important interview topic

A closure occurs when a function retains access to variables from its outer lexical scope, even after the outer function has finished executing.

```javascript
function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

**Execution explanation:**

1. `createCounter()` creates `count`.
2. It returns the inner function.
3. The outer function finishes.
4. The inner function retains access to `count`.
5. Each call updates the retained variable.

Real-world applications:

- Private state.
- Function factories.
- Event handlers.
- Debouncing and throttling.
- Maintaining state without global variables.

Example of private state:

```javascript
function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            balance += amount;
        },

        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(1000);

account.deposit(500);

console.log(account.getBalance()); // 1500
console.log(account.balance);      // undefined
```

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
