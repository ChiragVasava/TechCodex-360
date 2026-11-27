# Relational data modeling

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 13286–13439](/research?document=interview&start=13286&end=13439). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Relational Database Design

#### Tables, rows, columns and schema

Consider a `Student` table:

| id | name   | email               | department |
| -- | ------ | ------------------- | ---------- |
| 1  | Chirag | chirag\@example.com | CSE        |
| 2  | Rahul  | rahul\@example.com  | IT         |
| 3  | Priya  | priya\@example.com  | CSE        |

- Table: `Student`
- Row: One student's record.
- Column: A property such as name or email.
- Schema: The defined structure of the database and its objects.

**Q8.4. What is a primary key?**

A primary key uniquely identifies each row in a table.

```sql
CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(255)
);
```

Primary key rules:

1. Values must be unique.
2. Values cannot be `NULL`.
3. Each table has one primary key constraint, which can contain multiple columns.

A primary key can be a single column or a composite key.

For automatically generated IDs in PostgreSQL:

```sql
CREATE TABLE students (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
```

**Q8.5. What is a foreign key?**

A foreign key connects one table to another by referencing a candidate key, commonly the primary key.

```sql
CREATE TABLE companies (
    id INTEGER PRIMARY KEY,
    name VARCHAR(150) NOT NULL
);

CREATE TABLE drives (
    id INTEGER PRIMARY KEY,
    company_id INTEGER NOT NULL,
    role VARCHAR(100),

    FOREIGN KEY (company_id)
        REFERENCES companies(id)
);
```

Here, `drives.company_id` references `companies.id`. This prevents a drive from referencing a company that does not exist, unless the constraint is deliberately deferred or otherwise configured.

#### Database relationships

**One-to-one (1:1)**

Student

Profile

One student has one profile.

**One-to-many (1:N)**

Company

Many drives

One company can have multiple placement drives.

**Many-to-many (M:N)**

Students

Drives

Many students can apply to many drives. A junction table connects them.

**Q8.6. How do you implement a many-to-many relationship?**

Generally, create a junction table.

```sql
CREATE TABLE applications (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    student_id BIGINT NOT NULL REFERENCES students(id),
    drive_id BIGINT NOT NULL REFERENCES drives(id),
    status VARCHAR(30) NOT NULL DEFAULT 'APPLIED',

    UNIQUE (student_id, drive_id)
);
```

The unique constraint prevents the same student from applying to the same drive twice.

**Q8.7. Why not store multiple drive IDs inside a student record?**

Bad design:

```text
id | name   | drive_ids
1  | Chirag | 10, 11, 12
```

Problems:

- Difficult to query individual applications.
- Difficult to enforce foreign keys for each ID.
- Updating individual relationships becomes complicated.
- Data integrity is harder to maintain.

A separate `applications` table solves these problems.

### Q8.8. What are candidate, alternate and composite keys?

- **Candidate key:** A minimal set of columns that can uniquely identify a row.
- **Primary key:** The candidate key selected as the main identifier.
- **Alternate key:** A candidate key not selected as the primary key.
- **Composite key:** A key made from multiple columns.

Example:

```sql
CREATE TABLE drive_applications (
    student_id INT,
    drive_id INT,
    status VARCHAR(30),
    PRIMARY KEY (student_id, drive_id)
);
```

A student can apply to multiple drives, but cannot create duplicate applications for the same drive.

This is directly relevant to UniNest AI's `studentId` and `driveId` uniqueness constraint.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
