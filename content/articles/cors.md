# Same-Origin Policy and CORS

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 24795–24888](/research?document=interview&start=24795&end=24888). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Same-Origin Policy and CORS

**Q13.68. What is an origin in web development?**

Answer: An origin is defined by three components:

1. Scheme or protocol.
2. Host or domain.
3. Port number.

For example:

`https://example.com:443`

If any of these components changes, the origin is different.

**Q13.69. What is the Same-Origin Policy?**

Answer: Same-Origin Policy is a browser security mechanism that restricts how documents and scripts from one origin can interact with resources from another origin.

It helps prevent malicious websites from freely reading sensitive information from other websites.

For example, JavaScript running on one website cannot normally read private API responses from another website without permission.

**Q13.70. What is CORS?**

Answer: CORS stands for Cross-Origin Resource Sharing. It is a browser security mechanism that allows a server to specify which external origins can access its resources.

It works through HTTP headers such as `Access-Control-Allow-Origin`.

For example, if my React frontend runs on port 3000 and my Express backend runs on port 5000, they have different origins. I may need to configure CORS on the backend to allow the frontend to access its APIs.

**Q13.71. How does CORS work?**

Answer: When a browser makes a cross-origin request, it checks whether the server permits access from the requesting origin.

The server can respond with headers such as:

```http
Access-Control-Allow-Origin: http://localhost:3000
```

For certain requests, the browser first sends a preflight request using the HTTP OPTIONS method.

If the server's CORS response allows the actual request, the browser proceeds according to the CORS rules.

**Q13.72. What is a CORS preflight request?**

Answer: A preflight request is an OPTIONS request sent by the browser before certain cross-origin requests.

It checks whether the server allows the requested HTTP method and headers.

For example, a cross-origin request using a custom authorization header may trigger a preflight request.

Not every cross-origin request requires preflight.

**Q13.73. How do you enable CORS in Express.js?**

Answer: We can use the `cors` middleware in Express to configure which origins are allowed to access our backend.

Example:

```javascript
const cors = require("cors");

app.use(cors({
  origin: "http://localhost:3000"
}));
```

This allows requests from the specified frontend origin.

For production, we should configure an appropriate origin allowlist instead of blindly allowing every origin.

**Q13.74. What is the difference between CORS and Same-Origin Policy?**

Answer:

- Same-Origin Policy: The browser's default security restriction on cross-origin access.
- CORS: A mechanism that allows servers to grant controlled exceptions to those restrictions.

CORS does not disable browser security. It provides a controlled way to permit cross-origin resource access.

**Q13.75. Is CORS a backend security mechanism that prevents unauthorized API requests?**

Answer: Not exactly. CORS is primarily enforced by browsers and controls whether frontend JavaScript can access cross-origin responses.

It does not replace backend authentication or authorization.

For example, an attacker can send requests using tools such as curl or Postman without being restricted by browser CORS enforcement. Therefore, every protected API must independently verify authentication and permissions.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
