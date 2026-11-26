# Transport Layer Security

TLS is a cryptographic protocol family that establishes protected communication channels with confidentiality, integrity and peer authentication according to the selected configuration.

## Handshake and protected data

During a TLS handshake, peers negotiate supported parameters and establish shared traffic secrets. In common web deployments, the server presents a certificate and proves possession of its private key. Application data is then protected using authenticated encryption.

Certificate validation, protocol negotiation and key exchange solve different problems. Encryption without correct identity validation can protect a connection to the wrong peer.

## Application example

A browser uses TLS as part of [HTTPS](/knowledge/https). An [MQTT](/knowledge/mqtt) deployment can also use TLS. The application protocol still defines its own requests, permissions and delivery behavior.

“SSL” is often used informally for TLS, but historical SSL protocols are not interchangeable with modern TLS versions.

## Failure and operational trade-offs

Certificate renewal, trust-store management and key protection are operational responsibilities. A private key leak can compromise identity even if the implementation uses strong algorithms.

TLS protects data in transit, not data already available to either endpoint. Logs and stored records still need appropriate handling.

## Practice

Draw a boundary around the channel TLS protects in a client → proxy → application deployment. Identify who holds certificates and where plaintext becomes available. Assessment: distinguish confidentiality, integrity and authentication, and explain why TLS alone does not authorize a user to read another user's records.

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [RFC 8446 — TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446) — IETF.

