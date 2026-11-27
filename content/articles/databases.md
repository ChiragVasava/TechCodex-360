# Database fundamentals

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 13243–13285](/research?document=interview&start=13243&end=13285). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Database Fundamentals

**Q8.1. What is a database?**

A database is an organized collection of data that can be stored, accessed, updated, and managed efficiently.

For a recruitment platform, the database needs to store:

- Student information.
- Company information.
- Placement drives.
- Student applications.
- Interview schedules.
- Job offers.

A database provides persistent storage and controlled access to information. Unlike a temporary JavaScript array, records remain available after the application server restarts.

**Q8.2. What is a DBMS?**

A Database Management System is software that allows applications and users to interact with databases.

Examples include PostgreSQL, MySQL, MongoDB, Oracle Database, Microsoft SQL Server, and SQLite.

| Database                     | DBMS                           |
| ---------------------------- | ------------------------------ |
| Organized collection of data | Software managing the data     |
| Contains records             | Provides operations on records |
| Example: student database    | Example: PostgreSQL            |


**Q8.3. Difference between PostgreSQL and MySQL?**

Both are relational database management systems.

- PostgreSQL has strong support for advanced SQL features, complex queries, JSONB, custom types, and extensibility.
- MySQL is widely used in web applications and has a large ecosystem.
- Both support transactions, indexes, constraints, and relational data.
- Actual performance depends on schema design, queries, indexing, configuration, and workload.

We’ll use PostgreSQL for this phase.

## Connected study

Continue with [data structures](/knowledge/data-structures) and the [complete study library](/study).
