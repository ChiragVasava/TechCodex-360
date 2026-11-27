# Next.js

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 20097–20228](/research?document=interview&start=20097&end=20228). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## React and Next.js: Important Distinctions

Because your projects use Next.js, you should understand how React and Next.js relate.

### Q10.72. What is the difference between React and Next.js?

**Answer:**

React is a UI library.

Next.js is a React framework that provides additional capabilities.

| React                             | Next.js                                       |
| --------------------------------- | --------------------------------------------- |
| UI library                        | React framework                               |
| Component rendering               | Application rendering and routing conventions |
| Routing usually added separately  | Built-in file-system routing                  |
| No built-in server-side framework | Server-side capabilities                      |
| Build setup required              | Integrated build and development system       |
| Client-side rendering is common   | Supports multiple rendering approaches        |

### Q10.73. What is client-side rendering?

**Answer:**

Client-side rendering means the browser executes JavaScript to render the UI.

Simplified flow:

1. Browser receives HTML.
2. Browser loads JavaScript.
3. React executes.
4. Components render.
5. UI becomes interactive.

### Q10.74. What is server-side rendering?

**Answer:**

Server-side rendering generates HTML on the server and sends it to the browser.

Benefits:

- HTML can be available earlier.
- Useful for search-engine discoverability.
- Can improve initial content delivery.

Next.js supports server-side rendering, static generation and other rendering strategies.

### Q10.75. What is hydration?

**Answer:**

Hydration is the process of attaching React's client-side behaviour to HTML that was previously rendered.

For example:

1. Server produces HTML.
2. Browser displays that HTML.
3. JavaScript loads.
4. React hydrates the relevant component tree.
5. Event handlers and interactive behaviour become active.

A hydration mismatch occurs when the server-rendered output does not match the initial client-rendered output.

Common causes:

- Random values during rendering.
- Current timestamps.
- Different server/client data.
- Browser-only APIs used during initial rendering.
- Incorrect HTML nesting.

### Q10.76. What are Server Components and Client Components in Next.js?

**Answer:**

In the Next.js App Router:

**Server Components:**

- Render on the server.
- Can access server-side resources.
- Cannot use client-side React Hooks such as `useState` or `useEffect`.

**Client Components:**

- Use the `"use client"` directive at the module boundary.
- Can use state and Effects.
- Support browser interactions and event handlers.

Example:

```jsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

A useful architecture is to keep components server-rendered by default and introduce client components where interactivity is required.



## Next.js Application Structure and Data Boundaries

### App Router Files

A `page.tsx` renders a route; a `layout.tsx` wraps a route subtree with shared UI. A folder such as `students/[id]` defines a dynamic segment. Loading and error UI should communicate what the user can do while data is pending or a request fails. Keep examples aligned with the router and Next.js version used by the project. [Official layouts and pages guide](https://nextjs.org/docs/app/getting-started/layouts-and-pages).

### Server and Client Responsibilities

Keep database access and secrets on the server. Introduce a Client Component boundary for state, event handlers and browser APIs. The `"use client"` directive marks a module boundary; it does not mean that the component can never contribute to server-generated initial HTML. Pass appropriate serializable data across the boundary. [Official component-boundary guide](https://nextjs.org/docs/app/getting-started/server-and-client-components).

### Interview Exercise

Design a placement-drive page with a server-loaded drive description and an interactive application form. Explain where authorization is checked, how invalid input is reported, and how the UI refreshes after a successful mutation. Check the installed version's caching behavior rather than assuming all requests are cached or uncached. Never expose a privileged database credential through a public frontend environment variable.

---

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
