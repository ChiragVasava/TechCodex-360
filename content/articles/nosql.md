# NoSQL

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 15431–15494](/research?document=interview&start=15431&end=15494). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## NoSQL fundamentals

**Q9.1. Difference between SQL and NoSQL databases?**

SQL/relational databases store data in structured tables with defined schemas and relationships. Examples include PostgreSQL, MySQL, and Oracle.

NoSQL databases use models such as documents, key-value pairs, graphs, or wide-column records. Examples include MongoDB, Redis, and Cassandra.

| Feature        | SQL                     | NoSQL                        |
| -------------- | ----------------------- | ---------------------------- |
| Data model     | Usually tables          | Documents, key-value, etc.   |
| Schema         | Generally predefined    | Often flexible               |
| Relationships  | Foreign keys and joins  | Often embedded or referenced |
| Query language | SQL                     | Varies                       |
| Transactions   | Commonly strong support | Depends on database          |

**When would you choose PostgreSQL over MongoDB?**

Choose PostgreSQL when an application has structured data, strong relationships, transactional workflows, and consistency requirements. A recruitment platform has relationships between students, drives, and applications, making PostgreSQL a natural choice.

MongoDB may suit document-oriented data with varying structures or nested documents. NoSQL does not automatically mean faster or more scalable; the decision depends on workload and access patterns.


### Q9.2. What is NoSQL?

NoSQL means **“Not Only SQL.”** It refers to database systems that use data models other than, or in addition to, traditional relational tables.

NoSQL databases are commonly used when applications need flexible data structures, specific access patterns, horizontal scaling, or specialized data models.

The four main categories are:

| Category    | How it stores data                 | Examples              |
| ----------- | ---------------------------------- | --------------------- |
| Document    | JSON-like documents                | MongoDB, Couchbase    |
| Key-value   | Values associated with unique keys | Redis, DynamoDB       |
| Wide-column | Rows and flexible column families  | Cassandra, HBase      |
| Graph       | Nodes and relationships            | Neo4j, Amazon Neptune |

### Q9.3. Why do applications use NoSQL databases?

Common reasons include:

1. Flexible document structures.
2. Natural representation of nested data.
3. Access patterns that suit key-value storage.
4. Horizontal scaling options.
5. Specialized capabilities for graphs, wide-column data, or caching.

**Recruitment-platform example**

A student profile might contain:

- Personal information
- Skills
- Certifications
- Projects
- Education history
- Social links

These sections can have different structures across users. MongoDB documents can represent this kind of data naturally.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
