# React Hooks

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 18284–18698](/research?document=interview&start=18284&end=18698). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## React Hooks

### Q10.31. What are React Hooks?

**Answer:**

Hooks are functions that allow functional components to use React features such as state, context, refs and Effects.

Important Hooks:

| Hook          | Purpose                           |
| ------------- | --------------------------------- |
| `useState`    | Local state                       |
| `useEffect`   | Synchronize with external systems |
| `useRef`      | Persistent mutable reference      |
| `useMemo`     | Cache calculated values           |
| `useCallback` | Cache function definitions        |
| `useContext`  | Read context                      |
| `useReducer`  | Manage complex state transitions  |

### Q10.32. What are the Rules of Hooks?

**Answer:**

There are two fundamental rules.

**Rule 1:** Call Hooks only at the top level of a React function component or custom Hook.

Incorrect:

```javascript
if (isLoggedIn) {
  const [user, setUser] = useState(null);
}
```

Correct:

```javascript
const [user, setUser] = useState(null);

if (isLoggedIn) {
  console.log(user);
}
```

**Rule 2:** Do not call Hooks from ordinary JavaScript functions or class components.

Correct locations:

- Function components.
- Custom Hooks.

These rules ensure React can maintain Hook state consistently across renders.

### Q10.33. What is useEffect()?

Very important interview topic

**Answer:**

`useEffect()` allows a component to synchronize with external systems.

Examples:

- Fetching data.
- Subscribing to external events.
- Managing timers.
- Connecting to external services.
- Synchronizing with browser APIs.

Example:

```jsx
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component effect executed");

    return () => {
      console.log("Cleanup executed");
    };
  }, []);

  return <h1>Hello React</h1>;
}
```

The function passed to `useEffect()` is called the Effect setup function.

The returned function is the cleanup function.

### Q10.34. How does the dependency array work in useEffect()?

**Answer:**

There are three common patterns.

**1. No dependency array**

```javascript
useEffect(() => {
  console.log("Effect after every commit");
});
```

The Effect runs after every committed render.

**2. Empty dependency array**

```javascript
useEffect(() => {
  console.log("Effect after initial mount");
}, []);
```

The Effect runs after the initial mount.

**3. Dependency array with values**

```javascript
useEffect(() => {
  console.log("User changed");
}, [userId]);
```

The Effect runs after the initial mount and again when `userId` changes.

Important: In development, React Strict Mode may run an additional setup-and-cleanup cycle. Therefore, don't assume an Effect executes exactly once in every environment.

### Q10.35. What is cleanup in useEffect()?

**Answer:**

Cleanup removes subscriptions or resources created by an Effect.

Example:

```jsx
function Timer() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Running...");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <h2>Timer Component</h2>;
}
```

When the component unmounts, React calls the cleanup function.

React also runs cleanup before re-running an Effect whose dependencies have changed.

Another example:

```javascript
useEffect(() => {
  function handleResize() {
    console.log(window.innerWidth);
  }

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```

### Q10.36. Is useEffect() the same as a component lifecycle method?

**Answer:**

Not exactly.

Class components use lifecycle methods such as:

- `componentDidMount()`
- `componentDidUpdate()`
- `componentWillUnmount()`

Function components use Effects to synchronize with external systems.

| Class lifecycle | Effect-related concept    |
| --------------- | ------------------------- |
| Mount           | Initial Effect setup      |
| Update          | Effect re-synchronization |
| Unmount         | Effect cleanup            |

An Effect is not simply a replacement for every lifecycle method. It is better understood as a synchronization mechanism.

### Q10.37. What is useRef()?

**Answer:**

`useRef()` creates a persistent mutable object whose `.current` property can hold a value between renders.

Updating `.current` does not trigger a re-render.

**Example 1: Accessing DOM**

```jsx
import { useRef } from "react";

function Search() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />

      <button onClick={focusInput}>
        Focus
      </button>
    </>
  );
}
```

**Example 2: Storing a timer ID**

```javascript
const timerRef = useRef(null);

function startTimer() {
  timerRef.current = setInterval(() => {
    console.log("Running");
  }, 1000);
}

function stopTimer() {
  clearInterval(timerRef.current);
}
```

Difference:

| `useState`                 | `useRef`                                          |
| -------------------------- | ------------------------------------------------- |
| Stores state               | Stores mutable reference                          |
| Setter schedules rendering | Changing `.current` does not                      |
| Used for UI data           | Used for DOM access and persistent mutable values |

### Q10.38. What is useMemo()?

**Answer:**

`useMemo()` caches the result of a calculation between renders until its dependencies change.

Example:

```jsx
import { useMemo, useState } from "react";

function StudentDashboard({ students }) {
  const [search, setSearch] = useState("");

  const filteredStudents = useMemo(() => {
    console.log("Filtering students");

    return students.filter(student =>
      student.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [students, search]);

  return (
    <div>
      <input
        value={search}
        onChange={event => setSearch(event.target.value)}
      />

      {filteredStudents.map(student => (
        <p key={student.id}>{student.name}</p>
      ))}
    </div>
  );
}
```

Why use it?

- Avoid repeating expensive calculations unnecessarily.
- Maintain stable calculated values when dependencies have not changed.

Do not use it for every variable. It adds complexity and has its own cost.

### Q10.39. What is useCallback()?

**Answer:**

`useCallback()` caches a function definition between renders until its dependencies change.

```jsx
import { useCallback, useState } from "react";

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>

      <Child onClick={handleClick} />
    </>
  );
}
```

It is useful when a stable function reference matters, such as when passing callbacks to memoized children or using functions as Effect dependencies.

### Q10.40. What is the difference between useMemo() and useCallback()?

**Answer:**

| `useMemo`                         | `useCallback`                         |
| --------------------------------- | ------------------------------------- |
| Caches a calculated value         | Caches a function definition          |
| Returns the memoized result       | Returns the memoized function         |
| Useful for expensive calculations | Useful for stable callback references |

Example:

```javascript
const value = useMemo(
  () => calculateTotal(items),
  [items]
);

const callback = useCallback(() => {
  saveData(items);
}, [items]);
```

### Q10.41. What is useReducer()?

**Answer:**

`useReducer()` manages state using a reducer function.

It is useful when state transitions involve multiple related actions.

```jsx
import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };

    case "RESET":
      return initialState;

    default:
      throw new Error("Unknown action");
  }
}

function Counter() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <>
      <h2>{state.count}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </>
  );
}
```

The reducer receives the current state and an action, then returns the next state.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
