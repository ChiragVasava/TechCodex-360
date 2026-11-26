# Processes

A process is an operating-system execution environment that groups resources such as an address space, open handles and one or more threads.

## Isolation and execution

A program is executable code; a process is a running instance with resources and state. Two processes can run the same program while retaining different memory and credentials. Their [threads](/knowledge/threads) perform the actual scheduled execution.

Process boundaries help isolate failures and enforce access checks. They are not a complete security guarantee: privileges, shared resources and the operating system's isolation mechanisms still matter.

## Communication

Processes can exchange data through pipes, sockets, shared memory and other inter-process communication mechanisms. Sending a serialized message creates an explicit interface; sharing memory demands agreement about layout and synchronization.

A browser may use multiple processes for sites, rendering or supporting services. Exact arrangements vary by browser and configuration.

## Trade-offs and diagnosis

More processes can improve isolation but increase memory overhead and communication costs. A process may be alive while doing no useful work, waiting on I/O or deadlocked.

During [debugging](/knowledge/debugging), inspect CPU usage, memory, open resources and wait state separately. Do not infer CPU parallelism simply from a count of processes.

## Exercise

Run two independent instances of a small program. Record their process identifiers, change state in one and check whether the other changes. Then connect them with a simple message protocol. Assessment: identify which state is private and which is intentionally shared. Next compare [concurrency](/knowledge/concurrency) and [parallelism](/knowledge/parallelism).

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [pthreads(7) — POSIX threads](https://man7.org/linux/man-pages/man7/pthreads.7.html) — Linux man-pages project.

