# Authentication

Authentication establishes confidence in a claimed identity using credentials or other evidence; it does not itself decide which operations that identity may perform.

## Identity proof and session state

A user may prove possession of a password, cryptographic authenticator or other credential. After successful authentication, a session or token allows subsequent requests to be associated with that identity.

The application must still perform [authorization](/knowledge/authorization) for protected operations. Knowing who a user is does not grant access to every record.

## Example: signing in

A server verifies credentials through an appropriate authentication mechanism, creates a session and sends the client a session reference. Later requests present that reference. Session expiration, revocation and account recovery are part of the design, not optional cleanup details.

Do not store plaintext passwords or invent a custom password-storage algorithm. Use established authentication libraries and reviewed mechanisms.

## Failure and attack resistance

Rate limits and monitoring can help detect guessing. Error messages should avoid unnecessary account enumeration. Recovery flows need the same care as sign-in because a weak recovery path can bypass strong primary authentication.

Use [HTTPS](/knowledge/https) to protect credentials and session traffic in transit. Secure cookie settings and CSRF defenses depend on the selected session architecture.

## Practice

Diagram sign-in, normal access, expiration and sign-out. Add a lost-device or forgotten-credential scenario. Assessment: identify how a stolen session is invalidated and where each request's identity is established. Continue with [input validation](/knowledge/input-validation) and authorization.

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html) — OWASP.

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 22538–22612](/research?document=interview&start=22538&end=22612). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Authentication vs Authorization

### Q13.1. What is authentication?

Authentication is the process of verifying the identity of a user.

It answers:

**Who are you?**

Example: A student enters:

```text
Email: chirag@example.com
Password: ********
```

The backend verifies the credentials and establishes that the user is Chirag.

Common authentication methods:

- Password-based authentication
- OTP-based authentication
- Multi-factor authentication
- Biometric authentication
- OAuth-based sign-in
- Passkeys

### Q13.2. What is authorization?

Authorization determines what an authenticated user is allowed to do.

It answers:

**What are you allowed to access?**

Example:

| Action                   | Student | Company | Admin             |
| ------------------------ | ------- | ------- | ----------------- |
| View own profile         | Yes     | Yes     | Yes               |
| Apply for a drive        | Yes     | No      | Yes, if permitted |
| Create a drive           | No      | Yes     | Yes               |
| View all users           | No      | No      | Yes               |
| Manage platform settings | No      | No      | Yes               |

A user can be authenticated but not authorized to access a particular resource.

### Q13.3. Difference between authentication and authorization?

| Authentication              | Authorization                |
| --------------------------- | ---------------------------- |
| Verifies identity           | Checks permissions           |
| Establishes who the user is | Determines allowed actions   |
| Example: Login              | Example: Admin-only endpoint |
| Answers "Who are you?"      | Answers "What can you do?"   |

**Interview answer:** Authentication verifies who the user is, while authorization determines which resources and operations that user is permitted to access. A successful login does not automatically grant access to every API endpoint.

### Q13.4. What is an authentication factor?

Authentication factors are categories of evidence used to verify identity.

Three common categories:

1. **Something you know:** Password or PIN.
2. **Something you have:** Phone, security key, authenticator device.
3. **Something you are:** Fingerprint or facial biometric.

Multi-factor authentication (MFA) uses two or more different factor categories.

For example, a password plus an authenticator-app code is MFA. Two passwords are not MFA because they belong to the same factor category.

---

> Imported lesson from [Full-stack interview handbook, lines 22949–23008](/research?document=interview&start=22949&end=23008). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Session-based authentication

### Q13.24. What is a session?

A session represents a user's authenticated state across multiple HTTP requests.

HTTP is stateless: each request is independent. Sessions provide a way for a server to remember a user's authentication state.

Example:

1. User logs in.
2. Server creates a session.
3. Server stores session data.
4. Server sends a session identifier to the browser.
5. Browser sends that identifier with subsequent requests.
6. Server looks up the session and identifies the user.

### Q13.25. Where can sessions be stored?

Common options:

- In-memory storage.
- Redis.
- Database.
- Dedicated session store.

For production applications with multiple backend instances, a shared store such as Redis is preferable to process-local memory.

Imagine:

```text
             Load Balancer
             /     |     \
          API 1  API 2  API 3
```

If the session exists only in API 1's memory, a request routed to API 2 may not find it.

A shared Redis session store solves this issue.

### Q13.26. JWT vs session: which should you use?

Use sessions when:

- Server-side revocation is important.
- You want centralized session state.
- Browser-based authentication is your primary use case.
- You need convenient device/session management.

Use JWT access tokens when:

- Multiple APIs need to verify tokens.
- You need portable signed claims.
- Stateless access-token verification is useful.
- You have a deliberate token expiration and revocation strategy.

You can also combine them: short-lived JWT access tokens with server-tracked refresh sessions.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
