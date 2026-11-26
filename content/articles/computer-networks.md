# Computer networks

A computer network connects devices so they can exchange information using agreed communication rules called protocols.

## Layers solve different problems

A physical medium carries signals. A link technology such as Ethernet delivers frames on a link. IP carries packets across networks. A transport such as [TCP](/knowledge/tcp) provides an application-facing communication service. [HTTP](/knowledge/http) defines application messages.

Layer models are explanatory tools, not a requirement that every real implementation fit perfectly into a diagram. Distinguish the OSI reference model from the deployed Internet protocol suite.

## Follow one request

```text
application request
    ↓
transport data
    ↓
IP packet
    ↓
link frame → physical medium → receiving interface
```

A client resolves a name using [DNS](/knowledge/dns), chooses an [IP address](/knowledge/ip-address) and contacts an application endpoint identified partly by a [port](/knowledge/ports). Routers forward traffic between networks; application authorization remains a separate responsibility.

## Common problems

A successful Wi-Fi connection proves neither Internet connectivity nor access to a particular service. Diagnose link state, address configuration, name resolution, transport reachability and application response separately. A firewall can permit one protocol and block another.

Capture only traffic you own or are authorized to inspect; traces can contain sensitive information.

## Practice

Diagram the route from your browser to a local test server. Identify the address, port and application protocol at each endpoint. Assessment: distinguish a DNS failure from a TCP refusal and an HTTP error. Continue with [TLS](/knowledge/tls) to understand how traffic can be protected across untrusted links.

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [RFC 8200 — Internet Protocol, Version 6](https://www.rfc-editor.org/rfc/rfc8200) — IETF.
- [RFC 9293 — Transmission Control Protocol](https://www.rfc-editor.org/rfc/rfc9293) — IETF.
- [Overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview) — MDN Web Docs.

