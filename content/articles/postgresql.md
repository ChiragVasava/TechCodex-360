# PostgreSQL

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 14083–14153](/research?document=interview&start=14083&end=14153). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## PostgreSQL Architecture

**Q8.23. What is PostgreSQL?**

PostgreSQL is an open-source object-relational database management system (ORDBMS).

It supports:

- Relational tables and SQL.
- Transactions and ACID properties.
- Constraints and indexes.
- JSON and JSONB.
- Views and materialized views.
- Stored functions and triggers.
- Extensions such as PostGIS.

#### How PostgreSQL processes a query

1. Client sends SQL to PostgreSQL.
2. PostgreSQL parses and validates the query.
3. The planner/optimizer chooses a query plan.
4. The executor runs the plan.
5. Data is accessed through memory and storage structures.
6. Results are returned to the client.

#### Shared buffers

Shared buffers are PostgreSQL's main shared memory area for caching database pages. When a query needs a page, PostgreSQL can use a cached copy or read it from storage.

#### WAL

WAL stands for Write-Ahead Logging. PostgreSQL records changes in its write-ahead log before the corresponding data pages need to be written to their final locations.

Why?

- Crash recovery.
- Durability.
- Replication support.
- Point-in-time recovery when combined with appropriate backups and archived WAL.

**Q8.24. What happens when a PostgreSQL transaction commits?**

In simplified terms:

1. The transaction's changes generate WAL records.
2. PostgreSQL ensures the relevant WAL is flushed according to configured durability settings.
3. The commit is acknowledged.
4. Changed data pages can be written later.
5. If a crash occurs, WAL supports recovery.

A commit does not mean every modified data page is immediately written to the table file.

#### MVCC

MVCC stands for Multi-Version Concurrency Control. PostgreSQL uses row versions to allow readers and writers to work concurrently in many situations without readers blocking writers or writers blocking readers.

An UPDATE typically creates a new row version rather than overwriting the old version in place. Old versions are later cleaned up through vacuuming when they are no longer needed.

**Q8.25. What is VACUUM?**

`VACUUM` helps reclaim space occupied by obsolete row versions for reuse and maintains visibility information. PostgreSQL's autovacuum normally performs maintenance automatically.

```sql
VACUUM ANALYZE students;
```

`ANALYZE` updates statistics used by the query planner.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
