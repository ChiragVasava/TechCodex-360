# React reconciliation

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 17797–17909](/research?document=interview&start=17797&end=17909). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Virtual DOM and Reconciliation

### Q10.17. What is the Virtual DOM?

**Answer:**

The Virtual DOM is a common informal name for the in-memory representation of the UI that React works with.

React elements describe what the UI should look like.

When state or props change, React calculates the next UI representation and reconciles it with the previous one.

It then commits the necessary changes to the actual DOM.

Simplified flow:

1. Component renders.
2. React receives the new element description.
3. React reconciles it with the previous description.
4. React determines necessary updates.
5. React commits relevant changes to the DOM.

Important: React does not necessarily recreate the entire real DOM every time a component renders.

### Q10.18. What is React reconciliation?

**Answer:**

Reconciliation is React's process for comparing the previous rendered element tree with the new one to determine how the UI should be updated.

React uses element types, positions and keys to determine whether to preserve or replace component state and DOM.

For example:

```jsx
function App({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <Dashboard /> : <Login />}
    </div>
  );
}
```

If the component type changes from `Login` to `Dashboard`, React treats them as different component identities.

### Q10.19. What are React keys, and why are they important?

**Answer:**

Keys help React identify individual elements in a list across renders.

Incorrect:

```javascript
{students.map(student => (
  <StudentCard name={student.name} />
))}
```

Correct:

```javascript
{students.map(student => (
  <StudentCard
    key={student.id}
    name={student.name}
  />
))}
```

Why keys matter:

- Identify elements between renders.
- Help preserve component identity.
- Help React correctly insert, remove and reorder elements.
- Avoid incorrect state association in lists.

**Why avoid array indexes as keys?**

Consider:

```text
Index 0: Amit
Index 1: Chirag
Index 2: Raj
```

If Amit is deleted, the indexes shift. React may associate previous component state with the wrong student.

Prefer stable IDs.

Use an index only when the list is static and will not be reordered, inserted into or deleted from.

### Q10.20. Does React update the entire page whenever state changes?

**Answer:**

No.

A state update schedules React to render the component again. React reconciles the new output and commits the required changes.

A render does not automatically mean the entire DOM is replaced.

Also remember:

- A component may render without its DOM output changing.
- A parent rendering may cause its children to render.
- Memoization can sometimes skip child rendering.
- Reconciliation and DOM commit are separate steps.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
