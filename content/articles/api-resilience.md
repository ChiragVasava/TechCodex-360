# Resilient external APIs

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 22239–22325](/research?document=interview&start=22239&end=22325). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Resilient external APIs

#### What is the difference between SSE and WebSockets?

| SSE                              | WebSockets                               |
| -------------------------------- | ---------------------------------------- |
| Server-to-client event streaming | Two-way communication                    |
| Uses HTTP-based event streaming  | Uses WebSocket protocol                  |
| Client sends requests separately | Both sides can send messages             |
| Useful for streamed responses    | Useful for interactive real-time systems |

Why did you use SSE?

DOMLens primarily needs to receive generated AI responses progressively. SSE fits that server-to-client streaming requirement.

#### What is exponential backoff?

Interview question: How do you handle temporary API failures?

Interview-ready answer

Exponential backoff is a retry strategy where the waiting time increases after each failed attempt.

Instead of retrying continuously, the application waits longer between attempts.

DOMLens uses retry limits and exponential backoff for temporary service-capacity failures such as HTTP 503.

**Example**

| Attempt | Waiting time |
| ------- | ------------ |
| 1       | 1 second     |
| 2       | 2 seconds    |
| 3       | 4 seconds    |
| 4       | 8 seconds    |

The general formula is:

\\[ T_n = T_0 \times 2^n \\]

Where:

- \\(T_0\\) is the initial waiting time.
- \\(n\\) is the retry number.

This is an illustrative formula; actual implementations may include a maximum delay and random jitter.

**What is jitter?**

Jitter adds randomness to retry delays.

It prevents many clients from retrying at exactly the same time.

#### What is a circuit breaker pattern?

Interview question: Explain circuit breaker in your project.

Interview-ready answer

The circuit breaker pattern is a reliability technique that temporarily stops requests to an unhealthy service to avoid repeatedly calling a provider that is failing.

DOMLens implements a cascading fallback approach across configured AI models. It can move away from models experiencing capacity errors or unavailable model IDs.

For example, it handles:

- HTTP 503 capacity failures using retry and fallback logic.
- HTTP 404 model-not-found errors by removing or skipping the unavailable model.

**Three common circuit breaker states**

Closed

Requests are allowed normally.

Open

Requests are blocked temporarily because of failures.

Half-open

A limited request tests whether the service has recovered.

These are the standard circuit-breaker states. Do not automatically claim that your implementation uses every textbook state transition unless you can point to the corresponding code. Your project audit specifically documents cascading fallbacks, retries, model ejection, and capacity recovery.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
