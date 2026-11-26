# Transport ports and sockets

A transport port is a numbered identifier used with an address and transport protocol to distinguish communication endpoints; a socket is an operating-system or runtime abstraction for network communication.

## Which service receives the data?

An [IP address](/knowledge/ip-address) routes traffic toward an interface. A TCP or UDP port helps deliver that traffic to the appropriate transport endpoint. TCP port 443 and UDP port 443 belong to different transport namespaces.

A TCP connection is commonly identified using the source and destination addresses and ports, together with the transport protocol. A server can serve many clients on one listening port because their connection endpoints differ.

## Example

A development server listening on `127.0.0.1:3000` is reachable through loopback on that machine. Binding to all interfaces can make it reachable from other networks, depending on firewall and routing rules. Changing the port does not provide authentication.

## Debugging

“Connection refused” often indicates that the destination actively rejected the connection, such as when no server is listening. A timeout can have several causes, including packet loss or filtering. Neither message by itself establishes the complete root cause.

Check the bind address, protocol, listening process and firewall policy before changing application code.

## Practice

Run a local [Node.js](/knowledge/nodejs) test server and request it on the correct and incorrect ports. Observe the difference between a connection error and an [HTTP](/knowledge/http) 404. Assessment: explain why a port identifies an endpoint rather than proving which application is actually running there.

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [RFC 9293 — Transmission Control Protocol](https://www.rfc-editor.org/rfc/rfc9293) — IETF.
- [Overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview) — MDN Web Docs.

