# Custom Hooks

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 18840–18982](/research?document=interview&start=18840&end=18982). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Custom Hooks

### Q10.46. What is a custom Hook?

**Answer:**

A custom Hook is a JavaScript function whose name starts with `use` and which uses React Hooks internally.

It allows developers to reuse stateful logic between components.

Example:

```javascript
import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount(previous => previous + 1);
  }

  function decrement() {
    setCount(previous => previous - 1);
  }

  return {
    count,
    increment,
    decrement
  };
}
```

Use it:

```jsx
function Counter() {
  const {
    count,
    increment,
    decrement
  } = useCounter(10);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}
```

Benefits:

- Reusable logic.
- Cleaner components.
- Better separation of concerns.
- Easier testing.

### Q10.47. How would you create a custom Hook for API data fetching?

**Answer:**

We can combine `useState`, `useEffect` and `AbortController`.

```javascript
import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const result = await response.json();
        setData(result);

      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err);
        }

      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
```

Usage:

```jsx
function Users() {
  const {
    data,
    loading,
    error
  } = useFetch("/api/users");

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Something went wrong.</p>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

This is a basic reusable fetching Hook. A production implementation may also need caching, retries, request deduplication, pagination and more sophisticated race-condition handling.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
