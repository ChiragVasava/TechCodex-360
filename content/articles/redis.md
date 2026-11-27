# Redis

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 16433–16721](/research?document=interview&start=16433&end=16721). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Redis fundamentals

### Q9.36. What is Redis?

Redis is an in-memory data store that supports multiple data structures.

It is commonly used for:

- Caching
- Session storage
- Rate limiting
- Real-time leaderboards
- Temporary verification codes
- Pub/Sub messaging
- Queues and streams
- Distributed coordination

### Q9.37. Why is Redis fast?

Redis keeps its working dataset in memory and uses efficient data structures and command execution.

Compared with a database query that may involve storage access, a Redis lookup can often be served directly from memory.

However, Redis is not automatically a replacement for PostgreSQL or MongoDB.

### Q9.38. Redis vs PostgreSQL vs MongoDB

| Feature       | PostgreSQL                  | MongoDB                    | Redis                        |
| ------------- | --------------------------- | -------------------------- | ---------------------------- |
| Main role     | Relational database         | Document database          | In-memory data store         |
| Data model    | Tables                      | Documents                  | Keys and data structures     |
| Typical use   | Durable application records | Flexible documents         | Cache, sessions, counters    |
| Querying      | SQL                         | MongoDB query language     | Commands and data structures |
| Persistence   | Durable database storage    | Durable database storage   | Configurable persistence     |
| Relationships | Foreign keys and joins      | References and aggregation | Usually application-managed  |

A common real-world architecture:

- PostgreSQL stores students and applications.
- MongoDB stores flexible resume documents, if justified.
- Redis caches frequently requested student profiles or stores temporary session data.



## Redis architecture and data structures

### Q9.39. What is a Redis key-value pair?

Redis stores values under keys.

Example:

```text
Key: student:1:name
Value: Chirag
```

A basic Redis command:

```redis
SET student:1:name "Chirag"
GET student:1:name
```

Expected result:

```text
"Chirag"
```

### Q9.40. What are Redis data structures?

Redis supports several important data structures:

**1. Strings**

Store text, numbers, serialized data, and counters.

```redis
SET user:1:name Chirag
```

**2. Lists**

Ordered collections of strings.

```redis
LPUSH jobs job1
```

**3. Sets**

Unordered collections of unique members.

```redis
SADD skills Python Java
```

**4. Sorted sets**

Unique members associated with scores. Useful for leaderboards.

**5. Hashes**

Field-value mappings, useful for representing objects.

```redis
HSET user:1 name Chirag age 21
```

Other important Redis capabilities include bitmaps, HyperLogLog, Streams, and geospatial indexes.

### Q9.41. How do Redis commands work?

Run Redis locally through Docker:

```bash
docker run -d \
  --name redis \
  -p 6379:6379 \
  redis:8
```

Open the CLI:

```bash
docker exec -it redis redis-cli
```

Check the connection:

```redis
PING
```

Expected:

```text
PONG
```

**String commands**

```redis
SET name "Chirag"
GET name
```

**Counter commands**

```redis
SET page_views 0
INCR page_views
INCR page_views
GET page_views
```

Result:

```text
"2"
```

**Expiration commands**

```redis
SET otp:123456 "verified" EX 60
TTL otp:123456
```

The `EX 60` sets an expiration of 60 seconds.

Useful commands:

| Command  | Purpose                |
| -------- | ---------------------- |
| `SET`    | Store a value          |
| `GET`    | Retrieve a value       |
| `DEL`    | Delete a key           |
| `EXISTS` | Check if a key exists  |
| `EXPIRE` | Set expiration         |
| `TTL`    | Get remaining lifetime |
| `INCR`   | Increment a number     |
| `DECR`   | Decrement a number     |

### Q9.42. What is TTL?

TTL stands for **Time To Live**.

It determines how long a key remains available before Redis automatically expires it.

```redis
SET session:101 "active" EX 3600
```

The session expires after one hour.

TTL is especially useful for:

- OTPs
- Temporary verification tokens
- Cache entries
- Short-lived sessions
- Rate-limit counters

### Q9.43. How do Redis hashes work?

```redis
HSET student:1 name Chirag department CSE cgpa 8.2
```

Retrieve one field:

```redis
HGET student:1 name
```

Retrieve all fields:

```redis
HGETALL student:1
```

Update one field:

```redis
HSET student:1 cgpa 8.5
```

### Q9.44. What are Redis lists and sets?

**List:**

```redis
LPUSH notifications:1 "New application received"
LPUSH notifications:1 "Interview scheduled"

LRANGE notifications:1 0 -1
```

**Set:**

```redis
SADD student:1:skills Python JavaScript SQL
SMEMBERS student:1:skills
```

A set removes duplicates automatically.

### Q9.45. What are Redis sorted sets?

Sorted sets maintain unique members ordered by score.

```redis
ZADD leaderboard 95 Chirag
ZADD leaderboard 90 Rahul
ZADD leaderboard 98 Priya
```

Retrieve highest scores:

```redis
ZREVRANGE leaderboard 0 2 WITHSCORES
```

This can be used for leaderboards, ranking systems, and prioritization.

### Q9.46. What is Redis Pub/Sub?

Pub/Sub stands for **Publish/Subscribe**.

A publisher sends a message to a channel, and subscribers listening to that channel receive it.

Subscriber:

```redis
SUBSCRIBE notifications
```

Publisher:

```redis
PUBLISH notifications "New placement drive posted"
```

Pub/Sub is useful for real-time notifications, but ordinary Pub/Sub does not provide durable message storage or guaranteed delivery to disconnected subscribers. Redis Streams or a dedicated message broker may be more appropriate when persistence and consumer tracking are needed.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
