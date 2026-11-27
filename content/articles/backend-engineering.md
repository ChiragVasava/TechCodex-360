# Backend engineering

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 20273–20303](/research?document=interview&start=20273&end=20303). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Backend Development Fundamentals

**Q11.1. What is backend development?**

Answer: Backend development involves building the server-side part of an application. It manages business logic, database operations, authentication, APIs, validation, security, file processing, and external integrations.

**Q11.2. What is the difference between frontend and backend?**

Answer: The frontend is the user interface that users interact with, usually running in a browser. The backend processes requests, applies business rules, communicates with databases, and returns responses. React and Next.js are frontend technologies; Node.js and Express are backend technologies.

**Q11.3. What is an API?**

Answer: API stands for Application Programming Interface. It defines how different software systems communicate. For example, a student API may expose `GET /api/students`, `POST /api/students`, and `DELETE /api/students/:id`.

**Q11.4. What is JSON?**

Answer: JSON stands for JavaScript Object Notation. It is a lightweight data-interchange format commonly used by APIs.

```json
{
  "id": 101,
  "name": "Chirag",
  "course": "CSE",
  "active": true
}
```

JavaScript converts objects to JSON text with `JSON.stringify()` and parses JSON text with `JSON.parse()`. JSON does not support JavaScript functions, `undefined`, or comments.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
