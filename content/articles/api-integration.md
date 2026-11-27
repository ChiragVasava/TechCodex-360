# API integration

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 19147–19317](/research?document=interview&start=19147&end=19317). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## API Integration and Full-Stack Communication

### Q10.52. How does React communicate with a backend?

**Answer:**

React sends HTTP requests to a backend API using Fetch or Axios.

Typical architecture:

```text
React Frontend
User interface, forms, state
          |
          | HTTP / JSON
          v
Express.js / FastAPI Backend
Routes, middleware, business logic
          |
          v
Database
PostgreSQL / MySQL / MongoDB
```

Example flow:

1. User clicks Add Student.
2. React collects the form data.
3. React sends a POST request.
4. Backend validates the request.
5. Backend executes business logic.
6. Database stores the record.
7. Backend returns JSON.
8. React updates the UI.

### Q10.53. How do you implement GET and POST requests in React?

**Answer:**

Separate API communication from UI components.

`src/services/studentService.js`:

```javascript
const API_URL = "http://localhost:3000/api/students";

export async function getStudents() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch students");
  }

  return response.json();
}

export async function createStudent(student) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(student)
  });

  if (!response.ok) {
    throw new Error("Failed to create student");
  }

  return response.json();
}
```

Component:

```jsx
import { useEffect, useState } from "react";
import { getStudents } from "./services/studentService";

function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function loadStudents() {
      try {
        const result = await getStudents();

        if (!ignore) {
          setStudents(result);
        }

      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }

      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadStudents();

    return () => {
      ignore = true;
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {students.map(student => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
}
```

The `ignore` flag prevents an outdated request result from updating an unmounted or superseded component. For cancellation of network work, combine this pattern with `AbortController`.

### Q10.54. What is CORS, and why does it matter in React?

**Answer:**

CORS stands for Cross-Origin Resource Sharing.

Browsers enforce the Same-Origin Policy. CORS allows a server to specify which cross-origin requests browsers may permit.

Suppose:

```text
Frontend: http://localhost:5173
Backend:  http://localhost:3000
```

These have different origins because their ports differ.

The backend may need to configure CORS.

Express example:

```bash
npm install cors
```

```javascript
import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());
```

Important: CORS is enforced by browsers. It is not a replacement for backend authentication or authorization.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
