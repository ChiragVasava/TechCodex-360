# Real-time operating systems

An RTOS provides operating-system services designed to support predictable response to events and timing requirements; deadlines still depend on the complete application and hardware design.

## Predictability rather than sheer speed

A real-time system is judged partly by when a result is produced. A fast average response does not establish that the worst-case deadline is met.

An RTOS commonly supplies tasks, scheduling, timers, queues and synchronization primitives. FreeRTOS is one implementation, not a synonym for every RTOS.

## Example: sampling and communication

A sensor task samples at a required interval and sends records to a queue. A lower-priority communication task publishes them. If the network is unavailable, the design needs a bounded queue and an explicit overflow policy.

[Concurrency](/knowledge/concurrency) creates coordination problems even on one core. Task priorities do not eliminate resource contention.

## Common problems

Blocking a high-priority task on a resource held by a lower-priority task can create priority inversion. Unbounded interrupt handlers, stack exhaustion and accidental busy loops can defeat timing assumptions.

An RTOS does not automatically provide process-style memory isolation; capabilities vary by architecture and configuration.

## Exercise

Write a timing table with period, deadline, worst-case work and shared resources for two tasks. Add queue-full and sensor-failure scenarios. Assessment: explain why the system remains bounded under overload. Continue with [firmware](/knowledge/firmware), [threads](/knowledge/threads) and [testing](/knowledge/testing).

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [FreeRTOS documentation](https://www.freertos.org/Documentation/00-Overview) — FreeRTOS.

