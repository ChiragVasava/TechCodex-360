# Prisma ORM

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 14232–14818](/research?document=interview&start=14232&end=14818). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Prisma ORM

#### What is an ORM?

ORM stands for Object-Relational Mapping. An ORM maps relational database tables and records to objects and models in application code.

Without an ORM:

```javascript
const result = await pool.query(
  "SELECT * FROM students WHERE id = $1",
  [studentId]
);

const student = result.rows[0];
```

With Prisma:

```javascript
const student = await prisma.student.findUnique({
  where: { id: studentId }
});
```

Both approaches can query PostgreSQL. Prisma provides a type-safe application interface and manages database access through its generated client.

**Q8.29. What is Prisma?**

Prisma is a Node.js and TypeScript ORM toolkit. Its major components include:

- Prisma Schema: Defines models, fields, relations, and database configuration.
- Prisma Client: Generated, type-safe query API.
- Prisma Migrate: Manages database schema migrations.
- Prisma CLI: Commands for generating clients, migrations, and database operations.

**Q8.30. Difference between raw SQL and Prisma?**

| Raw SQL                                | Prisma                                 |
| -------------------------------------- | -------------------------------------- |
| Direct SQL control                     | Higher-level query API                 |
| Full SQL flexibility                   | Convenient typed operations            |
| You manage mapping                     | Client maps results to objects         |
| Can be database-specific               | Abstracts many operations              |
| Must manage parameterization carefully | Provides safe parameterized query APIs |

Prisma does not eliminate the need to understand SQL. For complex queries, database-specific features, and performance tuning, SQL knowledge remains important.

#### Install PostgreSQL and Prisma

Create the project:

```bash
mkdir recruitment-api
cd recruitment-api

npm init -y

npm install express @prisma/client dotenv
npm install -D prisma typescript tsx @types/node @types/express
```

Initialize TypeScript and Prisma:

```bash
npx tsc --init
npx prisma init
```

The exact generated files can vary by Prisma version and initialization options. Keep the installed Prisma CLI and client versions aligned.

Check versions:

```bash
npx prisma -v
npm list prisma @prisma/client
```

#### Configure the database connection

In `.env`:

```dotenv
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/recruitment_db?schema=public"
PORT=3000
```

Replace `your_password` with your local PostgreSQL password.

The URL structure:

```text
postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA
```

| Component | Example        |
| --------- | -------------- |
| Protocol  | postgresql     |
| User      | postgres       |
| Password  | your password  |
| Host      | localhost      |
| Port      | 5432           |
| Database  | recruitment_db |
| Schema    | public         |

Do not commit `.env` to GitHub.

#### Create the database

Using PostgreSQL's command-line utility:

```bash
createdb -U postgres recruitment_db
```

Alternatively, in `psql`:

```sql
CREATE DATABASE recruitment_db;
```

Connect:

```bash
psql -U postgres -d recruitment_db
```

Expected prompt:

```text
recruitment_db=#
```

#### Define the Prisma schema

Our recruitment platform needs four models:

- Student
- Company
- Drive
- Application

A conventional Prisma schema:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum ApplicationStatus {
  APPLIED
  SHORTLISTED
  INTERVIEW
  OFFERED
  REJECTED
}

model Student {
  id           Int           @id @default(autoincrement())
  name         String
  email        String        @unique
  department   String
  cgpa         Decimal       @db.Decimal(4, 2)

  applications Application[]

  createdAt    DateTime      @default(now())
  updatedAt    DateTime      @updatedAt
}

model Company {
  id      Int     @id @default(autoincrement())
  name    String
  website String?

  drives  Drive[]
}

model Drive {
  id        Int     @id @default(autoincrement())
  role      String
  package   Decimal @db.Decimal(10, 2)
  companyId Int

  company      Company       @relation(fields: [companyId], references: [id])
  applications Application[]

  createdAt DateTime @default(now())
}

model Application {
  id        Int               @id @default(autoincrement())
  studentId Int
  driveId   Int
  status    ApplicationStatus @default(APPLIED)

  student Student @relation(fields: [studentId], references: [id])
  drive   Drive   @relation(fields: [driveId], references: [id])

  appliedAt DateTime @default(now())

  @@unique([studentId, driveId])
  @@index([driveId, status])
}
```

Version note from the source: this example uses the conventional `prisma-client-js` generator and `url` in the datasource block. Prisma versions may use different generator or adapter configurations. Follow the setup for your installed version rather than mixing configurations from different major versions.

**Q8.31. Explain the Prisma schema.**

```prisma
model Student {
  id    Int    @id @default(autoincrement())
  email String @unique
}
```

- `model`: Defines a database model.
- `Int`: Integer field.
- `@id`: Primary key.
- `@default(autoincrement())`: Generates an incrementing ID.
- `@unique`: Creates a uniqueness constraint.

Other useful attributes:

| Attribute    | Purpose                           |
| ------------ | --------------------------------- |
| `@id`        | Primary key                       |
| `@unique`    | Unique constraint                 |
| `@default()` | Default value                     |
| `@updatedAt` | Automatically updates timestamp   |
| `@relation`  | Defines a relationship            |
| `@@index`    | Adds an index                     |
| `@@unique`   | Composite uniqueness              |
| `@map`       | Maps a field to a database column |
| `@@map`      | Maps a model to a table           |

#### Understanding Prisma relationships

```prisma
model Company {
  id     Int     @id @default(autoincrement())
  name   String
  drives Drive[]
}

model Drive {
  id        Int     @id @default(autoincrement())
  role      String
  companyId Int

  company Company @relation(
    fields: [companyId],
    references: [id]
  )
}
```

This represents one company having many drives.

- `Company.drives`: Relation field on the one side.
- `Drive.company`: Relation field on the many side.
- `Drive.companyId`: Actual foreign-key scalar field in the database.

**Q8.32. Difference between a relation field and a scalar field in Prisma?**

`company` is a relation field used by Prisma to navigate the relationship. `companyId` is a scalar field representing the actual foreign key stored in the database.



## Prisma Migrations and Queries

#### Generate and migrate

Run:

```bash
npx prisma migrate dev --name init
```

In the conventional setup, this:

1. Creates a migration from schema changes.
2. Applies the migration to the development database.
3. Generates Prisma Client.

If needed, generate the client separately:

```bash
npx prisma generate
```

Inspect the database visually:

```bash
npx prisma studio
```

Prisma Studio opens a browser interface to view and edit database records.

**Q8.33. What is a migration?**

A migration is a version-controlled change to the database schema.

For example:

- First migration: Create students.
- Second migration: Add companies.
- Third migration: Add drives and applications.
- Fourth migration: Add an index.

Migration history lets a team apply schema changes consistently across environments.

**Q8.34. Difference between **`migrate dev`** and **`migrate deploy`**?**

| Command                 | Purpose                                     |
| ----------------------- | ------------------------------------------- |
| `prisma migrate dev`    | Development: creates and applies migrations |
| `prisma migrate deploy` | Deployment: applies existing migrations     |
| `prisma migrate status` | Checks migration status                     |
| `prisma generate`       | Generates Prisma Client                     |

Never use `migrate dev` as the normal production deployment migration command.

#### Create a student

```javascript
const student = await prisma.student.create({
  data: {
    name: "Chirag",
    email: "chirag@example.com",
    department: "CSE",
    cgpa: 8.2
  }
});

console.log(student);
```

Conceptual result:

```json
{
  "id": 1,
  "name": "Chirag",
  "email": "chirag@example.com",
  "department": "CSE",
  "cgpa": "8.20"
}
```

The actual representation of decimal values depends on the Prisma Decimal type and serialization.

#### Read records

Find all:

```javascript
const students = await prisma.student.findMany();
```

Find by unique email:

```javascript
const student = await prisma.student.findUnique({
  where: { email: "chirag@example.com" }
});
```

Find first matching record:

```javascript
const student = await prisma.student.findFirst({
  where: { department: "CSE" }
});
```

Differences:

- `findUnique`: Searches using a unique field or unique constraint.
- `findFirst`: Returns the first matching record.
- `findMany`: Returns all matching records.

#### Update and delete

```javascript
const updatedStudent = await prisma.student.update({
  where: { id: 1 },
  data: { cgpa: 8.5 }
});
```

```javascript
const deletedStudent = await prisma.student.delete({
  where: { id: 1 }
});
```

`delete()` throws an error if the unique record does not exist. Handle that case in your API.

#### Filtering

```javascript
const students = await prisma.student.findMany({
  where: {
    department: "CSE",
    cgpa: { gte: 8.0 }
  }
});
```

| Prisma operator | Meaning                   |
| --------------- | ------------------------- |
| `equals`        | Exact match               |
| `contains`      | Contains text             |
| `startsWith`    | Starts with               |
| `gt`            | Greater than              |
| `gte`           | Greater than or equal     |
| `lt`            | Less than                 |
| `lte`           | Less than or equal        |
| `in`            | Matches one of the values |
| `not`           | Negates a condition       |

#### Sorting and pagination

Offset-based:

```javascript
const students = await prisma.student.findMany({
  where: { department: "CSE" },
  orderBy: { cgpa: "desc" },
  skip: 0,
  take: 10
});
```

Cursor-based:

```javascript
const students = await prisma.student.findMany({
  take: 10,
  cursor: { id: 100 },
  skip: 1,
  orderBy: { id: "asc" }
});
```

The `skip: 1` avoids returning the cursor record itself.

#### Select only required fields

```javascript
const students = await prisma.student.findMany({
  select: {
    id: true,
    name: true,
    email: true
  }
});
```

This reduces unnecessary data retrieval and helps prevent exposing fields the API does not need.

**Q8.35. Difference between **`select`** and **`include`**?**

- `select`: Specifies exactly which fields and relations to return.
- `include`: Returns the model's default scalar fields plus specified relations.

```javascript
const student = await prisma.student.findUnique({
  where: { id: 1 },
  include: { applications: true }
});
```

This retrieves the student and their related applications.

#### Nested writes

Create a company and its first drive in one nested operation:

```javascript
const company = await prisma.company.create({
  data: {
    name: "Example Technologies",
    website: "https://example.com",
    drives: {
      create: {
        role: "Backend Developer",
        package: 800000
      }
    }
  },
  include: {
    drives: true
  }
});
```

Prisma supports nested writes for creating and connecting related records. Nested writes are transactional.

#### Connect existing records

Create an application for an existing student and drive:

```javascript
const application = await prisma.application.create({
  data: {
    student: { connect: { id: 1 } },
    drive: { connect: { id: 10 } }
  }
});
```

The database's foreign-key and unique constraints still apply.



## Prisma Transactions

**Q8.36. How do you execute multiple Prisma queries in one transaction?**

There are two common transaction patterns.

**1. Sequential transaction**

```javascript
const result = await prisma.$transaction([
  prisma.student.update({
    where: { id: 1 },
    data: { name: "Chirag Vasava" }
  }),

  prisma.application.updateMany({
    where: { studentId: 1 },
    data: { status: "SHORTLISTED" }
  })
]);
```

The operations execute as one transaction. If the transaction fails, changes are rolled back.

**2. Interactive transaction**

Use an interactive transaction when later operations depend on earlier query results or when conditional application logic is required.

```javascript
const result = await prisma.$transaction(async (tx) => {
  const application = await tx.application.update({
    where: { id: 101 },
    data: { status: "OFFERED" }
  });

  const offer = await tx.offer.create({
    data: {
      applicationId: application.id,
      status: "PENDING"
    }
  });

  return { application, offer };
});
```

`tx` is the transaction-scoped Prisma Client. Queries executed through it participate in the transaction.

Avoid slow external network calls inside a database transaction. Holding a transaction open for a long time can increase lock contention and consume database resources.

**Q8.37. How do you prevent duplicate applications?**

Use three layers:

1. Validate the incoming request.
2. Check for an existing application when useful for user feedback.
3. Enforce `@@unique([studentId, driveId])` in the database.

Why is the third one essential? Two requests may arrive simultaneously. Both can pass the initial application-level check. The database uniqueness constraint is the final authority.

Catch Prisma's unique constraint error, commonly `P2002`, and return HTTP `409 Conflict`.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
