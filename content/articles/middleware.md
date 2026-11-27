# Middleware

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 20585–20631](/research?document=interview&start=20585&end=20631). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Middleware and Request Lifecycle

**Q11.29. What is middleware in Express?**

Answer: Middleware is a function that executes during the request-response lifecycle. It can read or modify request data, authenticate users, validate input, log requests, pass control onward, or end the response.

**Q11.30. What does **`next()`** do?**

Answer: `next()` passes control to the next middleware or route handler. If middleware has already sent the response, it should not call `next()` unnecessarily.

**Q11.31. What are the types of middleware?**

Answer: The main types are application-level, router-level, built-in, third-party, and error-handling middleware. Examples include custom logging middleware, `express.json()`, `cors()`, and `helmet()`.

**Q11.32. What is middleware execution order?**

Answer: Express executes middleware in the order in which it is registered. For example, JSON parsing should generally run before routes that read `req.body`; authentication should run before protected handlers.

```javascript
app.use(logger);
app.use(authenticateToken);
app.get("/profile", getProfile);
```

**Q11.33. How do you create custom middleware?**

```javascript
export function requestLogger(req, res, next) {
  const start = Date.now();

  res.on("finish", () => {
    console.log({
      method: req.method,
      path: req.originalUrl,
      status: res.statusCode,
      duration: Date.now() - start
    });
  });

  next();
}
```

Avoid logging passwords, tokens, or sensitive personal information.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
