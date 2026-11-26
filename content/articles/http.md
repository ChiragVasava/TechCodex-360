# Hypertext Transfer Protocol

HTTP is an application-level protocol that defines request and response semantics for interacting with resources and exchanging representations.

## Messages and representations

A request identifies a target and method, along with fields and sometimes content. A response includes a status and fields, with content where appropriate. A server can return HTML, JSON, images, video or other representations. HTTP is the communication protocol; HTML and JSON are content formats.

```http
GET /articles/usb HTTP/1.1
Host: example.com
Accept: application/json
```

This is illustrative HTTP/1.1 message syntax. Later HTTP versions encode messages differently while retaining much of the same semantics.

## Method and status meaning

GET requests a representation and is defined as safe. POST performs resource-specific processing. A 200 response differs from a 404 or 500, but the application must still interpret the body according to its contract. A successful status is not a guarantee that returned data is correct.

A `Content-Type` field describes the representation. Content can be binary, which explains why DevTools sometimes displays raw bytes instead of readable text.

## Reliability and security

Retry decisions depend on method semantics and application design. Caches must respect freshness and variation rules. Sensitive data should not be placed in URLs casually because URLs are often logged.

Use [HTTPS](/knowledge/https) for protected communication and enforce [authorization](/knowledge/authorization) on the server. The transport does not decide which records a caller may access.

## Practice

Inspect one document request and one image request in browser DevTools. Compare method, status, fields and response body. Assessment: distinguish protocol from content and explain why a browser must parse or decode what it receives.

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [RFC 9110 — HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110) — IETF.
- [Overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview) — MDN Web Docs.

