# MongoDB transactions

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 16222–16286](/research?document=interview&start=16222&end=16286). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## MongoDB transactions and consistency

### Q9.30. Does MongoDB support ACID transactions?

Yes. MongoDB supports atomic operations on individual documents and multi-document transactions.

Single-document atomicity is an important design feature.

For example:

```javascript
db.students.updateOne(
  { _id: ObjectId("...") },
  {
    $set: {
      "education.university": "MSU"
    }
  }
);
```

The update to that document is atomic.

If an operation needs to modify multiple documents or collections as one unit, you can use a multi-document transaction.

### Q9.31. What is a replica set?

A replica set is a group of MongoDB servers that maintain the same dataset.

Typical roles:

- **Primary:** accepts writes.
- **Secondary:** replicates data from the primary.
- **Other eligible members:** may participate in elections and availability.

Benefits:

- High availability.
- Automatic primary election in suitable failure scenarios.
- Data redundancy.
- Read scaling in appropriate workloads.

### Q9.32. What is sharding?

Sharding distributes data across multiple machines.

MongoDB sharding involves:

- **Shards:** store portions of the dataset.
- **Config servers:** store cluster metadata.
- **mongos:** routes application queries to appropriate shards.

Sharding helps scale data and workload across machines, but introduces operational and data-model complexity.

### Q9.33. Replication vs sharding?

| Replication                 | Sharding                                  |
| --------------------------- | ----------------------------------------- |
| Copies data across members  | Splits data across shards                 |
| Improves availability       | Enables horizontal data distribution      |
| Has primary/secondary roles | Uses shard routing and distribution       |
| Can support read scaling    | Can support capacity and workload scaling |

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
