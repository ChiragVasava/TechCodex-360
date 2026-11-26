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

