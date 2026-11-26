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

