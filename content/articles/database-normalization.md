# Database normalization

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 13731–13797](/research?document=interview&start=13731&end=13797). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Database Normalization

Normalization organizes relational data to reduce duplication and prevent data anomalies.

**Q8.12. What is normalization?**

It is the process of structuring database tables according to rules called normal forms.

Consider a poorly designed table:

| student_id | student_name | company_name | drive_role |
| ---------- | ------------ | ------------ | ---------- |
| 1          | Chirag       | Google       | SDE        |
| 1          | Chirag       | Microsoft    | QA         |
| 2          | Rahul        | Google       | SDE        |

Student and company information is repeated. This can cause:

- Update anomaly: Changing a student's name requires updating multiple records.
- Insertion anomaly: You cannot store a company until a drive or related record exists.
- Deletion anomaly: Deleting the last drive record could accidentally remove the only stored company information.

We separate the data into related tables.

**First Normal Form (1NF)**

- Each column contains atomic values.
- No repeating groups or arrays of values in a single cell.
- Each row is identifiable.

Instead of storing `Python, Java, SQL` in one skills cell, use a separate `student_skills` table with one skill per row.

**Second Normal Form (2NF)**

- Must satisfy 1NF.
- Every non-key attribute must depend on the entire candidate key, not just part of a composite candidate key.

For example, in a table keyed by `(student_id, drive_id)`, `student_name` depends only on `student_id`, not on the full key. It belongs in the students table.

**Third Normal Form (3NF)**

- Must satisfy 2NF.
- Non-key attributes must not depend transitively on a candidate key.

Example:

```text
student_id → department_id → department_name
```

If `department_name` is stored in the student table, it depends on `department_id`, not directly on the student's key. Separate departments into their own table.

**Q8.13. What is denormalization?**

Denormalization intentionally introduces redundancy to improve read performance or simplify certain access patterns.

Example: Store a precomputed `application_count` on a drive rather than calculating it every time.

Trade-off:

- Faster or simpler reads in certain workloads.
- More complex writes and risk of inconsistent duplicated values.

Interview answer: Normalize first to protect data integrity. Denormalize only when there is a demonstrated performance or reporting need and a strategy to keep duplicated data consistent.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
