# Transmission Control Protocol

TCP provides a reliable, ordered byte-stream service between endpoints over IP, with connection management, retransmission, flow control and congestion control.

## What the application receives

TCP delivers a stream of bytes. It does not preserve application message boundaries. One write can arrive through several reads, or several writes can be returned in one read. Applications must define framing through lengths, delimiters or another protocol.

TCP uses sequence numbers and acknowledgments to track byte delivery. Lost data can be retransmitted. Flow control protects the receiver's available capacity, while congestion control limits pressure on the network.

## A practical consequence

A receiver that expects one JSON object per socket read can fail when messages are split or combined. A length-prefixed protocol first reads a fixed-size length field, then accumulates exactly that many payload bytes.

[HTTP](/knowledge/http) defines its own message semantics and framing; it should not be replaced by assumptions about packet sizes.

## Reliability has limits

A delivered byte stream does not prove that a remote business operation committed. A client can lose the connection after a server processed a request but before receiving confirmation. Retry design therefore needs application-level idempotency.

TCP does not encrypt content or authenticate a server's real-world identity. [TLS](/knowledge/tls) can supply transport protection above it for appropriate applications.

## Exercise

Explain how a receiver should handle partial data and connection closure. Sketch a request that might be processed twice after a timeout. Assessment: separate network delivery from application success. Prerequisites are [IP addressing](/knowledge/ip-address) and [ports](/knowledge/ports).

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [RFC 9293 — Transmission Control Protocol](https://www.rfc-editor.org/rfc/rfc9293) — IETF.

