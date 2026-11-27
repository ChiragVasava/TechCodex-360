# React testing

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 26497–26599](/research?document=interview&start=26497&end=26599). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## React Testing

### Q14.59. Why is React testing important?

**Answer:**

Testing verifies that components behave as expected.

| Test type           | Purpose                           |
| ------------------- | --------------------------------- |
| Unit testing        | Test individual functions         |
| Component testing   | Test component behaviour          |
| Integration testing | Test multiple components together |
| End-to-end testing  | Test complete user workflows      |

Testing helps detect regressions, verify user interactions and improve application reliability.

### Q14.60. What is React Testing Library?

**Answer:**

React Testing Library provides utilities to render React components and interact with them as a user would.

Install:

```bash
npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom
npm install -D @testing-library/user-event
```

Example component:

```jsx
function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

Example test:

```jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";

import Counter from "./Counter";

test("increments counter when clicked", async () => {
  const user = userEvent.setup();

  render(<Counter />);

  await user.click(
    screen.getByRole("button", { name: /increment/i })
  );

  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});
```

A typical Vitest configuration includes:

```javascript
// vite.config.js
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/testSetup.js"
  }
});
```

`src/testSetup.js`:

```javascript
import "@testing-library/jest-dom/vitest";
```

Run:

```bash
npx vitest
```

**Testing principle:** Prefer testing visible behaviour and user interactions rather than implementation details.

## Connected study

Continue with [testing](/knowledge/testing) and the [complete study library](/study).
