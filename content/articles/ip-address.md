# IP address

An IP address identifies an interface or a set of interfaces for Internet Protocol delivery within an addressing and routing context.

## Address rather than identity

IPv4 uses 32-bit addresses and IPv6 uses 128-bit addresses. An address can change over time, and a device can have several addresses. It is not a reliable permanent identifier for a person or application.

A network prefix determines a block of addresses. Routing uses prefixes to select where packets should go. A private address may be useful inside one network while being reused independently elsewhere.

## Names, addresses and services

[DNS](/knowledge/dns) can return address records for a name. An application then uses a transport protocol and [port](/knowledge/ports) to contact a service. One name can map to several addresses, and many names can point to the same address.

Network address translation can rewrite addressing information. The public address observed by a server may represent many clients.

## Troubleshooting and boundaries

Check the interface, prefix, gateway and intended address family. A reachable IPv4 endpoint does not establish that IPv6 works. An address alone proves neither service health nor [authorization](/knowledge/authorization).

Avoid treating IP allowlists as a substitute for authenticating a user. Addresses can be shared, reassigned or hidden behind proxies.

## Exercise

Inspect your own interface configuration. Label loopback, local network and externally routed addresses where present. Resolve a test domain and note the address families returned. Assessment: explain why changing an IP address does not automatically change a service's name or credentials. Next study [TCP](/knowledge/tcp).

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [RFC 8200 — Internet Protocol, Version 6](https://www.rfc-editor.org/rfc/rfc8200) — IETF.
- [RFC 1034 — Domain Names: Concepts and Facilities](https://www.rfc-editor.org/rfc/rfc1034) — IETF.

