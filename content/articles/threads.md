# Software threads

A software thread is an execution sequence that an operating system or runtime can schedule, usually sharing a process's address space with other threads in that process.

## Shared resources, separate execution state

Threads within a [process](/knowledge/processes) commonly share heap memory and open resources. Each thread has its own execution state, including a stack and registers. Exact ownership rules depend on the platform.

A software thread is not a CPU core. A hardware thread is a processor execution context; an operating system can schedule many software threads over a smaller number of hardware execution contexts.

## Example: a shared counter

Two threads can both read the same counter value before either writes the incremented value. One update may be lost. Protect the operation with an appropriate synchronization primitive or avoid sharing the mutable counter.

Atomic access to one value does not automatically make a multi-step business operation atomic.

## Costs and risks

Threads can support [parallelism](/knowledge/parallelism) on available hardware, but context switching, contention and cache effects can limit gains. Locks can introduce deadlocks when threads acquire resources in inconsistent orders.

Memory safety and synchronization bugs can become security problems when corrupted state controls access or resource ownership.

## Practice

Describe a two-thread lost-update interleaving on paper, then design a message-passing alternative. Assessment: state which data is shared, which operations need coordination and how a thread stops safely. Study [concurrency](/knowledge/concurrency) before assuming additional threads improve throughput.

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [pthreads(7) — POSIX threads](https://man7.org/linux/man-pages/man7/pthreads.7.html) — Linux man-pages project.
- [Worker threads](https://nodejs.org/api/worker_threads.html) — Node.js.

