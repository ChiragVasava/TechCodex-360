# Connection pooling

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 14191–14231](/research?document=interview&start=14191&end=14231). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Connection Pooling

**Q8.26. What is a database connection?**

A database connection is a communication session between an application and a database server. Creating and destroying connections for every request is inefficient.

**Q8.27. What is connection pooling?**

Connection pooling maintains a reusable collection of database connections.

Typical flow:

1. An API request asks for a connection.
2. The pool provides an available connection.
3. The query runs.
4. The connection is returned to the pool.
5. Another request can reuse it.

Benefits:

- Lower connection setup overhead.
- Controlled database connection count.
- Better resource utilization.
- Improved application scalability.

**Q8.28. What happens when the pool is exhausted?**

Requests may wait for a connection until a timeout occurs.

Common causes:

- Too many application instances.
- Long-running queries.
- Connections not released.
- Pool size configured too high or too low.
- Database connection limit reached.

Interview answer: Inspect pool metrics, query duration, connection acquisition wait time, active connections, idle connections, and database limits. Investigate connection leaks and query performance before changing pool size.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
