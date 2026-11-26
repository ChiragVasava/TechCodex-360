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

