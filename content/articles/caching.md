# Caching

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 16722–16873](/research?document=interview&start=16722&end=16873). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Caching fundamentals

### Q9.47. What is caching?

Caching means temporarily storing frequently accessed data so that future requests can retrieve it faster.

Imagine a recruitment platform has 10,000 users requesting the same list of active placement drives.

Without caching:

```text
Client → Express → PostgreSQL → Result → Client
```

Every request queries the database.

With Redis caching:

```text
Client → Express → Redis → Cached result → Client
```

If the cache contains the result, the database query can be avoided.

### Q9.48. What is a cache hit and cache miss?

- **Cache hit:** Requested data exists in the cache.
- **Cache miss:** Requested data is not in the cache, so the application must retrieve it from the original data source.

Example:

```text
Request 1:
Redis → MISS
PostgreSQL → Fetch data
Redis → Store data

Request 2:
Redis → HIT
Return cached data
```

### Q9.49. What is cache-aside?

Cache-aside, also called lazy loading, is a commonly used caching strategy.

Steps:

1. Check Redis.
2. If found, return cached data.
3. If missing, query the database.
4. Store the result in Redis.
5. Return the result.

```javascript
async function getStudent(id) {
  const cached = await redis.get(`student:${id}`);

  if (cached) {
    return JSON.parse(cached);
  }

  const student = await database.getStudent(id);

  if (!student) {
    return null;
  }

  await redis.set(
    `student:${id}`,
    JSON.stringify(student),
    "EX",
    300
  );

  return student;
}
```

The example uses a common Redis client calling style; the exact API differs between Redis client versions.

### Q9.50. What are the common caching strategies?

| Strategy      | How it works                                               |
| ------------- | ---------------------------------------------------------- |
| Cache-aside   | Application reads cache, then database on miss             |
| Read-through  | Cache layer loads missing data from the data source        |
| Write-through | Writes go to cache and data source together                |
| Write-behind  | Writes are initially buffered in cache and persisted later |
| Refresh-ahead | Cache refreshes data before expiration                     |

For many ordinary Express applications, cache-aside is a practical starting point.

### Q9.51. What is cache invalidation?

Cache invalidation means removing or updating cached data when the original data changes.

Imagine Redis contains:

```text
student:1 → { name: "Chirag", cgpa: 8.2 }
```

PostgreSQL gets updated:

```text
cgpa = 8.5
```

But Redis still contains `8.2`. This is stale data.

One solution is deleting the cache after a successful database update:

```javascript
await prisma.student.update({
  where: { id: 1 },
  data: { cgpa: 8.5 }
});

await redis.del("student:1");
```

The next request reloads fresh data.

Cache invalidation becomes harder when multiple services update the same data, when updates happen asynchronously, or when one database record appears in multiple cache keys.

### Q9.52. What is cache stampede?

A cache stampede happens when a popular cache entry expires and many simultaneous requests all attempt to reload the same data from the database.

Possible solutions:

- Use a short refresh lock.
- Add TTL jitter.
- Refresh popular entries in the background.
- Use request coalescing.
- Stagger refreshes.

### Q9.53. Difference between cache and database?

| Cache                     | Database                                             |
| ------------------------- | ---------------------------------------------------- |
| Optimized for fast access | Optimized for persistent data management             |
| Often temporary           | Usually durable                                      |
| Frequently stores copies  | Stores authoritative records                         |
| May evict entries         | Data retained according to database policies         |
| Often has TTL             | Usually has explicit retention and deletion policies |

**Interview answer:** PostgreSQL should remain the source of truth for student applications. Redis can store temporary or frequently accessed copies to improve performance.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
