# Database transactions

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 13928–14082](/research?document=interview&start=13928&end=14082). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Transactions, ACID and Concurrency

#### What is a transaction?

A transaction is a logical unit of database work. It allows multiple operations to succeed or fail together.

Imagine a student accepts a company offer. The application must:

1. Update the offer status.
2. Update the application status.
3. Record the acceptance in the audit history.

If the first two succeed but the audit record fails, the database may become inconsistent. A transaction ensures the operations are committed together or rolled back together.

#### ACID properties

- **A — Atomicity:** All operations succeed, or none are committed.
- **C — Consistency:** A transaction preserves defined database constraints and integrity rules.
- **I — Isolation:** Concurrent transactions are controlled so they do not produce unacceptable interference.
- **D — Durability:** Once committed, changes survive failures according to the database's durability guarantees.

**Q8.18. Explain ACID with a practical example.**

When a student accepts an offer, the application status, offer status, and audit record should be updated as one transaction. Atomicity prevents partial completion; consistency preserves constraints; isolation controls concurrent updates; durability ensures the committed result is retained.

#### SQL transaction example

```sql
BEGIN;

UPDATE offers
SET status = 'ACCEPTED'
WHERE id = 501;

UPDATE applications
SET status = 'OFFER_ACCEPTED'
WHERE id = 101;

INSERT INTO offer_audit (offer_id, action)
VALUES (501, 'ACCEPTED');

COMMIT;
```

If something fails before the transaction commits:

```sql
ROLLBACK;
```

- `COMMIT`: Commits the transaction's changes.
- `ROLLBACK`: Discards uncommitted changes.

#### Transaction isolation levels

| Isolation level  | Key behaviour                                                                    |
| ---------------- | -------------------------------------------------------------------------------- |
| Read Uncommitted | PostgreSQL treats it as Read Committed                                           |
| Read Committed   | Each statement sees a committed snapshot                                         |
| Repeatable Read  | Transaction sees a stable snapshot                                               |
| Serializable     | Enforces behaviour equivalent to serial execution, potentially requiring retries |

**Q8.19. What are dirty reads, non-repeatable reads and phantom reads?**

- Dirty read: Reading uncommitted data from another transaction. PostgreSQL prevents this.
- Non-repeatable read: Reading the same row twice and seeing different committed values.
- Phantom read: Repeating a query and seeing a different set of rows due to changes by another transaction.

PostgreSQL's Repeatable Read provides snapshot isolation and prevents non-repeatable reads and phantom reads in PostgreSQL, although serialization anomalies can still occur. Serializable provides stronger guarantees.

#### Race conditions

A race condition occurs when the result depends on the timing or ordering of concurrent operations.

Example: Only one seat is available in a placement drive, and two students attempt to claim it simultaneously. A naive read-then-decrement approach can allow both to believe they obtained the last seat.

One solution is an atomic conditional update:

```sql
UPDATE drives
SET seats_remaining = seats_remaining - 1
WHERE id = 10
  AND seats_remaining > 0
RETURNING seats_remaining;
```

If no row is returned, no seat was available to claim.

**Q8.20. Optimistic vs pessimistic locking?**

- Pessimistic locking: Lock a record so competing transactions must wait or fail to acquire the lock.
- Optimistic locking: Let operations proceed, but check a version or equivalent condition before accepting an update.

Example:

```sql
UPDATE drives
SET seats_remaining = 4,
    version = version + 1
WHERE id = 10
  AND version = 7;
```

If zero rows are affected, another transaction changed the record first. The application should reload and retry or report a conflict.

### Q8.21. What is a lost update?

Two transactions read the same original value and then overwrite each other's updates.

Example:

- Original stock = 10.
- A reads 10 and calculates 9.
- B reads 10 and calculates 8.
- A writes 9.
- B writes 8.

The final value becomes 8 instead of 7.

A database-level atomic update can prevent this specific pattern:

```sql
UPDATE inventory
SET quantity = quantity - 1
WHERE product_id = 5
  AND quantity > 0;
```


### Q8.22. What is row-level locking?

Row-level locking locks selected rows to coordinate conflicting updates.

PostgreSQL example:

```sql
BEGIN;

SELECT *
FROM accounts
WHERE id = 1
FOR UPDATE;

UPDATE accounts
SET balance = balance - 500
WHERE id = 1;

COMMIT;
```

Another transaction trying to update or acquire a conflicting lock on that row may need to wait.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
