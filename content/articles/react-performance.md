# React performance

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 19318–19434](/research?document=interview&start=19318&end=19434). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Performance Optimization

### Q10.55. What is unnecessary re-rendering?

**Answer:**

A component may render more often than necessary due to:

- Parent re-renders.
- State changes.
- Context changes.
- New object or function references.
- Changed props.

Not every re-render is a performance problem.

First measure performance, then optimize.

### Q10.56. What is React.memo()?

**Answer:**

`React.memo()` memoizes a component so React can skip rendering it when its props are unchanged according to its comparison.

```jsx
import React from "react";

const StudentCard = React.memo(function StudentCard({ name }) {
  console.log("StudentCard rendered");

  return <h2>{name}</h2>;
});

export default StudentCard;
```

If the parent renders again but `name` remains unchanged, React can skip rendering `StudentCard`.

By default, React compares props shallowly.

A newly created object or function may still cause a memoized child to render.

### Q10.57. What is lazy loading in React?

**Answer:**

Lazy loading allows code to be loaded only when required.

```jsx
import {
  lazy,
  Suspense
} from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    <Suspense fallback={<p>Loading dashboard...</p>}>
      <Dashboard />
    </Suspense>
  );
}
```

This can reduce the initial JavaScript bundle size.

It is especially useful for large route-level components.

### Q10.58. What is code splitting?

**Answer:**

Code splitting divides application code into smaller chunks that can be loaded when needed.

For example:

```text
Application bundle
│
├── Common components
├── Dashboard chunk
├── Student management chunk
└── Reports chunk
```

Instead of loading everything immediately, the application can load some chunks on demand.

Dynamic imports and React's `lazy()` are common ways to implement this.

### Q10.59. How do you identify React performance problems?

**Answer:**

Use:

- React Developer Tools.
- React Profiler.
- Browser Performance panel.
- Network panel.
- Lighthouse.
- Bundle analysis tools.

Investigate:

- Excessive component rendering.
- Large JavaScript bundles.
- Expensive calculations.
- Unnecessary API requests.
- Large lists.
- Memory leaks.
- Slow images.

For large lists, virtualization libraries can render only the visible portion rather than thousands of DOM elements at once.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
