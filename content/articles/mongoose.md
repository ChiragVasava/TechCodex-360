# Mongoose ODM

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 16287–16432](/research?document=interview&start=16287&end=16432). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Mongoose ODM

### Q9.34. What is Mongoose?

Mongoose is an **Object Data Modeling (ODM)** library for Node.js and MongoDB.

It provides:

- Schemas
- Models
- Validation
- Middleware/hooks
- Query APIs
- Population of references

Compare:

- Prisma: ORM commonly used with relational databases such as PostgreSQL.
- Mongoose: ODM designed for MongoDB.

#### 10.1 Install Mongoose

```bash
npm install mongoose
```

Create a model at `models/Student.js`:

```javascript
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    department: {
      type: String,
      required: true
    },

    cgpa: {
      type: Number,
      min: 0,
      max: 10
    },

    skills: {
      type: [String],
      default: []
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Student", studentSchema);
```

### Q9.35. What is a Mongoose schema?

A schema defines the expected structure, data types, and validation rules for documents managed by a Mongoose model.

```javascript
const studentSchema = new mongoose.Schema({
  name: String,
  email: String
});
```

Mongoose schemas do not mean MongoDB has become a relational database. MongoDB remains document-oriented.

#### 10.2 Connect to MongoDB

`config/database.js`:

```javascript
const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(process.env.MONGODB_URI);

  console.log("MongoDB connected");
}

module.exports = connectDB;
```

`.env`:

```dotenv
MONGODB_URI=mongodb://localhost:27017/recruitment
```

For an Atlas connection, use the connection string provided by your Atlas cluster.

#### 10.3 Mongoose CRUD

Create:

```javascript
const student = await Student.create({
  name: "Chirag",
  email: "chirag@example.com",
  department: "CSE",
  cgpa: 8.2
});
```

Read:

```javascript
const students = await Student.find({
  department: "CSE"
});
```

Update:

```javascript
const student = await Student.findByIdAndUpdate(
  id,
  { cgpa: 8.5 },
  { new: true, runValidators: true }
);
```

Delete:

```javascript
const student = await Student.findByIdAndDelete(id);
```

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
