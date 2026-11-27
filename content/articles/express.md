# Express.js

## Follow a request

![Browser request passes validation, authorization, service logic and database access.](/diagrams/request-lifecycle.svg)

This diagram is an example request path, not a required Express architecture. Middleware may reject a request before it reaches a handler. Validate input before using it and authorize access to the specific resource before returning private data. The response then returns to the browser. Explore [middleware](/knowledge/middleware), [validation](/knowledge/input-validation), and [authorization](/knowledge/authorization).

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 20539–20584](/research?document=interview&start=20539&end=20584). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Express.js Fundamentals

**Q11.24. What is Express.js?**

Answer: Express is a minimal web framework built on Node.js. It simplifies HTTP server development by providing routing, middleware, request/response handling, and error-handling patterns.

**Q11.25. How do you install Express?**

```bash
mkdir student-api
cd student-api
npm init -y
npm install express
npm install -D nodemon
```

For an ES Module project, configure `"type": "module"` in `package.json`.

**Q11.26. How do you create an Express server?**

```javascript
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Student API");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
```

**Q11.27. What are **`req`** and **`res`**?**

Answer: `req` is the request object containing information sent by the client. `res` is the response object used to send data back. Common request properties include `req.params`, `req.query`, `req.body`, `req.headers`, and `req.method`.

**Q11.28. What is **`express.json()`**?**

Answer: It is built-in Express middleware that parses incoming JSON request bodies. The parsed JavaScript object becomes available through `req.body`. Register it before routes that need to access the request body.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
