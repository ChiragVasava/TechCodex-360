# MongoDB

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 15495–15888](/research?document=interview&start=15495&end=15888). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## MongoDB architecture

### Q9.4. What is MongoDB?

MongoDB is a document-oriented NoSQL database.

Instead of storing information primarily in relational tables, it stores records as **BSON documents** grouped into **collections**.

Understand these four terms:

| MongoDB term | Meaning                    | Relational comparison |
| ------------ | -------------------------- | --------------------- |
| Database     | Container for collections  | Database              |
| Collection   | Group of documents         | Table                 |
| Document     | Individual record          | Row                   |
| Field        | Property inside a document | Column                |

A MongoDB `_id` is the document's unique identifier within its collection. A stored reference to another document is not automatically a relational foreign-key constraint.

### Q9.5. What does a MongoDB document look like?

```json
{
  "_id": "generated-object-id",
  "name": "Chirag",
  "email": "chirag@example.com",
  "department": "CSE",
  "cgpa": 8.2,
  "skills": [
    "Python",
    "JavaScript",
    "PostgreSQL"
  ],
  "education": {
    "degree": "B.E.",
    "university": "MSU"
  }
}
```

Notice:

- `skills` is an array.
- `education` is a nested object.
- Different documents in a collection can have different fields.
- `_id` uniquely identifies a document within its collection.

### Q9.6. What is BSON?

**BSON means Binary JSON.**

MongoDB stores documents using BSON, a binary-encoded representation of JSON-like data.

BSON supports additional data types, including:

- ObjectId
- Date
- Binary
- Decimal128
- Int32 and Int64
- Regular expressions

JSON is a text format. BSON is a binary data representation with additional types.

### Q9.7. What is ObjectId?

MongoDB automatically generates an `_id` field for documents if you don't supply one. A common default type is `ObjectId`.

```javascript
ObjectId("507f1f77bcf86cd799439011")
```

An ObjectId is 12 bytes and contains:

- 4 bytes of timestamp information
- 5 bytes of random value
- 3 bytes of incrementing counter

It is designed to provide highly likely uniqueness across generated IDs. Its timestamp component should not be treated as a perfectly reliable global ordering mechanism.



## MongoDB installation and setup

You can use MongoDB locally or through MongoDB Atlas, which provides managed MongoDB deployments.

For local practice, the source roadmap suggests MongoDB Community Server and MongoDB Shell (`mongosh`), or Docker.

#### Docker setup

```bash
docker run -d \
  --name mongodb \
  -p 27017:27017 \
  -v mongodb_data:/data/db \
  mongo:8
```

Check that the container is running:

```bash
docker ps
```

Connect to MongoDB Shell:

```bash
docker exec -it mongodb mongosh
```

Check the version:

```javascript
db.version()
```

Create and switch to a database:

```javascript
use recruitment
```

MongoDB creates the database when data is first written to it.

Create a collection:

```javascript
db.createCollection("students")
```

List collections:

```javascript
show collections
```



## MongoDB CRUD operations

CRUD means Create, Read, Update, Delete. MongoDB Shell provides methods for each operation.

### Q9.8. How do you insert one document?

```javascript
db.students.insertOne({
  name: "Chirag",
  email: "chirag@example.com",
  department: "CSE",
  cgpa: 8.2
});
```

Conceptual response:

```javascript
{
  acknowledged: true,
  insertedId: ObjectId("...")
}
```

Insert multiple documents:

```javascript
db.students.insertMany([
  {
    name: "Rahul",
    email: "rahul@example.com",
    department: "IT",
    cgpa: 7.8
  },
  {
    name: "Priya",
    email: "priya@example.com",
    department: "CSE",
    cgpa: 9.1
  }
]);
```

### Q9.9. How do you retrieve documents?

```javascript
// Find all
db.students.find();

// Find one
db.students.findOne({
  email: "chirag@example.com"
});

// Find by department
db.students.find({
  department: "CSE"
});
```

### Q9.10. How do you update a document?

Update one:

```javascript
db.students.updateOne(
  { email: "chirag@example.com" },
  {
    $set: {
      cgpa: 8.5
    }
  }
);
```

Update multiple:

```javascript
db.students.updateMany(
  { department: "CSE" },
  {
    $set: {
      eligible: true
    }
  }
);
```

**Important MongoDB update operators**

| Operator    | Purpose                         |
| ----------- | ------------------------------- |
| `$set`      | Set a field                     |
| `$unset`    | Remove a field                  |
| `$inc`      | Increment a numeric value       |
| `$push`     | Add an element to an array      |
| `$addToSet` | Add only if not already present |
| `$pull`     | Remove matching array elements  |
| `$rename`   | Rename a field                  |

Example:

```javascript
db.students.updateOne(
  { email: "chirag@example.com" },
  {
    $inc: { cgpa: 0.1 },
    $push: { skills: "Docker" }
  }
);
```

### Q9.11. How do you delete documents?

```javascript
// Delete one
db.students.deleteOne({
  email: "chirag@example.com"
});

// Delete many
db.students.deleteMany({
  department: "IT"
});
```

**Be careful:** `db.students.deleteMany({})` deletes every document in the collection.

### Q9.12. Difference between replaceOne() and updateOne()?

- `updateOne()` modifies selected fields using update operators.
- `replaceOne()` replaces the document's existing contents with a new document, while preserving its `_id` if the replacement does not specify a different one.

```javascript
db.students.replaceOne(
  { email: "rahul@example.com" },
  {
    name: "Rahul Patel",
    email: "rahul@example.com",
    department: "IT"
  }
);
```

Fields not included in the replacement are removed.



## Filtering, sorting and pagination

### Q9.13. How do you filter MongoDB documents?

Find students with CGPA greater than 8:

```javascript
db.students.find({
  cgpa: { $gt: 8 }
});
```

Common comparison operators:

| Operator | Meaning                              |
| -------- | ------------------------------------ |
| `$eq`    | Equal                                |
| `$ne`    | Not equal                            |
| `$gt`    | Greater than                         |
| `$gte`   | Greater than or equal                |
| `$lt`    | Less than                            |
| `$lte`   | Less than or equal                   |
| `$in`    | Matches any value in an array        |
| `$nin`   | Does not match any value in an array |

Examples:

```javascript
// CGPA between 7 and 9
db.students.find({
  cgpa: { $gte: 7, $lte: 9 }
});

// CSE or IT
db.students.find({
  department: { $in: ["CSE", "IT"] }
});
```

### Q9.14. What are MongoDB query logical operators?

MongoDB supports `$and`, `$or`, `$not`, and `$nor`.

```javascript
db.students.find({
  $and: [
    { department: "CSE" },
    { cgpa: { $gte: 8 } }
  ]
});
```

Another example:

```javascript
db.students.find({
  $or: [
    { department: "CSE" },
    { cgpa: { $gte: 9 } }
  ]
});
```

### Q9.15. How do you sort and limit results?

```javascript
db.students.find()
  .sort({ cgpa: -1 })
  .limit(5);
```

- `1`: ascending
- `-1`: descending

Skip records:

```javascript
db.students.find()
  .sort({ _id: 1 })
  .skip(10)
  .limit(10);
```

This retrieves the second page of 10 records. For large datasets, repeated high `skip()` values can become expensive; cursor-based pagination is worth considering.

### Q9.16. How do you select particular fields?

MongoDB calls this **projection**.

```javascript
db.students.find(
  { department: "CSE" },
  {
    name: 1,
    email: 1,
    cgpa: 1,
    _id: 0
  }
);
```

- `1`: include field
- `0`: exclude field

You generally cannot mix inclusion and exclusion projections, except for `_id`.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
