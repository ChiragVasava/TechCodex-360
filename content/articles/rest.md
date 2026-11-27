# REST API design

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 20684–20718](/research?document=interview&start=20684&end=20718). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## REST API Design

**Q11.42. What is REST?**

Answer: REST stands for Representational State Transfer. It is an architectural style for networked applications. Its principles include client-server separation, stateless communication, cacheability, a uniform interface, and a layered system.

**Q11.43. How do you design RESTful endpoints?**

Answer: Use resource-oriented URLs and HTTP methods that express the operation.

```http
GET    /api/students
GET    /api/students/:id
POST   /api/students
PUT    /api/students/:id
PATCH  /api/students/:id
DELETE /api/students/:id
```

Avoid action-heavy URLs such as `/api/deleteStudent` when the HTTP method already expresses the action.

**Q11.44. What is statelessness in REST?**

Answer: Each request should contain the information needed to process it. The server should not rely on conversational session state held only in memory between requests. Statelessness does not mean the server cannot use databases or caches.

**Q11.45. What is pagination?**

Answer: Pagination divides large result sets into smaller pages. For example, `GET /api/students?page=2&limit=10` requests the second page of ten records. For large datasets, pagination should happen at the database level; cursor-based pagination may be more stable for frequently changing data.

**Q11.46. What is API versioning?**

Answer: API versioning allows an API to evolve while maintaining compatibility for existing clients. A common approach is URL versioning, such as `/api/v1/students` and `/api/v2/students`. Versioning is particularly useful when response structures or endpoint behaviour change in breaking ways.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
