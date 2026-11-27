# API testing

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 25499–25637](/research?document=interview&start=25499&end=25637). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## API Testing

### Q14.27. What is API testing?

API testing verifies that application programming interfaces behave correctly.

It checks:

- HTTP status codes.
- Response body.
- Headers.
- Authentication.
- Authorization.
- Input validation.
- Error handling.
- Response time.
- Database side effects.

Consider this endpoint:

```http
POST /api/students
Content-Type: application/json
Authorization: Bearer <token>
```

Request:

```json
{
  "name": "Chirag",
  "email": "chirag@example.com"
}
```

Expected response:

```text
201 Created
```

```json
{
  "id": 101,
  "name": "Chirag",
  "email": "chirag@example.com"
}
```

### Q14.28. How do you test APIs using Postman?

Postman can send API requests and inspect their responses.

Typical workflow:

1. Create a collection.
2. Add an HTTP request.
3. Select the method.
4. Enter the endpoint URL.
5. Add headers.
6. Add the request body.
7. Send the request.
8. Verify status code and response.
9. Write automated assertions.

Example Postman tests:

```javascript
pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});

pm.test("Response contains student name", function () {
    const response = pm.response.json();

    pm.expect(response.name).to.eql("Chirag");
});
```

### Q14.29. How do you test a REST API using Python?

Install:

```bash
pip install requests pytest
```

Create a test:

```python
import requestsBASE_URL = "http://localhost:8000"def test_health_endpoint():    response = requests.get(        f"{BASE_URL}/health",        timeout=5    )    assert response.status_code == 200    data = response.json()    assert data["status"] == "ok"
```

Run:

```bash
pytest -v
```

The backend must be running before this test.

### Q14.30. API unit testing vs API integration testing

**API unit testing:** Tests individual endpoint logic or service functions in isolation, often with dependencies mocked.

**API integration testing:** Tests the endpoint together with actual dependencies, such as the database, authentication middleware and service layer.

**Unit test**

```text
studentService.createStudent()
          ↓
     Mock repository
          ↓
    Verify result
```

**Integration test**

```text
HTTP POST /students
          ↓
     Express route
          ↓
      Middleware
          ↓
      Controller
          ↓
       Service
          ↓
   Test PostgreSQL DB
          ↓
   Verify saved record
```

Both are necessary.

## Connected study

Continue with [testing](/knowledge/testing) and the [complete study library](/study).
