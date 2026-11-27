# Idempotency

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 31328–31375](/research?document=interview&start=31328&end=31375). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Idempotency and Duplicate Prevention


### Q17.32. How do you implement an idempotency key?

The client sends a unique key for the logical operation:

```http
POST /api/payments
Idempotency-Key: order-101-payment-attempt-1
```

The backend associates that key with the operation and its result.

A simple table:

```sql
CREATE TABLE idempotency_records (
    id BIGSERIAL PRIMARY KEY,
    idempotency_key VARCHAR(255) UNIQUE NOT NULL,
    response_status INTEGER,
    response_body JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Conceptual backend workflow:

1. Validate the key.
2. Atomically reserve the key.
3. If a completed record exists, return its stored result.
4. If another request is currently processing it, handle that in-progress state safely.
5. Perform the business operation.
6. Store the outcome.
7. Return the result.

In a real payment system, concurrent requests need database constraints and careful transaction handling. A simple “check, then insert” sequence is not enough.


### Q17.33. Idempotency vs deduplication

- **Idempotency:** Repeating a logical request does not repeat its side effect.
- **Deduplication:** Detecting and ignoring repeated events or records.

For example, a payment webhook may be delivered several times. Store the provider's unique event ID and ensure its business effect is processed only once.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
