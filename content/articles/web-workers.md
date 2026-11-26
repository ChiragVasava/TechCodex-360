# Web Workers

Web Workers allow scripts to run in a worker execution environment separate from the page's main execution environment.

## Why use a worker?

A page that calculates a large result synchronously can delay input and rendering. A worker lets suitable computation proceed separately while the page remains available. It cannot directly manipulate the page's [DOM](/knowledge/dom); it exchanges messages with the page instead.

```javascript
// worker.js
self.onmessage = ({ data }) => {
  self.postMessage(data.map(value => value * value));
};

// page.js
const worker = new Worker("./worker.js");
worker.onmessage = ({ data }) => console.log(data);
worker.postMessage([2, 3, 4]);
```

Messages normally use structured cloning. Transferable buffers can transfer ownership without copying their contents. Shared memory is a separate mechanism with additional synchronization and deployment requirements.

## Cost and failure handling

Starting workers and sending large data structures costs time and memory. A tiny calculation may be slower in a worker. Handle worker errors, bound the size of incoming messages and terminate workers when their lifetime ends.

An untrusted message is still external input. Validate message structure and define a small protocol rather than accepting arbitrary executable code.

## Learning exercise

Build a worker that summarizes an array and show a loading state while it runs. Add a request identifier so late responses cannot overwrite newer results. Measure interaction responsiveness as well as total duration. Assessment: distinguish [concurrency](/knowledge/concurrency), [parallelism](/knowledge/parallelism) and message-copying cost. Server-side JavaScript uses the related but different worker-thread API in [Node.js](/knowledge/nodejs).

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [Using Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) — MDN Web Docs.

