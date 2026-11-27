# Node.js

Node.js is a JavaScript runtime that combines a JavaScript engine with server and operating-system APIs, including asynchronous I/O and worker-thread facilities.

## Runtime rather than language

[JavaScript](/knowledge/javascript) is the language. Node.js supplies APIs for networking, files, processes and other host activities. Its event loop and libuv integration coordinate many asynchronous operations; this does not mean every operation runs on the same thread or that every asynchronous API uses a background thread.

A server can wait for many I/O operations while its JavaScript agent processes callbacks. CPU-heavy JavaScript still consumes that agent's execution time.

## Example: a small HTTP server

```javascript
import { createServer } from "node:http";

createServer((_request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello from Node.js\n");
}).listen(3000, "127.0.0.1");
```

The server exposes [HTTP](/knowledge/http) behavior. It is not a production authentication or routing layer.

## Choosing an execution mechanism

Use asynchronous I/O APIs for waiting on supported I/O. Consider worker threads for sustained CPU work, with bounded worker counts and message sizes. Separate [processes](/knowledge/processes) provide a stronger memory boundary but have different communication costs.

A blocked event loop can delay unrelated requests. Timeouts, input limits and cancellation are therefore reliability and security controls, not just performance tuning.

## Practice

Compare a slow asynchronous file operation with a deliberately CPU-heavy calculation while making another request. Observe response delays. Assessment: explain why async I/O helps the first case while merely labeling the calculation async does not help the second. Continue with the [event loop](/knowledge/event-loop), [testing](/knowledge/testing) and [observability](/knowledge/observability).

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [The Node.js Event Loop](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick) — Node.js.
- [Worker threads](https://nodejs.org/api/worker_threads.html) — Node.js.

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 20304–20538](/research?document=interview&start=20304&end=20538). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Introduction to Node.js

**Q11.5. What is Node.js?**

Answer: Node.js is an open-source JavaScript runtime that allows JavaScript to execute outside the browser. It is commonly used for REST APIs, backend applications, real-time services, command-line tools, automation, and microservices.

**Q11.6. Why was Node.js introduced?**

Answer: Node.js made it possible to use JavaScript for server-side development, rather than limiting it primarily to browser applications. Its asynchronous I/O model and npm ecosystem make it useful for network-heavy applications. It is not automatically ideal for every CPU-intensive workload.

**Q11.7. What is the difference between JavaScript and Node.js?**

Answer: JavaScript is a programming language; Node.js is a runtime that executes JavaScript outside the browser. Node.js provides server-side APIs such as filesystem, networking, and process management APIs that are not part of the core JavaScript language.

**Q11.8. What is V8?**

Answer: V8 is Google's open-source JavaScript engine, used by Chrome and Node.js. It parses, compiles, executes, and optimizes JavaScript, and manages memory and garbage collection.

**Q11.9. Explain Node.js architecture.**

Answer: Node.js combines V8 with runtime APIs, libuv, the event loop, and operating-system facilities. V8 executes JavaScript, Node APIs provide capabilities such as filesystem access, and libuv supports asynchronous I/O and event-loop functionality.

| Component        | Responsibility                                                |
| ---------------- | ------------------------------------------------------------- |
| V8               | Executes JavaScript                                           |
| Node.js APIs     | Filesystem, networking, processes                             |
| libuv            | Event loop and asynchronous I/O support                       |
| Event loop       | Coordinates scheduled callbacks                               |
| Thread pool      | Handles certain operations outside the main JavaScript thread |
| Operating system | Provides networking and system facilities                     |

**Q11.10. What is libuv?**

Answer: libuv is a cross-platform library used by Node.js for event-loop functionality and asynchronous I/O. It provides facilities such as timers, filesystem operations, networking support, and a worker thread pool. Not every asynchronous operation uses the thread pool; network I/O generally relies on operating-system facilities.

**Q11.11. Is Node.js single-threaded?**

Answer: Node.js executes JavaScript on its main event-loop thread by default, but it is not entirely single-threaded. It can also use libuv's worker pool, Worker Threads, operating-system asynchronous I/O, and multiple processes.

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 1000);

console.log("End");
```

Output:

```text
Start
End
Timer
```

**Q11.12. What is the difference between concurrency and parallelism?**

Answer: Concurrency means multiple tasks make progress during overlapping periods. Parallelism means multiple tasks execute simultaneously on separate execution resources. One event loop managing multiple network requests is concurrency; multiple Worker Threads executing CPU-heavy tasks can provide parallelism.



## Node.js Event Loop

**Q11.13. What is the Node.js event loop?**

Answer: The event loop coordinates the execution of JavaScript callbacks and asynchronous operations. It allows Node.js to handle many I/O operations without blocking the main JavaScript thread while waiting for them.

The major phases are:

1. Timers
2. Pending callbacks
3. Idle and prepare
4. Poll
5. Check
6. Close callbacks

Promise microtasks and `process.nextTick()` have special scheduling behaviour around these phases.

**Q11.14. Difference between **`setTimeout()`** and **`setImmediate()`**?**

Answer: `setTimeout()` schedules a callback after a minimum delay. `setImmediate()` schedules a callback for the event loop's check phase. At the top level, their relative output order can vary; inside an I/O callback, `setImmediate()` normally runs first.

**Q11.15. What is **`process.nextTick()`**?**

Answer: It schedules a callback to run after the current operation completes, before the event loop continues to its next phase.

```javascript
console.log("Start");

process.nextTick(() => console.log("Next Tick"));

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

Typical output:

```text
Start
End
Next Tick
Promise
```

Repeatedly scheduling `process.nextTick()` can starve the event loop and delay I/O.

**Q11.16. Difference between blocking and non-blocking I/O?**

Answer: Blocking operations prevent the current JavaScript thread from continuing until the operation finishes. Non-blocking operations allow JavaScript to continue while the runtime handles the operation asynchronously.

```javascript
// Blocking
const data = fs.readFileSync("data.txt", "utf8");

// Non-blocking
fs.readFile("data.txt", "utf8", (error, data) => {
  if (error) return console.error(error);
  console.log(data);
});

console.log("Finished scheduling read");
```

Avoid synchronous filesystem operations in production request-handling paths when they could block other requests.



## Important Node.js Built-in Modules

**Q11.17. What is the **`fs`** module?**

Answer: The filesystem module provides operations for reading, writing, appending, and deleting files.

```javascript
import fs from "node:fs/promises";

const data = await fs.readFile("data.txt", "utf8");
await fs.writeFile("data.txt", "Hello Node.js", "utf8");
await fs.appendFile("data.txt", "\nNew content");
await fs.unlink("data.txt");
```

**Q11.18. What is the **`path`** module?**

Answer: It provides utilities for handling filesystem paths. `path.join()` combines path segments, while `path.resolve()` produces an absolute path.

```javascript
import path from "node:path";

path.join("src", "controllers", "user.js");
path.basename("/app/src/server.js");
path.dirname("/app/src/server.js");
path.extname("/app/src/server.js");
```

**Q11.19. What is the **`os`** module?**

Answer: It provides operating-system information such as platform, architecture, CPU count, and memory.

```javascript
import os from "node:os";

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus().length);
console.log(os.totalmem());
console.log(os.freemem());
```

**Q11.20. What is the **`crypto`** module?**

Answer: It provides cryptographic functionality such as generating random values, UUIDs, and hashes.

```javascript
import { randomBytes, randomUUID } from "node:crypto";

console.log(randomBytes(32).toString("hex"));
console.log(randomUUID());
```

Important security distinction: Do not store passwords using a fast general-purpose hash such as SHA-256 alone. Use a password-hashing algorithm such as Argon2id or bcrypt with appropriate parameters.

**Q11.21. What is the **`process`** object?**

Answer: It provides information and control over the current Node.js process. It exposes values such as `process.version`, `process.pid`, `process.cwd()`, `process.argv`, and `process.env`.



## HTTP and Building a Basic Node.js Server

**Q11.22. What are HTTP methods?**

| Method  | Typical purpose                          |
| ------- | ---------------------------------------- |
| GET     | Retrieve data                            |
| POST    | Create a resource or trigger processing  |
| PUT     | Replace a resource                       |
| PATCH   | Partially update a resource              |
| DELETE  | Delete a resource                        |
| HEAD    | Retrieve headers without a response body |
| OPTIONS | Describe communication options           |

GET should be safe. PUT and DELETE are idempotent by HTTP semantics; POST and PATCH are not inherently idempotent.

**Q11.23. How do you create a basic HTTP server using Node.js?**

Answer: Node.js provides the built-in `http` module.

```javascript
import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from Node.js");
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

Run it using `node server.js` and visit `http://localhost:3000`.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
