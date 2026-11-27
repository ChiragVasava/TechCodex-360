# MongoDB aggregation

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 15983–16138](/research?document=interview&start=15983&end=16138). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## MongoDB aggregation pipeline

### Q9.20. What is an aggregation pipeline?

An aggregation pipeline processes documents through a sequence of stages. Each stage receives documents, performs an operation, and passes results to the next stage.

Common stages:

| Stage      | Purpose                        |
| ---------- | ------------------------------ |
| `$match`   | Filter documents               |
| `$group`   | Group documents                |
| `$project` | Select or calculate fields     |
| `$sort`    | Sort results                   |
| `$limit`   | Limit results                  |
| `$skip`    | Skip results                   |
| `$unwind`  | Expand an array into documents |
| `$lookup`  | Join another collection        |
| `$count`   | Count documents                |

### Q9.21. How do you count students by department?

```javascript
db.students.aggregate([
  {
    $group: {
      _id: "$department",
      totalStudents: { $sum: 1 }
    }
  }
]);
```

Conceptual result:

```text
[
  { _id: "CSE", totalStudents: 2 },
  { _id: "IT", totalStudents: 1 }
]
```

### Q9.22. How do you filter and group students?

Find the average CGPA of each department, considering students with CGPA above 7:

```javascript
db.students.aggregate([
  {
    $match: {
      cgpa: { $gt: 7 }
    }
  },
  {
    $group: {
      _id: "$department",
      averageCGPA: { $avg: "$cgpa" },
      totalStudents: { $sum: 1 }
    }
  },
  {
    $sort: {
      averageCGPA: -1
    }
  }
]);
```

This is conceptually similar to SQL:

```sql
SELECT
    department,
    AVG(cgpa),
    COUNT(*)
FROM students
WHERE cgpa > 7
GROUP BY department
ORDER BY AVG(cgpa) DESC;
```

### Q9.23. What does $unwind do?

Suppose a document contains:

```javascript
{
  name: "Chirag",
  skills: ["Python", "Docker", "SQL"]
}
```

Run:

```javascript
db.students.aggregate([
  {
    $unwind: "$skills"
  }
]);
```

Conceptual output:

```javascript
{ name: "Chirag", skills: "Python" }
{ name: "Chirag", skills: "Docker" }
{ name: "Chirag", skills: "SQL" }
```

`$unwind` deconstructs an array field and outputs one document for each array element.

### Q9.24. What is $lookup?

`$lookup` performs a left outer join between collections.

Imagine a `students` collection:

```javascript
{
  _id: ObjectId("student123"),
  name: "Chirag"
}
```

And an `applications` collection:

```javascript
{
  studentId: ObjectId("student123"),
  driveId: ObjectId("drive123"),
  status: "APPLIED"
}
```

Query:

```javascript
db.students.aggregate([
  {
    $lookup: {
      from: "applications",
      localField: "_id",
      foreignField: "studentId",
      as: "applications"
    }
  }
]);
```

The result contains student documents with an additional `applications` array.

Important: MongoDB supports joins. The fact that it is NoSQL does not mean it cannot relate data.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
