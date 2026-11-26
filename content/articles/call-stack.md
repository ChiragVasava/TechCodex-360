# Call stack

A call stack records active function invocations so execution can return to the caller when a function finishes.

## How calls nest

When one function calls another, the runtime tracks the new invocation above its caller. Returning removes the active invocation and resumes the caller. A stack therefore follows last-in, first-out order. Actual engine representation may be optimized; the conceptual call chain remains useful.

```javascript
function square(n) { return n * n; }
function area(side) { return square(side); }
console.log(area(4));
```

While `square` is active, its callers have not finished. A debugger can show local values at each frame.

## Stack versus trace

A stack is runtime state. A **stack trace** is a report of a call chain, often captured when an error occurs. Async continuations may be presented with reconstructed async context; a displayed trace is not always a literal snapshot of one physical stack.

The [event loop](/knowledge/event-loop) starts later jobs after earlier synchronous execution yields. A timer does not sit on the stack until it expires.

## Problems and trade-offs

Recursion creates repeated calls and can exhaust a finite stack. A missing termination case is a common cause. Replacing recursion with iteration can help, but first establish whether depth is expected or caused by a logic error.

Error reports can reveal internal paths or secrets in arguments; expose a safe user message while retaining appropriately protected diagnostic context.

## Practice

Set a breakpoint in `square`, inspect each caller, and step out. Then build a recursive sum with a clear base case. Assessment: explain why the stack grows and when it shrinks. Continue with [debugging](/knowledge/debugging) and distinguish invocation state from the shared memory of [threads](/knowledge/threads).

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [JavaScript execution model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model) — MDN Web Docs.

