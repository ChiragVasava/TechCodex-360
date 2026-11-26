# HTTPS

HTTPS is HTTP communication secured using TLS, providing confidentiality and integrity in transit and authenticated server identity when certificate validation succeeds.

## What protection means

[HTTP](/knowledge/http) supplies application semantics. [TLS](/knowledge/tls) supplies a protected channel and certificate-based identity checks in typical web use. The client checks that the presented certificate is valid for the requested name and chains to a trusted authority under its policy.

Different HTTP versions use different transport arrangements. Avoid equating all HTTPS connections with one fixed TCP handshake diagram; HTTP/3 uses QUIC with TLS integrated into its security design.

## What HTTPS cannot establish

A correctly encrypted connection can still lead to a malicious website. HTTPS does not validate business claims, eliminate application vulnerabilities or replace [authentication](/knowledge/authentication) and [authorization](/knowledge/authorization).

TLS often terminates at a reverse proxy. Protection between that proxy and the application requires its own deployment decisions.

## Troubleshooting

A certificate-name mismatch differs from an expired certificate or an untrusted issuer. Diagnose the exact validation failure. Disabling verification hides the symptom while removing an important identity check.

Mixed-content rules can also affect pages that try to load insecure subresources.

## Exercise

Inspect the certificate information of a known documentation website in the browser. Identify the requested name and certificate subject names. Assessment: explain why connecting to a server by its raw [IP address](/knowledge/ip-address) may fail identity validation even when [DNS](/knowledge/dns) was the original problem.

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [RFC 9110 — HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110) — IETF.
- [RFC 8446 — TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446) — IETF.

