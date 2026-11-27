# SQL joins

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 13631–13730](/research?document=interview&start=13631&end=13730). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## SQL Joins

Joins combine records from multiple tables based on related columns.

Imagine these tables:

**companies**

| id | name      |
| -- | --------- |
| 1  | Google    |
| 2  | Microsoft |

**drives**

| id  | company_id | role              |
| --- | ---------- | ----------------- |
| 101 | 1          | SDE               |
| 102 | 1          | QA Engineer       |
| 103 | 2          | Backend Developer |

#### INNER JOIN

Returns matching rows from both tables.

```sql
SELECT
    companies.name,
    drives.role
FROM companies
INNER JOIN drives
    ON companies.id = drives.company_id;
```

| name      | role              |
| --------- | ----------------- |
| Google    | SDE               |
| Google    | QA Engineer       |
| Microsoft | Backend Developer |

#### LEFT JOIN

Returns every row from the left table and matching rows from the right table. If no match exists, right-side columns are `NULL`.

```sql
SELECT
    companies.name,
    drives.role
FROM companies
LEFT JOIN drives
    ON companies.id = drives.company_id;
```

This also includes companies that have no drives.

#### Other joins

- RIGHT JOIN: Returns all rows from the right table and matching rows from the left table.
- FULL OUTER JOIN: Returns all matching and non-matching rows from both tables.
- CROSS JOIN: Returns the Cartesian product of two tables: every row from the first paired with every row from the second.

**Q8.11. Difference between INNER JOIN and LEFT JOIN?**

INNER JOIN returns only matching records. LEFT JOIN returns all records from the left table, including those without a matching record on the right.

#### Subqueries

A subquery is a query inside another query.

Find students whose CGPA is above the average:

```sql
SELECT name, cgpa
FROM students
WHERE cgpa > (
    SELECT AVG(cgpa)
    FROM students
);
```

A subquery can be used in `SELECT`, `FROM`, `WHERE`, and other query contexts.

#### EXISTS

Find students who have applied to at least one drive:

```sql
SELECT s.name
FROM students s
WHERE EXISTS (
    SELECT 1
    FROM applications a
    WHERE a.student_id = s.id
);
```

`EXISTS` checks whether the subquery returns any rows.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
