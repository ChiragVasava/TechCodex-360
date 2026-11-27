# Asynchronous JavaScript

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 4647–4880](/research?document=interview&start=4647&end=4880). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Asynchronous JavaScript

Critical for frontend and backend interviews

### Q3.34. What is synchronous programming?

Synchronous code executes sequentially. Each operation completes before the next one proceeds.

```javascript
console.log("First");
console.log("Second");
console.log("Third");
```

Output:

```text
First
Second
Third
```

### Q3.35. What is asynchronous programming?

It allows an application to start an operation and continue executing other work while waiting for that operation to complete.

Examples:

- API requests.
- Database operations.
- File system operations.
- Timers.
- Network communication.

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timer completed");
}, 2000);

console.log("End");
```

Output:

```text
Start
End
Timer completed
```

### Q3.36. Is JavaScript single-threaded?

JavaScript execution on a given main thread is generally single-threaded: one JavaScript task runs at a time on that thread.

However, runtimes support asynchronous operations through runtime facilities and event-loop mechanisms.

- Browsers support Web Workers.
- Node.js provides an event loop and libuv for asynchronous I/O.
- Node.js also supports worker threads for CPU-intensive work.

**Important:** Asynchronous does not automatically mean parallel execution.

### Q3.37. What is a Promise?

A Promise represents the eventual completion or failure of an asynchronous operation.

Three states:

- Pending
- Fulfilled
- Rejected

```javascript
const promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Data loaded successfully");
    } else {
        reject(new Error("Failed to load data"));
    }
});

promise
    .then(result => console.log(result))
    .catch(error => console.error(error.message))
    .finally(() => console.log("Operation completed"));
```

### Q3.38. What are then(), catch() and finally()?

| Method      | Purpose                                      |
| ----------- | -------------------------------------------- |
| `then()`    | Handles fulfillment                          |
| `catch()`   | Handles rejection                            |
| `finally()` | Runs after settlement, regardless of outcome |

```javascript
fetch("/api/users")
    .then(response => {
        if (!response.ok) {
            throw new Error("Request failed");
        }

        return response.json();
    })
    .then(users => console.log(users))
    .catch(error => console.error(error))
    .finally(() => console.log("Request finished"));
```

### Q3.39. What is async/await?

It is syntax that makes Promise-based asynchronous code easier to read.

An `async` function always returns a Promise. `await` pauses execution of that async function until the Promise settles; it does not block the JavaScript thread.

```javascript
async function getUsers() {
    const response = await fetch("/api/users");

    if (!response.ok) {
        throw new Error("Unable to fetch users");
    }

    const users = await response.json();

    return users;
}

getUsers()
    .then(users => console.log(users))
    .catch(error => console.error(error.message));
```

### Q3.40. How do you handle errors with async/await?

Use `try...catch...finally`.

```javascript
async function loadUsers() {
    try {
        const response = await fetch("/api/users");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const users = await response.json();

        console.log(users);
        return users;

    } catch (error) {
        console.error("Error:", error.message);
        throw error;

    } finally {
        console.log("Loading completed");
    }
}
```

Important: `fetch()` generally rejects for network-level failures, not simply because the server returns HTTP 404 or 500. Check `response.ok`.

### Q3.41. Difference between Promise.all() and Promise.allSettled()?

`Promise.all()` rejects if any input Promise rejects.

```javascript
const results = await Promise.all([
    fetch("/api/users"),
    fetch("/api/products"),
    fetch("/api/orders")
]);
```

`Promise.allSettled()` waits until every Promise settles.

```javascript
const results = await Promise.allSettled([
    fetch("/api/users"),
    fetch("/api/products"),
    fetch("/api/orders")
]);

results.forEach(result => {
    console.log(result.status);
});
```

Other methods:

| Method                 | Behaviour                   |
| ---------------------- | --------------------------- |
| `Promise.all()`        | All must fulfill            |
| `Promise.allSettled()` | Waits for all to settle     |
| `Promise.race()`       | First settled result wins   |
| `Promise.any()`        | First fulfilled result wins |

### Q3.42. What is callback hell?

Callback hell occurs when nested callbacks make asynchronous code difficult to understand and maintain.

```javascript
getUser(userId, user => {
    getOrders(user.id, orders => {
        getPayments(orders[0].id, payments => {
            console.log(payments);
        });
    });
});
```

Improve it with async/await:

```javascript
async function getPaymentDetails(userId) {
    try {
        const user = await getUser(userId);
        const orders = await getOrders(user.id);
        const payments = await getPayments(orders[0].id);

        console.log(payments);
    } catch (error) {
        console.error(error);
    }
}
```

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
