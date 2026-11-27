# SQL

## A query as a series of transformations

![Tables join, rows are filtered, results grouped, then ordered.](/diagrams/data-query.svg)

This picture explains one query's logical transformations; a database optimizer can choose a different physical execution plan. Joins combine rows, filters select rows, aggregates summarize groups, and ordering arranges the final result. See [joins](/knowledge/sql-joins) and [indexes](/knowledge/database-indexes) before interpreting a query plan.

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 13440–13630](/research?document=interview&start=13440&end=13630). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## SQL Fundamentals

SQL stands for Structured Query Language. It is used to define, retrieve, manipulate, and control relational database data.

#### Categories of SQL commands

| Category | Purpose                    | Commands                      |
| -------- | -------------------------- | ----------------------------- |
| DDL      | Define database structures | CREATE, ALTER, DROP, TRUNCATE |
| DML      | Manipulate records         | INSERT, UPDATE, DELETE        |
| DQL      | Retrieve records           | SELECT                        |
| DCL      | Control permissions        | GRANT, REVOKE                 |
| TCL      | Manage transactions        | BEGIN, COMMIT, ROLLBACK       |

#### Creating a table

```sql
CREATE TABLE students (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    department VARCHAR(50),
    cgpa NUMERIC(4, 2)
);
```

- `BIGINT`: Integer type with a larger range.
- `VARCHAR(100)`: Text with a maximum length.
- `NOT NULL`: Value is required.
- `UNIQUE`: Duplicate values are rejected.
- `NUMERIC(4,2)`: Exact decimal representation with up to four total digits and two after the decimal point.

#### INSERT — Create data

```sql
INSERT INTO students (name, email, department, cgpa)
VALUES
('Chirag', 'chirag@example.com', 'CSE', 8.20),
('Rahul', 'rahul@example.com', 'IT', 7.80),
('Priya', 'priya@example.com', 'CSE', 9.10);
```

Expected result:

```text
INSERT 0 3
```

#### SELECT — Read data

```sql
SELECT * FROM students;
```

Select specific columns:

```sql
SELECT name, email
FROM students;
```

#### UPDATE — Modify data

```sql
UPDATE students
SET cgpa = 8.50
WHERE id = 1;
```

Important: Always understand your `WHERE` clause. Without it, the query updates every row.

#### DELETE — Remove data

```sql
DELETE FROM students
WHERE id = 3;
```

Again, without `WHERE`, all rows are deleted.

**Q8.9. Difference between DELETE, TRUNCATE and DROP?**

| Command  | What it does                                      |
| -------- | ------------------------------------------------- |
| DELETE   | Removes selected or all rows                      |
| TRUNCATE | Quickly removes all rows from a table             |
| DROP     | Removes the table itself, including its structure |

In PostgreSQL, `TRUNCATE` and `DROP` are transactional, but have different semantics and effects. `TRUNCATE` can affect identity sequences depending on whether `RESTART IDENTITY` is specified.



## Filtering, Sorting and Aggregation

#### WHERE

```sql
SELECT *
FROM students
WHERE department = 'CSE';
```

Other operators:

```sql
SELECT * FROM students WHERE cgpa > 8.0;

SELECT * FROM students WHERE cgpa BETWEEN 7.0 AND 9.0;

SELECT * FROM students WHERE department IN ('CSE', 'IT');

SELECT * FROM students WHERE name LIKE 'C%';
```

`LIKE` performs pattern matching. `%` means any sequence of characters, while `_` means one character. PostgreSQL also supports `ILIKE` for case-insensitive pattern matching.

#### ORDER BY

```sql
SELECT name, cgpa
FROM students
ORDER BY cgpa DESC;
```

- `ASC`: Ascending order.
- `DESC`: Descending order.

#### LIMIT and OFFSET

```sql
SELECT *
FROM students
ORDER BY id
LIMIT 10 OFFSET 20;
```

This retrieves 10 rows after skipping the first 20. This is one form of pagination. For large datasets, keyset pagination is often more efficient than high OFFSET values.

#### Aggregate functions

| Function | Purpose           |
| -------- | ----------------- |
| COUNT()  | Count records     |
| SUM()    | Calculate total   |
| AVG()    | Calculate average |
| MIN()    | Find minimum      |
| MAX()    | Find maximum      |

```sql
SELECT COUNT(*) FROM students;

SELECT AVG(cgpa) FROM students;

SELECT MAX(cgpa) FROM students;
```

#### GROUP BY

Count students in each department:

```sql
SELECT department, COUNT(*) AS total_students
FROM students
GROUP BY department;
```

Conceptual result:

| department | total_students |
| ---------- | -------------- |
| CSE        | 2              |
| IT         | 1              |

#### HAVING

`WHERE` filters rows before grouping. `HAVING` filters groups after aggregation.

```sql
SELECT department, AVG(cgpa) AS average_cgpa
FROM students
GROUP BY department
HAVING AVG(cgpa) > 8.0;
```

**Q8.10. Difference between WHERE and HAVING?**

- `WHERE` filters individual records before aggregation.
- `HAVING` filters aggregated groups after `GROUP BY`.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
