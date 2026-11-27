# Node.js test runner

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 26600–26625](/research?document=interview&start=26600&end=26625). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Node.js test runner and HTTP testing

**Q14.61. How do you use the Node.js test runner?**

Answer: Node.js provides a built-in test runner and assertion library.

```javascript
import test from "node:test";
import assert from "node:assert/strict";

test("calculates total", () => {
  assert.equal(100 * 3, 300);
});
```

Run it using `node --test`.


**Q14.62. What is Supertest?**

Answer: Supertest is a library for testing HTTP servers and APIs. It allows tests to make HTTP-style requests to an Express app and verify status codes and response bodies. Exporting the Express app separately from the server listener makes testing easier.

---

## Connected study

Continue with [testing](/knowledge/testing) and the [complete study library](/study).
