# Document data modeling

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 15889–15982](/research?document=interview&start=15889&end=15982). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Embedded documents vs references

This is one of the most important MongoDB design decisions.

### Q9.17. What is an embedded document?

An embedded document stores related information inside the same parent document.

```javascript
{
  _id: ObjectId("..."),
  name: "Chirag",
  email: "chirag@example.com",
  education: {
    degree: "B.E.",
    university: "MSU",
    graduationYear: 2027
  },
  skills: [
    "Python",
    "JavaScript",
    "PostgreSQL"
  ]
}
```

**Advantages**

- Related data can be retrieved in one query.
- Natural representation of nested structures.
- Atomic updates to a single document.
- Fewer cross-collection queries.

**Disadvantages**

- Documents can become large.
- Data duplication can occur.
- Updating duplicated data becomes harder.
- Arrays that grow indefinitely can cause design problems.

### Q9.18. What is a reference in MongoDB?

A reference stores the `_id` of another document.

`students` collection:

```javascript
{
  _id: ObjectId("student123"),
  name: "Chirag"
}
```

`applications` collection:

```javascript
{
  _id: ObjectId("application123"),
  studentId: ObjectId("student123"),
  driveId: ObjectId("drive123"),
  status: "APPLIED"
}
```

The application document points to a student and a drive without embedding their entire records.

**Advantages of references**

- Avoids excessive duplication.
- Related records can be managed independently.
- Suitable for many-to-many relationships.
- Better when related data is large or independently updated.

**Disadvantages**

- May require additional queries or aggregation.
- MongoDB does not automatically enforce ordinary references as foreign keys.
- Application code must manage referential integrity.

### Q9.19. When should you embed and when should you reference?

| Situation                                            | Likely choice     |
| ---------------------------------------------------- | ----------------- |
| One profile has a small address object               | Embed             |
| A student has a few fixed education entries          | Often embed       |
| Students apply to many drives                        | Reference         |
| A company has many independently managed drives      | Reference         |
| A document has small, bounded nested settings        | Embed             |
| A related collection grows without a practical limit | Usually reference |

**Interview answer:** Embed data when it is bounded, belongs to the parent, and is commonly read together. Reference data when it is independently managed, shared by multiple records, or can grow significantly.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
