# Microservices

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 21272–21312](/research?document=interview&start=21272&end=21312). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Microservices — Boundaries, Communication and Failure

### What Makes a System Microservices-Based?

Services own business capabilities and can be deployed independently. Multiple routes, folders or Docker containers do not by themselves establish meaningful service boundaries. A modular monolith keeps internal boundaries without requiring a network call between modules.

For a placement system, applications and notifications may be separate capabilities. Split them only when independent deployment, scaling or ownership justifies the operational cost. An early product may be easier to operate as a modular monolith.

### Synchronous Calls and Asynchronous Events

A synchronous HTTP call is useful when the caller needs an immediate result. Define timeouts and propagate a correlation identifier for diagnosis. Retries can repeat side effects, so retry only with suitable idempotency rules.

An asynchronous event lets the application accept an application and notify users later. Consumers must tolerate duplicate delivery and out-of-order events where the broker or workflow permits them. Record processed event identifiers or make state transitions idempotent.

### Data Ownership and Distributed Consistency

A database transaction covers its own database work; it does not atomically include an arbitrary network request. If saving an application must also publish an event, consider a transactional outbox: write the application and an outbox row in one database transaction, then let a worker publish the event. Publication can repeat after a crash, so consumers still need deduplication.

A saga coordinates multiple local transactions with compensating actions. Compensation is a business operation, such as cancelling a reservation; it is not necessarily a literal reversal of history.

### Interview Questions and Practice

**Why avoid a shared writable database across independent services?** It couples schema changes and data ownership, undermining independent deployment.

**How do you handle a notification-service outage?** Persist the pending work, retry with backoff, expose failures for operations, and keep the core application state correct. Do not make a successful application disappear because an email failed.

**Practice:** Draw a modular monolith and a two-service version of the same application. Identify data owners, request/event contracts, timeouts, retry rules, logs and deployment units. Explain the additional failure modes introduced by the split.

---

**Q11.61. What is an API in web development?**

Answer: API stands for Application Programming Interface. It allows different software components or applications to communicate with each other through defined rules.

For example, a React frontend can call an Express API to retrieve student information from PostgreSQL.

An API acts as a communication interface between systems.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
