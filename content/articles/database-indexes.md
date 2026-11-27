# Database constraints and indexes

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 13798–13927](/research?document=interview&start=13798&end=13927). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Constraints and Indexes

#### Database constraints

Constraints enforce rules at the database level.

| Constraint  | Purpose                  |
| ----------- | ------------------------ |
| PRIMARY KEY | Unique row identity      |
| FOREIGN KEY | Referential integrity    |
| UNIQUE      | Prevent duplicate values |
| NOT NULL    | Require a value          |
| CHECK       | Enforce a condition      |
| DEFAULT     | Provide a default value  |

Example:

```sql
CREATE TABLE applications (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    student_id BIGINT NOT NULL REFERENCES students(id),
    drive_id BIGINT NOT NULL REFERENCES drives(id),
    status VARCHAR(30) NOT NULL DEFAULT 'APPLIED',
    cgpa_at_application NUMERIC(4,2)
        CHECK (cgpa_at_application BETWEEN 0 AND 10),
    UNIQUE (student_id, drive_id)
);
```

The database enforces these rules even if an API endpoint accidentally fails to validate a request.

**Q8.14. Explain database indexing.**

An index is an additional data structure that helps the database locate records without scanning every row.

Imagine a book:

- Without an index: Read every page to find a topic.
- With an index: Look up the topic and jump to its page.

PostgreSQL commonly uses B-tree indexes for equality and range queries.

```sql
CREATE INDEX idx_students_department
ON students(department);
```

A query filtering by department may be able to use the index:

```sql
SELECT *
FROM students
WHERE department = 'CSE';
```

An index does not guarantee a faster query. PostgreSQL's query planner chooses a plan based on estimated costs, table size, selectivity, statistics, and other factors.

#### Composite indexes

```sql
CREATE INDEX idx_applications_student_status
ON applications(student_id, status);
```

This is particularly useful for queries filtering by `student_id`, or by both `student_id` and `status`. It may not be as useful for a query filtering only by `status`, because of the leading-column behaviour of B-tree indexes.

**Q8.15. Difference between single-column and composite indexes?**

- Single-column index: An index on one column.
- Composite index: An index on multiple columns in a specific order.

The order matters.

#### PostgreSQL index types

| Index  | Typical use                                   |
| ------ | --------------------------------------------- |
| B-tree | Equality, range, sorting                      |
| Hash   | Equality comparisons                          |
| GIN    | JSONB, arrays, full-text search               |
| GiST   | Geometric and specialized search              |
| BRIN   | Very large tables with naturally ordered data |

**Q8.16. Can too many indexes be harmful?**

Yes. Indexes:

- Consume disk space.
- Add overhead to INSERT, UPDATE and DELETE.
- Need maintenance.
- Can increase write latency.

Create indexes based on actual query patterns, not automatically on every column.

#### EXPLAIN and EXPLAIN ANALYZE

```sql
EXPLAIN
SELECT *
FROM students
WHERE department = 'CSE';
```

To execute the query and report actual timings:

```sql
EXPLAIN ANALYZE
SELECT *
FROM students
WHERE department = 'CSE';
```

Look for sequential scans, index scans, nested loops, hash joins, sorts, actual rows, and execution time. A sequential scan is not inherently bad; for a small table or a query returning many rows, it may be the best plan.

Important: `EXPLAIN ANALYZE` actually executes the query. Be careful with statements that modify data.

### Q8.17. What is the difference between clustered and non-clustered indexes?

The precise terminology and implementation differ by database.

Broadly:

- A clustered index organizes table data according to the index key in systems that support that organization.
- A non-clustered index is a separate structure containing indexed keys and references to the associated rows.

Don't assume every database implements clustered indexes in exactly the same way.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
