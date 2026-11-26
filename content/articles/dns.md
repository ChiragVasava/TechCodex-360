# Domain Name System

DNS is a distributed hierarchical naming system that publishes resource records under domain names, including records used to locate Internet services.

## Simple explanation

A memorable name such as `example.com` is not itself an [IP address](/knowledge/ip-address). DNS lets software ask for information associated with that name. Address lookup is one use; mail routing, aliases and other data are also represented by DNS records.

DNS exists so names can be administered in a distributed way while service addresses can change without requiring users to memorize new addresses.

## The hierarchy and its participants

The DNS namespace is a tree rooted at the root zone. Delegation assigns authority for parts of the tree to other name servers.

| Participant | Responsibility |
| --- | --- |
| Stub resolver | Sends a client's lookup request to a resolver |
| Recursive resolver | Obtains the requested answer or an appropriate failure |
| Authoritative server | Answers from the zones it serves |
| Cache | Retains records for their permitted lifetime |

A recursive resolver may already have the answer. On a cache miss, it can follow referrals from root to top-level domain to the authoritative servers for the relevant zone. Actual lookup paths depend on cached delegations and configuration.

```text
application → local resolver → recursive resolver
                                   ↓ cache miss
                            hierarchy / referrals
                                   ↓
                            authoritative answer
```

## Records and caching

An **A** record contains an IPv4 address; **AAAA** contains an IPv6 address. **CNAME** creates an alias to another name. **MX** identifies mail exchangers, and **NS** identifies name servers. The record type is part of the question; DNS is not a single undifferentiated name-to-number table.

A time to live (TTL) limits how long a cached record may be reused under normal rules. Changing an authoritative record does not instantly invalidate all existing caches. Lowering a TTL after a stale record has already been cached cannot retroactively shorten that cache's original lifetime.

## A practical investigation

On a system with the appropriate tool, inspect a domain you control or a public documentation domain:

```text
nslookup example.com
nslookup -type=AAAA example.com
```

Record the resolver used, response type and returned values. Tool behavior and output vary by operating system. Compare the authoritative configuration separately if you administer the zone.

When debugging a local application, confirm whether a hosts-file entry, browser cache or local resolver configuration affects the result. “It works by IP” is evidence about naming, but it is not a complete test of an HTTPS service because certificate identity and virtual-host routing still use names.

## Failure and security

A name that does not exist differs from an existing name without the requested record type. A timeout differs from a negative response. A server failure can reflect upstream resolution or configuration problems.

DNSSEC supplies data-origin authentication and integrity for signed DNS data; it does not encrypt queries. Encrypted resolver transports address different privacy and transport concerns. Neither proves that an application reached through a name is trustworthy.

Do not log unnecessary user query histories. Protect registrar and zone-management access because DNS changes can redirect services.

## Learning progression

Start with [computer networks](/knowledge/computer-networks) and addressing. Then explain a warm-cache and cold-cache lookup, identify the authoritative party, and diagnose one intentionally misspelled name. Assessment: distinguish name resolution from [TCP](/knowledge/tcp) connection setup and [HTTPS](/knowledge/https) identity verification. Network, backend, cloud and reliability engineers use these distinctions when debugging outages.

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [RFC 1034 — Domain Names: Concepts and Facilities](https://www.rfc-editor.org/rfc/rfc1034) — IETF.
- [RFC 1035 — Domain Names: Implementation and Specification](https://www.rfc-editor.org/rfc/rfc1035) — IETF.

