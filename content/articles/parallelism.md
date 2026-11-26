# Parallelism

Parallelism means performing multiple pieces of work at the same time using multiple execution resources.

## When it helps

Independent chunks of a computation can run on separate cores, workers or machines. A large image-processing task may split the image into regions, process regions concurrently on available resources, then combine the output.

[Concurrency](/knowledge/concurrency) describes overlapping activities; parallelism describes simultaneous execution. A concurrent program can run on one core, and a parallel program still needs coordination.

## Limits to speedup

Splitting and combining work costs time. Serial portions, memory bandwidth, communication and synchronization limit the gain. Doubling the worker count does not imply halving elapsed time.

A worker is a software abstraction; actual simultaneous execution depends on hardware availability and scheduling. Excessive workers can worsen performance through contention.

## Correctness and security

Parallel tasks must agree on ownership of input and output. Unsynchronized writes can corrupt results. Cancellation should stop unnecessary work and release resources rather than leave an unbounded backlog.

## Exercise

Choose a pure calculation that can be partitioned. Compare one worker with two and four, recording both duration and memory use. Explain why small inputs may become slower. Assessment: identify the serial fraction and data-transfer overhead. Browser applications can explore this with [Web Workers](/knowledge/web-workers); server JavaScript can use the worker-thread facilities in [Node.js](/knowledge/nodejs).

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [pthreads(7) — POSIX threads](https://man7.org/linux/man-pages/man7/pthreads.7.html) — Linux man-pages project.
- [Worker threads](https://nodejs.org/api/worker_threads.html) — Node.js.
- [Using Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) — MDN Web Docs.

