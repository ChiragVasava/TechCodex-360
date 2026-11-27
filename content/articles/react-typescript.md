# React with TypeScript

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 19435–19594](/research?document=interview&start=19435&end=19594). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## React with TypeScript

### Q10.60. How do you define typed React props?

**Answer:**

Use an interface to define the expected properties.

```tsx
interface Student {
  id: number;
  name: string;
  course: string;
}

interface StudentCardProps {
  student: Student;
  onDelete: (id: number) => void;
}

function StudentCard({
  student,
  onDelete
}: StudentCardProps) {
  return (
    <div>
      <h2>{student.name}</h2>
      <p>{student.course}</p>

      <button onClick={() => onDelete(student.id)}>
        Delete
      </button>
    </div>
  );
}
```

This defines exactly what the component expects.

### Q10.61. How do you type useState()?

**Answer:**

We can provide a type explicitly when necessary.

```tsx
import { useState } from "react";

interface User {
  id: number;
  name: string;
}

function Profile() {
  const [user, setUser] = useState<User | null>(null);

  function loadUser() {
    setUser({
      id: 1,
      name: "Chirag"
    });
  }

  return (
    <div>
      <button onClick={loadUser}>Load User</button>
      <p>{user?.name ?? "No user loaded"}</p>
    </div>
  );
}
```

The state can either contain a `User` or `null`.

### Q10.62. How do you type React event handlers?

**Answer:**

TypeScript provides specific event types.

```tsx
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setEmail(event.target.value);
  }

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    console.log(email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
```

Common event types:

| Event          | Type                                    |
| -------------- | --------------------------------------- |
| Input change   | `React.ChangeEvent<HTMLInputElement>`   |
| Form submit    | `React.FormEvent<HTMLFormElement>`      |
| Button click   | `React.MouseEvent<HTMLButtonElement>`   |
| Keyboard event | `React.KeyboardEvent<HTMLInputElement>` |

### Q10.63. How do you create a typed custom Hook?

**Answer:**

We can combine TypeScript interfaces with React state and reusable functions.

```typescript
import { useState } from "react";

interface Student {
  id: number;
  name: string;
}

function useStudents() {
  const [students, setStudents] = useState<Student[]>([]);

  function addStudent(student: Student) {
    setStudents(previous => [...previous, student]);
  }

  function removeStudent(id: number) {
    setStudents(previous =>
      previous.filter(student => student.id !== id)
    );
  }

  return {
    students,
    addStudent,
    removeStudent
  };
}
```

This pattern combines TypeScript interfaces, state management, array methods and reusable logic.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
