# Event loop

An event loop coordinates scheduled work in a host environment. In a browser, it selects tasks, runs microtask checkpoints and participates in deciding when rendering can occur.

## Why it exists

A browser must respond to input, network completion and timers while running application code. These activities become ready at different times. The event loop supplies scheduling rules that allow [JavaScript](/knowledge/javascript) to react to them without requiring every application to manage an operating-system thread for each activity.

“JavaScript is single-threaded” is useful only with a scope: one agent executes one job at a time. A browser has other processes and threads, and [Web Workers](/knowledge/web-workers) execute separately.

## Tasks, microtasks and rendering

A **task** is scheduled host work, such as a timer callback or an input event dispatch. A **microtask** is work processed at defined checkpoints, including promise reactions and callbacks scheduled with `queueMicrotask`.

A simplified browser sequence is:

1. Select a runnable task from the available task sources.
2. Execute its JavaScript; nested function calls use the [call stack](/knowledge/call-stack).
3. At the appropriate checkpoint, drain queued microtasks, including microtasks added by other microtasks.
4. When a rendering opportunity is due, update the rendering.
5. Repeat.

There is not one universal FIFO “callback queue” for all browser activity. Task sources, rendering opportunities and host rules matter. Rendering is not guaranteed after every task.

```text
ready task → JavaScript calls → microtask checkpoint
                                       ↓
                            possible rendering update
                                       ↓
                                  next task
```

## Predict an execution order

```javascript
console.log("A");
setTimeout(() => console.log("timer"), 0);
queueMicrotask(() => console.log("microtask"));
Promise.resolve().then(() => console.log("promise"));
console.log("B");
```

For this isolated browser example, the output is A, B, microtask, promise, timer. Microtasks are enqueued in the order shown. A zero timer delay makes a timer eligible after its minimum waiting rules; it is not an instruction to interrupt currently executing JavaScript.

## What async does not promise

An async function begins executing synchronously until it reaches a suspension point. A large loop before that point still blocks its agent. Wrapping CPU-heavy code in a promise does not create [parallelism](/knowledge/parallelism). Move suitable computation to a worker or split it into bounded units that yield appropriately.

[Node.js](/knowledge/nodejs) also uses event-loop scheduling but has different host APIs and phases. Do not transfer every browser ordering claim to Node. Runtime versions and the kind of callback being executed can affect ordering examples.

## Debugging a frozen page

Use a performance recording to find long tasks, then inspect the call tree. A long call stack indicates synchronous work. Repeated microtasks can also starve tasks and rendering even when each callback is short.

Measure the actual user-visible delay. Distinguish slow network completion, expensive JavaScript and layout/paint work. An empty task queue is not proof that an application is responsive if its microtasks never finish.

## Exercise and assessment

Run the example in browser DevTools. Add a microtask inside the first microtask and predict its position before executing. Next compare a synchronous calculation with a worker-based version. Record interaction latency and explain the serialization overhead.

A successful explanation distinguishes task readiness, microtask checkpoints and rendering opportunities; it does not describe promises as background threads. Frontend, performance and runtime engineers use this model to diagnose interaction stalls and race-like ordering bugs.

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [HTML Living Standard — Event loops](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops) — WHATWG.
- [JavaScript execution model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model) — MDN Web Docs.
- [The Node.js Event Loop](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick) — Node.js.

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 4881–5225](/research?document=interview&start=4881&end=5225). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Call Stack, Event Loop and Execution Order

### Q3.43. What is the call stack?

The call stack is a Last-In, First-Out (LIFO) data structure used to track function execution.

```javascript
function first() {
    second();
}

function second() {
    third();
}

function third() {
    console.log("Hello");
}

first();
```

Execution:

1. `first()` enters the stack.
2. `second()` enters the stack.
3. `third()` enters the stack.
4. `third()` finishes.
5. `second()` finishes.
6. `first()` finishes.


### Execution context and the call stack

#### Q3.44. What is Execution Context in JavaScript?

Timestamp: 08:43

Very important

Interviewer: Can you explain what execution context is in JavaScript?

**What is an execution context?**

An execution context is the environment in which JavaScript code is evaluated and executed.

It keeps track of information needed during execution, such as:

- Variables.
- Function declarations.
- Scope and lexical environments.
- The value of `this`.

Think of it as the environment JavaScript creates to execute your code.

**Types of execution contexts**

There are three commonly discussed execution-context categories:

1. Global Execution Context.
2. Function Execution Context.
3. Eval Execution Context.

The first two are the important ones for most interviews.

**Global Execution Context (GEC)**

When JavaScript starts executing a script, it creates a Global Execution Context.

Example:

```javascript
var name = "Chirag";

function greet() {
    console.log("Hello");
}

console.log(name);
greet();
```

The global execution context manages the global-level execution.

**Function Execution Context (FEC)**

Whenever a function is invoked, JavaScript creates a new function execution context for that invocation.

Example:

```javascript
function add(a, b) {
    let result = a + b;

    return result;
}

let answer = add(10, 20);
```

When `add(10, 20)` executes, a function execution context is created with its own parameters and local environment.

**Two important phases**

In a simplified explanation, JavaScript execution context processing involves two phases.

#### Execution Context

1. Creation Phase

- Establishes the lexical environment.
- Creates bindings for declarations.
- Initializes `var` bindings with undefined.
- Handles function declarations.
- Sets up the `this` binding.

2. Execution Phase

- Executes statements.
- Assigns values to variables.
- Evaluates expressions.
- Invokes functions.
- Returns results.

Example:

```javascript
var a = 10;

function greet() {
    var message = "Hello";
    console.log(message);
}

greet();
```

During the creation phase, bindings are established.

During the execution phase, assignments and function calls are performed.

**What is the Call Stack?**

The call stack is a data structure used by JavaScript to keep track of active execution contexts.

Example:

```javascript
function first() {
    second();
}

function second() {
    third();
}

function third() {
    console.log("Hello");
}

first();
```

Execution:

#### Call Stack – During third()

third()

Top of stack

second()

first()

Global Execution Context

Conceptual stack representation. The currently executing function is on top.

Once `third()` finishes, its execution context is removed. Then `second()` resumes, followed by `first()`.

**What is LIFO?**

LIFO means Last In, First Out.

The last function pushed onto the call stack is the first one removed.

Example:

```text
Push: first()
Push: second()
Push: third()

Pop: third()
Pop: second()
Pop: first()
```

Interview-ready answer:

"Execution context is the environment in which JavaScript code executes. The main execution contexts are global and function execution contexts. Each context maintains information such as variables, lexical environments and the this binding. During execution-context setup, declarations and bindings are established, and then statements are executed. JavaScript uses a call stack to manage active execution contexts, following the LIFO principle."

**Follow-up: Which data structure does the JavaScript call stack use?**

Answer: Stack.

It follows LIFO – Last In, First Out.

Interviewer feedback: The candidate gave a good answer but mixed up the call stack's purpose with the execution context's purpose. Remember:

- Execution context: Environment for executing code.
- Call stack: Tracks active execution contexts.

### Q3.45. What is the event loop?

The event loop coordinates JavaScript task execution and asynchronous callbacks.

Key concepts:

- Call stack.
- Runtime APIs.
- Task queues.
- Microtask queue.
- Event loop.

Simplified order:

1. Execute synchronous JavaScript.
2. When the current task finishes, process microtasks.
3. Continue processing microtasks until the queue is empty.
4. The runtime can proceed to another task.
5. Repeat.

Browser rendering opportunities are also coordinated by the browser event loop.

### Q3.46. Difference between microtasks and macrotasks?

Microtasks are processed after the current JavaScript task completes.

Examples:

- Promise callbacks.
- `queueMicrotask()`.
- MutationObserver callbacks.

Tasks often called macrotasks include:

- `setTimeout()`.
- `setInterval()`.
- DOM event callbacks.
- Some I/O callbacks.

Example:

```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");
```

Output:

```text
A
D
C
B
```

### Q3.47. Predict this output.

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve()
    .then(() => console.log("Promise 1"))
    .then(() => console.log("Promise 2"));

queueMicrotask(() => {
    console.log("Microtask");
});

console.log("End");
```

Answer:

```text
Start
End
Promise 1
Microtask
Promise 2
Timeout
```

Why?

- `Start` and `End` are synchronous.
- `Promise 1` is queued first.
- `Microtask` is queued second.
- `Promise 2` is queued when the first Promise callback completes, behind the already queued microtask.
- The timer runs after the microtask queue is drained.


**Additional transcript exercises (representative, not recovered original code)**

The transcript did not include the code displayed for its final output question. These are practice examples, not a reconstruction of that missing question.

```javascript
console.log('A');
Promise.resolve().then(() => {
  console.log('B');
  Promise.resolve().then(() => console.log('C'));
});
console.log('D'); // A, D, B, C
```

```javascript
console.log(1);
setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => console.log(3));
}, 0);
Promise.resolve().then(() => console.log(4));
console.log(5); // 1, 5, 4, 2, 3
```

Trace the synchronous stack, drain microtasks, run the timer task, then drain newly queued microtasks.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
