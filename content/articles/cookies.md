# Cookies

## Cookies versus browser databases

Cookies can be established by a server response or, when allowed, page JavaScript. The browser later decides which requests carry them using attributes and policy; matching is more specific than merely visiting the same website. `HttpOnly` prevents JavaScript cookie access and must be set by the server. Cookies are distinct from [local storage](/knowledge/local-storage), [session storage](/knowledge/session-storage), [IndexedDB](/knowledge/indexeddb) and the [password manager](/knowledge/browser-autofill).

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 23009–23085](/research?document=interview&start=23009&end=23085). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Cookies and browser security


### Q13.27. What is HttpOnly?

The `HttpOnly` attribute prevents JavaScript running in the page from reading the cookie through APIs such as `document.cookie`.

Why is it useful?

If an attacker exploits an XSS vulnerability, HttpOnly can make it harder to steal a session cookie through JavaScript.

It does not stop the browser from automatically sending the cookie with matching requests, and it does not prevent every consequence of XSS.

### Q13.28. What is Secure?

The `Secure` attribute tells the browser to send the cookie only over secure HTTPS connections, except for limited localhost development behavior.

Production authentication cookies should normally use `Secure`.

### Q13.29. What is SameSite?

`SameSite` controls when the browser sends a cookie with cross-site requests.

| Attribute | Behavior                                                   |
| --------- | ---------------------------------------------------------- |
| Strict    | Restricts sending cookies in cross-site contexts           |
| Lax       | Allows cookies in certain top-level cross-site navigations |
| None      | Allows cross-site cookie sending; requires Secure          |

Example:

```http
Set-Cookie: refreshToken=abc; HttpOnly; Secure; SameSite=Lax; Path=/ 
```

The right setting depends on your frontend/backend domain arrangement and authentication flow.

### Q13.30. Cookie vs localStorage?

| Cookie                                                      | localStorage                                        |
| ----------------------------------------------------------- | --------------------------------------------------- |
| Automatically sent in matching HTTP requests                | Not automatically sent                              |
| Supports HttpOnly                                           | JavaScript-accessible                               |
| Supports Secure and SameSite                                | No equivalent cookie attributes                     |
| Has expiration controls                                     | Usually persists until cleared                      |
| Can help protect tokens from direct JS reads using HttpOnly | Tokens are exposed to scripts running in the origin |

A useful browser architecture is to keep sensitive session or refresh credentials in appropriately configured HttpOnly cookies.

Storing long-lived bearer tokens in localStorage increases exposure if an attacker achieves script execution through XSS.

### Q13.31. What is CSRF?

CSRF stands for **Cross-Site Request Forgery**.

It occurs when an attacker tricks a victim's browser into making an unwanted authenticated request to a website where the victim is already logged in.

Example:

A user is logged into a banking application. A malicious site attempts to cause the browser to submit a money-transfer request.

Because browsers automatically attach matching cookies, the request may carry the user's session.

**How do you prevent CSRF?**

1. SameSite cookie policy.
2. CSRF tokens.
3. Origin and Referer validation where appropriate.
4. Avoid unsafe state-changing GET endpoints.
5. Carefully designed CORS policies.

A CSRF token is usually a separate unpredictable value that the client must provide with state-changing requests. The server validates it.

Important: CORS alone is not a complete CSRF defense.

---

> Imported lesson from [Browser rendering, Web Components and storage, lines 175–179](/research?document=browser-notes&start=175&end=179). Needs review: examples and claims retain their source context; reading does not certify proficiency.

This plain-text research passage is preserved in the [browser research collection](/study). Read the connected canonical articles for explanations with corrections; the source export is not independently verified.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
