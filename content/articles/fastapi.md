# FastAPI

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 22451–22529](/research?document=interview&start=22451&end=22529). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## FastAPI Fundamentals and Request Lifecycle

### What Does FastAPI Provide?

FastAPI is a Python web framework for HTTP APIs. A path operation maps a method and URL to a Python function. Type annotations and Pydantic models describe request data; the framework uses those declarations for validation and API documentation. An ASGI server such as Uvicorn runs the application.

Follow the request through routing, parameter parsing, dependencies, endpoint logic and response serialization. Framework validation does not replace business rules, database constraints or authorization.

### Request Models, Response Models and Errors

Use separate input and output models when the fields differ. For example, a registration request may contain a password, but the response must not include it or its stored hash. A response model validates and filters returned data to the declared output shape. [Official response-model guide](https://fastapi.tiangolo.com/tutorial/response-model/).

This is an in-memory teaching example; it loses data on restart and is unsuitable as shared storage across multiple server workers.

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

app = FastAPI()

class StudentCreate(BaseModel):
    name: str = Field(min_length=1, max_length=100)

class StudentRead(BaseModel):
    id: int
    name: str

students: dict[int, StudentRead] = {}

@app.post("/students", response_model=StudentRead, status_code=201)
def create_student(payload: StudentCreate) -> StudentRead:
    name = payload.name.strip()
    if not name:
        raise HTTPException(status_code=422, detail="Name must not be blank")
    student = StudentRead(id=len(students) + 1, name=name)
    students[student.id] = student
    return student

@app.get("/students/{student_id}", response_model=StudentRead)
def read_student(student_id: int) -> StudentRead:
    student = students.get(student_id)
    if student is None:
        raise HTTPException(status_code=404, detail="Student not found")
    return student
```

The model checks length; the endpoint also rejects a whitespace-only name. A missing student produces 404 rather than an unhandled lookup error. A production implementation delegates persistence to the database phase's transaction and uniqueness rules.

### Dependencies, Routers and Resource Lifetime

A dependency supplies a reusable requirement such as validated pagination, a database session or the current user. FastAPI resolves declared dependencies before running the endpoint. A dependency using `yield` can arrange resource cleanup. [Official dependency guide](https://fastapi.tiangolo.com/tutorial/dependencies/).

Use `APIRouter` to group endpoints by feature. Keep routing, business decisions and persistence separable so business behavior can be tested without a live HTTP request. Reuse an engine/pool, but give each request an appropriate session lifetime; do not share one mutable session among concurrent requests.

### When Should an Endpoint Use async def?

Use `async def` when calling awaitable I/O libraries. A blocking database call inside an async endpoint can stall the event loop. Ordinary synchronous path operations are run through a thread pool; that does not make their database driver asynchronous. CPU-intensive analysis may require a separate process or worker. [Official concurrency guide](https://fastapi.tiangolo.com/async/).

### Integration and Testing

Complete the SQLAlchemy lesson before adding database persistence. Use the security phase for JWT verification and per-resource authorization. Use the testing phase to cover successful requests, invalid input, missing records and unauthorized access. Override dependencies in tests to isolate external services.

Small post-response background tasks can suit best-effort work. Durable jobs need persistent scheduling, retries and failure monitoring; a process crash must not silently lose business-critical work.

### FastAPI Interview Check

1. **What is the difference between a Pydantic model and an ORM model?** One describes validated data at an application boundary; the other maps persistence. They may represent different fields and lifetimes.
2. **Why use dependency injection?** It makes resource provisioning, authorization prerequisites and test substitution explicit.
3. **Does async always make code faster?** No. It helps concurrency during suitable waiting; CPU work and blocking libraries need separate consideration.
4. **How would you structure a CRUD service?** Router → service → persistence, with input/output models, request-scoped sessions, explicit errors and tests.

**Practice:** Implement create/read/list student endpoints with bounded pagination, database persistence and tests. Add authorization after studying security. Explain each request's session and transaction lifecycle.

---

---

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
