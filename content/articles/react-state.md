# React state

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 17910–18283](/research?document=interview&start=17910&end=18283). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## State Management with useState

### Q10.21. What is state in React?

**Answer:**

State is data that a component remembers between renders.

When state changes through its setter, React schedules a new render.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}
```

Here:

- `count` is the current state.
- `setCount` updates the state.
- `0` is the initial state.

### Q10.22. Why shouldn't we directly modify state?

**Answer:**

Directly mutating state does not tell React that the state has changed.

Incorrect:

```javascript
user.age = 21;
```

Correct:

```javascript
setUser(previousUser => ({
  ...previousUser,
  age: 21
}));
```

For arrays:

Incorrect:

```javascript
students.push(newStudent);
```

Correct:

```javascript
setStudents(previousStudents => [
  ...previousStudents,
  newStudent
]);
```

The new array or object reference allows React to observe the state update.

### Q10.23. What is functional state updating?

**Answer:**

Functional state updating passes a function to the state setter. That function receives the previous state.

```javascript
const [count, setCount] = useState(0);

function increment() {
  setCount(previous => previous + 1);
}
```

This is particularly useful when the next value depends on the previous value.

Consider:

```javascript
function incrementThreeTimes() {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
}
```

It may increase by only one because all three calls use the same render's `count` value.

Correct:

```javascript
function incrementThreeTimes() {
  setCount(previous => previous + 1);
  setCount(previous => previous + 1);
  setCount(previous => previous + 1);
}
```

Now the result increases by three.

### Q10.24. What is state batching?

**Answer:**

React can group multiple state updates into one render to improve performance.

```javascript
function updateProfile() {
  setName("Chirag");
  setAge(21);
  setCity("Vadodara");
}
```

Instead of rendering separately for every update, React can batch them.

Modern React supports automatic batching in many situations, including updates originating from Promises and timers when using modern roots.

### Q10.25. Can state be an object or array?

**Answer:**

Yes. State can contain any JavaScript value.

Object:

```javascript
const [user, setUser] = useState({
  name: "Chirag",
  age: 20,
  city: "Vadodara"
});

function updateAge() {
  setUser(previous => ({
    ...previous,
    age: 21
  }));
}
```

Array:

```javascript
const [students, setStudents] = useState([]);

function addStudent(student) {
  setStudents(previous => [...previous, student]);
}

function deleteStudent(id) {
  setStudents(previous =>
    previous.filter(student => student.id !== id)
  );
}
```



## Conditional Rendering, Lists and Events

### Q10.26. What is conditional rendering?

**Answer:**

Conditional rendering means displaying different UI based on a condition.

Using `if`:

```jsx
function Dashboard({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }

  return <h1>Please log in.</h1>;
}
```

Using ternary:

```jsx
{isLoggedIn
  ? <h1>Welcome back!</h1>
  : <h1>Please log in.</h1>}
```

Using logical AND:

```jsx
{count > 0 && <p>You have {count} notifications.</p>}
```

Be careful with:

```jsx
{count && <p>Notifications</p>}
```

If `count` is `0`, React may render `0`.

Prefer:

```jsx
{count > 0 && <p>Notifications</p>}
```

### Q10.27. How do you render lists in React?

**Answer:**

Use JavaScript array methods such as `map()`.

```jsx
function StudentList() {
  const students = [
    { id: 1, name: "Amit" },
    { id: 2, name: "Chirag" },
    { id: 3, name: "Raj" }
  ];

  return (
    <ul>
      {students.map(student => (
        <li key={student.id}>
          {student.name}
        </li>
      ))}
    </ul>
  );
}
```

### Q10.28. How does event handling work in React?

**Answer:**

React supports event props such as:

- `onClick`
- `onChange`
- `onSubmit`
- `onMouseEnter`
- `onKeyDown`

Example:

```jsx
function Button() {
  function handleClick() {
    console.log("Button clicked");
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}
```

Do not invoke the handler while rendering.

Incorrect:

```html
<button onClick={handleClick()}>
  Click
</button>
```

Correct:

```html
<button onClick={handleClick}>
  Click
</button>
```

To pass arguments:

```html
<button onClick={() => deleteStudent(101)}>
  Delete
</button>
```

### Q10.29. What is the React event object?

**Answer:**

Event handlers receive an event object containing information about the event.

```javascript
function SearchBox() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <input
      type="text"
      onChange={handleChange}
    />
  );
}
```

React uses a normalized event interface. Modern React no longer uses the old Synthetic Event pooling behaviour.

### Q10.30. What are controlled and uncontrolled components?

**Answer:**

A controlled input gets its value from React state.

```javascript
function LoginForm() {
  const [email, setEmail] = useState("");

  return (
    <input
      type="email"
      value={email}
      onChange={event => setEmail(event.target.value)}
    />
  );
}
```

An uncontrolled input manages its current value through the DOM.

```jsx
function LoginForm() {
  const emailRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(emailRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={emailRef} type="email" />

      <button type="submit">Submit</button>
    </form>
  );
}
```

| Controlled                  | Uncontrolled             |
| --------------------------- | ------------------------ |
| Value stored in React state | Value maintained by DOM  |
| Uses `value` and `onChange` | Often uses refs          |
| Easy real-time validation   | Useful for simpler forms |
| More explicit control       | Less state management    |

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
