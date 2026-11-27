# React

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 17228–17796](/research?document=interview&start=17228&end=17796). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## React Fundamentals and Architecture

### Q10.1. What is React?

**Answer:**

React is an open-source JavaScript library used to build user interfaces, particularly component-based interfaces.

React allows developers to divide a user interface into reusable components.

For example, a student management application might contain:

```text
Application
│
├── Navbar
│
├── Sidebar
│
├── Dashboard
│   ├── StudentStatistics
│   ├── RecentStudents
│   └── RecentActivities
│
└── Footer
```

Each section can be developed as an independent component.

Important characteristics:

- Component-based architecture.
- Declarative UI development.
- State-driven rendering.
- Reusable components.
- One-way data flow by default.
- Reconciliation.
- Rich ecosystem of libraries.

**Interview insight:** React is primarily concerned with the view layer. Routing, data fetching and application-wide state management can be handled using additional libraries or frameworks.

### Q10.2. Why was React introduced? What problems does it solve?

**Answer:**

Consider a traditional JavaScript application.

You have a dashboard displaying:

- Total students.
- Total companies.
- Pending applications.
- Recent notifications.

When an application is submitted, you may need to update multiple parts of the UI.

With traditional DOM manipulation, you might manually find and update each relevant element.

```javascript
document.querySelector("#total-applications")
  .textContent = 50;

document.querySelector("#pending-applications")
  .textContent = 12;
```

As an application grows, manually managing UI updates becomes difficult.

React provides a declarative approach:

```jsx
function Dashboard() {
  const [applications, setApplications] = React.useState(50);

  return (
    <div>
      <h2>Total Applications: {applications}</h2>

      <button onClick={() => setApplications(applications + 1)}>
        Add Application
      </button>
    </div>
  );
}
```

You update the state, and React updates the UI to reflect that state.

Core principle:

> The UI is a representation of application state.

**Interview insight:** React reduces the need for manually synchronizing individual DOM elements with application data.

### Q10.3. Is React a framework or a library?

**Answer:**

React is primarily a UI library.

It focuses on building user interfaces. It does not prescribe a complete application architecture.

For example, a React application may use:

- React for UI components.
- React Router for client-side routing.
- TanStack Query for server-state management.
- Redux Toolkit for application-wide state.
- Vite for development and bundling.

Next.js provides a more integrated application framework built on React.

### Q10.4. What is component-based architecture?

**Answer:**

Component-based architecture is a development approach in which an application is divided into smaller, independent and reusable UI components.

For example:

```text
Dashboard
│
├── Navbar
├── Sidebar
├── Statistics
│   ├── StudentCard
│   ├── CompanyCard
│   └── ApplicationCard
│
├── RecentApplications
└── Footer
```

Each component has its own responsibility.

Benefits:

1. Reusability.
2. Easier maintenance.
3. Separation of concerns.
4. Easier testing.
5. Better collaboration among developers.

**Practical example:** In UniNest AI, student information cards, application status indicators and company listings can be independent components rather than one large dashboard component.

### Q10.5. What is declarative programming in React?

**Answer:**

Declarative programming means describing what the UI should look like rather than manually specifying every DOM operation required to produce it.

Traditional JavaScript:

```javascript
const heading = document.createElement("h1");

heading.textContent = "Hello Chirag";

document.body.appendChild(heading);
```

React:

```jsx
function App() {
  return <h1>Hello Chirag</h1>;
}
```

React handles the process of updating the DOM when the rendered output needs to change.

**Interview insight:** React follows a declarative, state-driven UI approach.

### Q10.6. What is imperative programming, and how is it different from declarative programming?

**Answer:**

Imperative programming describes how to perform an operation step by step.

Declarative programming describes the desired result.

| Imperative                           | Declarative                     |
| ------------------------------------ | ------------------------------- |
| Describes how                        | Describes what                  |
| Explicit DOM manipulation            | UI described through components |
| Developer manages individual updates | React coordinates UI updates    |
| More manual synchronization          | State-driven rendering          |

### Q10.7. What is one-way data flow in React?

**Answer:**

One-way data flow means data generally flows from parent components to child components through props.

Example:

```jsx
function Parent() {
  const name = "Chirag";

  return <Child name={name} />;
}

function Child({ name }) {
  return <h1>Hello {name}</h1>;
}
```

Here:

1. Parent owns the data.
2. Parent passes data through props.
3. Child receives and displays the data.
4. Child does not directly modify the parent's variable.

A child can request a parent to update state by invoking a callback passed through props.

**Interview insight:** One-way data flow makes application behaviour easier to trace and debug.



## React Setup and Project Structure

*Correction to the question numbering in the opening section: the source curriculum's Q6 and Q7 cover project setup and project structure. One-way data flow is an important React characteristic, not Q7 in the source.*

### Q10.8. How do you create a React application?

**Answer:**

A commonly used setup is React with Vite. Vite provides a development server and production build tooling.

First, check Node.js and npm:

```bash
node -v
npm -v
```

Create a project:

```bash
npm create vite@latest student-dashboard -- --template react

cd student-dashboard

npm install

npm run dev
```

Vite usually starts at:

```text
http://localhost:5173
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

**Interview insight:** Vite is a build tool and development server, not a React framework.

### Q10.9. What is the typical React project structure?

**Answer:**

```text
student-dashboard/
│
├── public/
│   └── logo.svg
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   └── StudentCard.jsx
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   └── Students.jsx
│   │
│   ├── hooks/
│   │   └── useStudents.js
│   │
│   ├── services/
│   │   └── studentService.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── vite.config.js
```

Responsibilities:

| Folder     | Responsibility               |
| ---------- | ---------------------------- |
| components | Reusable UI components       |
| pages      | Route-level screens          |
| hooks      | Reusable custom Hooks        |
| services   | API communication            |
| assets     | Images, icons and fonts      |
| public     | Static files served directly |

This is one possible structure, not a mandatory React convention.

### Q10.10. What happens when a React application starts?

**Answer:**

The entry point is generally `main.jsx`.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Execution flow:

1. Browser loads `index.html`.
2. HTML contains the root DOM element.
3. Vite loads `main.jsx`.
4. React imports the App component.
5. `createRoot()` creates a React root.
6. `root.render()` renders the application.
7. React manages subsequent UI updates.

The HTML generally contains:

```html
<div id="root"></div>
```

React renders the application inside this element.



## JSX and React Components

### Q10.11. What is JSX?

**Answer:**

JSX stands for JavaScript XML.

It is a syntax extension that allows developers to write HTML-like markup inside JavaScript.

```jsx
function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <p>Welcome to my application.</p>
    </div>
  );
}
```

JSX is transformed into JavaScript instructions that React uses to create element descriptions.

### Q10.12. What are the rules of JSX?

**Answer:**

There are five important rules.

**Rule 1: Return one parent element.**

Incorrect:

```jsx
return (
  <h1>Hello</h1>
  <p>Welcome</p>
);
```

Correct:

```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
);
```

Alternatively, use a Fragment:

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>Welcome</p>
  </>
);
```

**Rule 2: Close all elements.**

```jsx
<img src="/logo.png" alt="Logo" />
```

**Rule 3: Use **`className`** instead of **`class`**.**

```jsx
<div className="container">Hello</div>
```

**Rule 4: Use camelCase for most JSX event and property names.**

```html
<button onClick={handleClick}>Click</button>
```

**Rule 5: Put JavaScript expressions inside curly braces.**

```jsx
const name = "Chirag";

function App() {
  return <h1>Hello {name}</h1>;
}
```

### Q10.13. What is the difference between a React element and a React component?

**Answer:**

A component is a function or another supported React component type that describes UI.

An element is a description of what React should render.

Component:

```jsx
function Welcome() {
  return <h1>Welcome</h1>;
}
```

Element:

```javascript
const element = <Welcome />;
```

Think of a component as a reusable definition and an element as a description of its use in the UI.

### Q10.14. What are functional components?

**Answer:**

Functional components are JavaScript functions that return React elements.

```jsx
function StudentCard() {
  return (
    <div>
      <h2>Chirag</h2>
      <p>Computer Science</p>
    </div>
  );
}
```

Use the component:

```jsx
function App() {
  return (
    <div>
      <StudentCard />
      <StudentCard />
    </div>
  );
}
```

Modern React development primarily uses functional components and Hooks.

### Q10.15. What are props in React?

**Answer:**

Props are inputs passed from a parent component to a child component.

```jsx
function StudentCard({ name, course }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{course}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <StudentCard name="Chirag" course="CSE" />
      <StudentCard name="Amit" course="IT" />
    </>
  );
}
```

Important: Props are read-only from the component's perspective. A child should not directly modify the props it receives.

### Q10.16. What is the difference between props and state?

**Answer:**

| Props                         | State                               |
| ----------------------------- | ----------------------------------- |
| Passed from parent            | Managed by component or state owner |
| Read-only                     | Updated through state setters       |
| Configures components         | Represents changing data            |
| Supports parent-to-child flow | Drives UI updates                   |

Example:

```jsx
function Counter({ title }) {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h2>{title}</h2>
      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

Here, `title` is a prop and `count` is state.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
