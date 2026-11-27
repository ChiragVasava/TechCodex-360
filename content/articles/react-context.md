# React Context

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 18699–18839](/research?document=interview&start=18699&end=18839). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Context API and State Management

### Q10.42. What is prop drilling?

**Answer:**

Prop drilling occurs when data is passed through multiple intermediate components just to reach a deeply nested child.

Example:

```text
App
│
└── Dashboard
    │
    └── StudentSection
        │
        └── StudentCard
```

If `StudentCard` needs the logged-in user, the data may have to pass through `Dashboard` and `StudentSection`, even if they do not use it.

This is prop drilling.

### Q10.43. What is Context API?

**Answer:**

Context allows components to share values without explicitly passing props through every intermediate component.

Example:

```jsx
import {
  createContext,
  useContext,
  useState
} from "react";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = userData => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function Profile() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>{user?.name ?? "Guest"}</h2>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Profile />
    </AuthProvider>
  );
}
```

This is a simplified example of authentication state sharing.

### Q10.44. What is the difference between Context API and Redux?

**Answer:**

| Context API                                      | Redux Toolkit                         |
| ------------------------------------------------ | ------------------------------------- |
| Built into React                                 | External state management library     |
| Shares values across component trees             | Centralized state management          |
| Suitable for relatively simple shared state      | Useful for complex application state  |
| No built-in action/reducer architecture required | Uses reducers and actions             |
| Context updates can re-render many consumers     | Supports selector-based subscriptions |

Context is not automatically a complete replacement for Redux.

Engineering recommendation:

- Local UI state: `useState`.
- Related complex local state: `useReducer`.
- Shared application state: Context or a state management library.
- Server data: Consider a dedicated data-fetching/cache library.

### Q10.45. What is server state versus client state?

**Answer:**

Client state is data owned by the frontend application.

Examples:

- Open/closed modal.
- Selected tab.
- Theme.
- Temporary form input.

Server state is data owned by a backend service.

Examples:

- Student records.
- Insurance policies.
- Payment transactions.
- Job applications.

Server state has additional concerns:

- Fetching.
- Caching.
- Refetching.
- Loading.
- Error states.
- Synchronization.
- Invalidation.

Libraries such as TanStack Query help manage server state.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
