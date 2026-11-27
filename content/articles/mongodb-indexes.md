# MongoDB indexes

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 16139–16221](/research?document=interview&start=16139&end=16221). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## MongoDB indexes and optimization

### Q9.25. What is an index in MongoDB?

An index is a data structure that helps MongoDB find matching documents without examining every document.

Create an index:

```javascript
db.students.createIndex({
  email: 1
});
```

Queries filtering on email may benefit:

```javascript
db.students.find({
  email: "chirag@example.com"
});
```

### Q9.26. What is a unique index?

A unique index prevents duplicate indexed values.

```javascript
db.students.createIndex(
  { email: 1 },
  { unique: true }
);
```

This helps enforce unique emails. If duplicate values already exist, MongoDB cannot create the unique index until those duplicates are resolved.

### Q9.27. What is a compound index?

A compound index includes multiple fields.

```javascript
db.applications.createIndex({
  studentId: 1,
  status: 1
});
```

This is useful for queries filtering by student and status.

MongoDB compound indexes follow the **field-prefix principle**. The field order matters.

For example, an index on `{ studentId: 1, status: 1 }` can support queries using `studentId` alone or both fields, but it is not generally a substitute for an index beginning with `status`.

### Q9.28. Difference between find() and aggregate()?

| `find()`                          | `aggregate()`                                  |
| --------------------------------- | ---------------------------------------------- |
| Retrieves matching documents      | Processes documents through stages             |
| Good for CRUD-style queries       | Good for calculations and transformations      |
| Supports filtering and projection | Supports grouping, joining, unwinding and more |
| Usually simpler                   | More expressive for complex analysis           |

### Q9.29. How do you inspect a MongoDB query plan?

Use:

```javascript
db.students.find({
  email: "chirag@example.com"
}).explain("executionStats");
```

Look for:

- `COLLSCAN`: collection scan
- `IXSCAN`: index scan
- `nReturned`: number of documents returned
- `totalDocsExamined`: documents examined
- `totalKeysExamined`: index keys examined

A `COLLSCAN` is not automatically a problem. It can be appropriate for small collections or queries returning many documents.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
