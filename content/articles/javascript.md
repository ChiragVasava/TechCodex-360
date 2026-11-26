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

