# MySQL and SQLite comparisons

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 14154–14190](/research?document=interview&start=14154&end=14190). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## MySQL and SQLite — Engine-Specific Knowledge

### PostgreSQL, MySQL and SQLite Serve Different Workloads

| Engine | Deployment model | Practical choice |
| --- | --- | --- |
| PostgreSQL | Client/server relational database | Shared transactional data, rich queries and constraints |
| MySQL with InnoDB | Client/server relational database | Shared web-application data with transactional tables |
| SQLite | Embedded database library, commonly a local file | Local tools, embedded apps and suitable single-application deployments |

Learn SQL and relational design once, then study dialect and operational differences. Choosing an ORM does not remove those differences.

### MySQL Fundamentals

Be able to explain a database/schema, table, primary key and index using the SQL lessons above. InnoDB combines transactions, locking and multiversion reads. Concurrency behavior depends on the isolation level and statement; do not assume all SELECT operations lock rows or that every storage engine offers identical guarantees. [MySQL InnoDB transaction reference](https://dev.mysql.com/doc/refman/8.4/en/innodb-transaction-model.html).

Practice parameterized CRUD, a multi-statement transaction, a unique-constraint violation and an execution-plan investigation. For monetary amounts, choose an appropriate exact representation and currency handling rather than assuming binary floating point is exact.

PostgreSQL-specific examples such as `DATE_TRUNC`, `JSONB` and `BIGSERIAL` need adaptation for MySQL. Check engine support before transferring full outer joins, upserts, identity columns or JSON queries. Migration tests should use the actual deployment engine.

### SQLite Fundamentals

SQLite runs inside the application process instead of requiring a separate database server. It is useful for local storage and modest workloads, but concurrent writing is serialized: many competing writers may call for a client/server database. Do not judge suitability only by database size. [Official SQLite deployment guidance](https://www.sqlite.org/whentouse.html).

For an application using SQLite, know where the file lives, how container volumes preserve it, and how backups remain consistent with active writes. Verify foreign-key enforcement for each connection. Testing on SQLite alone does not prove PostgreSQL/MySQL behavior, especially around types, constraints and concurrency.

### Interview Questions and Practical Task

**Why not switch engines by changing only the connection URL?** SQL syntax, types, migrations, isolation, locking and query plans can differ.

**When would you choose SQLite?** When embedded/local storage and simple operation match the workload; evaluate concurrent writes and deployment topology.

**Task:** Model students and applications with a uniqueness constraint on the student/drive pair. Implement the same use case on the engine you claim experience with. Explain the schema, query plan, transaction boundary, backup approach and any dialect-specific choices.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
