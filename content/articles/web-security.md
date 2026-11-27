# Web security

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 23391–23552](/research?document=interview&start=23391&end=23552). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Common web security vulnerabilities

This section is particularly important for backend applications handling sensitive user data.

### Q13.44. What is XSS?

XSS stands for **Cross-Site Scripting**.

It occurs when an attacker injects malicious scripts into content that is executed in another user's browser.

Example of unsafe rendering:

```javascript
element.innerHTML = userInput;
```

If `userInput` contains malicious HTML and JavaScript, it could execute in the browser.

Potential consequences:

- Unauthorized actions as the victim.
- Access to page data.
- Manipulation of page content.
- Theft of accessible tokens or information.
- Phishing.

Types of XSS:

| Type          | Explanation                                           |
| ------------- | ----------------------------------------------------- |
| Stored XSS    | Malicious input is stored and later displayed         |
| Reflected XSS | Malicious input is reflected in an immediate response |
| DOM-based XSS | Client-side JavaScript creates the vulnerability      |

**How to prevent XSS?**

1. Escape untrusted content when rendering HTML.
2. Prefer safe text APIs such as `textContent`.
3. Avoid unsafe `innerHTML`.
4. Sanitize HTML when rich HTML input is required.
5. Use a suitable Content Security Policy.
6. Use HttpOnly cookies for sensitive session credentials.
7. Keep dependencies updated.

React escapes ordinary text interpolation by default, but unsafe APIs such as `dangerouslySetInnerHTML` can introduce XSS.

### Q13.45. What is SQL injection?

SQL injection occurs when untrusted input changes the meaning of a SQL statement.

Unsafe:

```javascript
const query = `
  SELECT * FROM users
  WHERE email = '${email}'
`;
```

Safer:

```javascript
const user = await prisma.user.findUnique({
  where: {
    email
  }
});
```

Or parameterized SQL:

```javascript
const result = await prisma.$queryRaw`
  SELECT * FROM users
  WHERE email = ${email}
`;
```

The principle is to separate SQL structure from user-provided values.

### Q13.46. What is NoSQL injection?

NoSQL injection occurs when untrusted input manipulates the structure or operators of a NoSQL query.

Example of unsafe input handling in MongoDB:

```javascript
const user = await User.findOne({
  email: req.body.email,
  password: req.body.password
});
```

If the application accepts objects instead of expected strings, an attacker may attempt operator injection such as:

```json
{
  "email": {
    "$ne": null
  }
}
```

Safer approach:

- Validate the request schema.
- Require expected primitive types.
- Never accept arbitrary MongoDB query objects from users.
- Build database filters from validated fields.
- Use password hashing and password comparison rather than querying for plaintext passwords.

### Q13.47. What is IDOR?

IDOR stands for **Insecure Direct Object Reference**.

It happens when an application uses an object identifier but fails to check whether the current user is authorized to access that object.

Example:

```http
GET /api/applications/101
```

A student changes the ID to `102` and retrieves another student's application.

Solution: Check resource ownership or permission at the backend for every sensitive resource operation.

Never rely on hiding IDs or buttons in the frontend.

### Q13.48. What is SSRF?

SSRF stands for **Server-Side Request Forgery**.

It happens when an attacker tricks the server into making requests to unintended destinations.

Example: A resume-import endpoint accepts a URL:

```json
{
  "url": "http://internal-service/admin"
}
```

If the server fetches arbitrary URLs, an attacker might target internal services or cloud metadata endpoints.

Defenses:

- Allowlist permitted destinations.
- Reject private and loopback IP ranges where not required.
- Validate DNS resolution and redirects.
- Restrict outbound network access.
- Set timeouts and response-size limits.
- Avoid unrestricted URL fetching.

### Q13.49. What is the difference between IDOR and broken access control?

IDOR is one common example of broken access control.

Broken access control is the broader category: an application does not correctly enforce permissions over resources or operations.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
