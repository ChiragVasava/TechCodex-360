# Concurrency

Concurrency is the organization of multiple activities whose lifetimes overlap, allowing each to make progress without requiring simultaneous execution.

## Overlap is the key

A service can begin several network requests and handle each result when it arrives. On a single CPU execution context, work may be interleaved. This is concurrent even if only one instruction stream runs at a time. [Parallelism](/knowledge/parallelism) specifically involves simultaneous work.

Concurrency exists because many tasks spend time waiting for I/O, other services or resources. An [event loop](/knowledge/event-loop), threads and multiple processes are different mechanisms for managing it.

## Ordering still matters

Suppose a user searches for “tcp” and then “tls”. The first request may finish last. If the UI blindly accepts every response, it can display obsolete results. Associate results with a request identifier or cancel obsolete work where supported.

This is an ordering bug even without shared-memory threads.

## Design constraints

Bound the number of outstanding operations so queues cannot grow indefinitely. Define timeouts, cancellation and cleanup. Shared mutable resources need synchronization or ownership rules; asynchronous code does not remove these obligations.

## Practice

Draw a timeline for three overlapping requests, including one failure and one cancellation. Specify which results the user should see. Assessment: explain the difference between a completed task, an abandoned caller and a stopped underlying operation. Continue with [threads](/knowledge/threads), [testing](/knowledge/testing) and [observability](/knowledge/observability).

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [JavaScript execution model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model) — MDN Web Docs.
- [pthreads(7) — POSIX threads](https://man7.org/linux/man-pages/man7/pthreads.7.html) — Linux man-pages project.

