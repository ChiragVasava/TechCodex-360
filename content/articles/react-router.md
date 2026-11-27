# React Router

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 18983–19146](/research?document=interview&start=18983&end=19146). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## React Router

### Q10.48. What is React Router?

**Answer:**

React Router is a routing library used to create navigation between different views in a React application.

For example:

```text
/
├── /login
├── /dashboard
├── /students
├── /companies
└── /applications
```

Install:

```bash
npm install react-router
```

A typical browser application setup:

```jsx
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/students"
          element={<Students />}
        />
      </Routes>
    </BrowserRouter>
  );
}
```

The current React Router APIs support different package import arrangements depending on the router mode and version. Follow the installed version's documentation.

### Q10.49. What is the difference between Link and a normal anchor tag?

**Answer:**

A React Router `Link` performs client-side navigation.

```jsx
import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/students">Students</Link>
    </nav>
  );
}
```

A normal anchor:

```html
<a href="/dashboard">Dashboard</a>
```

Typically performs browser navigation and may reload the document.

A router `Link` changes the URL and allows the router to render the appropriate route without a full-page navigation.

### Q10.50. What are dynamic routes?

**Answer:**

Dynamic routes use URL parameters.

Example:

```text
/students/101
/students/102
```

Route:

```jsx
<Route
  path="/students/:id"
  element={<StudentDetails />}
/>
```

Read the parameter:

```jsx
import { useParams } from "react-router";

function StudentDetails() {
  const { id } = useParams();

  return <h2>Student ID: {id}</h2>;
}
```

### Q10.51. How do you implement protected routes?

**Answer:**

Protected routes prevent unauthorized users from accessing particular pages.

A simple example:

```jsx
import { Navigate, Outlet } from "react-router";

function ProtectedRoute({ isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
```

Configuration:

```jsx
<Routes>
  <Route path="/login" element={<Login />} />

  <Route element={<ProtectedRoute isAuthenticated={true} />}>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/students" element={<Students />} />
  </Route>
</Routes>
```

Important security point: Frontend route protection is not sufficient security.

The backend must independently verify authentication and authorization for every protected API operation.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
