# MQTT

MQTT is a client-server publish/subscribe messaging protocol in which clients exchange application messages through a broker using topic names and subscriptions.

## Publisher, broker and subscriber

A sensor publishes a message to a topic such as `lab/temperature`. Interested subscribers receive matching messages through the broker. The publisher does not need every subscriber's address.

A topic is a routing label, not a database table. Payload format is an application decision, often [JSON or another serialization](/knowledge/serialization).

## Delivery semantics

Quality-of-Service levels define protocol delivery behavior, with different acknowledgment and retransmission costs. Retained messages and persistent sessions solve different problems. Retained data represents a stored message for later subscribers; it is not a complete event history.

Protocol delivery guarantees do not automatically make an external business action exactly-once. Consumers need appropriate deduplication and transaction design.

## Security and reliability

Use [TLS](/knowledge/tls) where required, authenticate clients and authorize topic operations. A client allowed to read one sensor topic should not automatically publish device commands.

Define disconnect handling, message-size limits, queue bounds and stale-data detection. A connected broker does not prove a reading is fresh.

## Exercise

Publish sequence-numbered readings to a private test broker. Restart publisher and subscriber and record retained/session behavior. Assessment: explain delivery separately from application processing. Continue with [data engineering](/knowledge/data-engineering).

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [MQTT Version 5.0](https://docs.oasis-open.org/mqtt/mqtt/v5.0/os/mqtt-v5.0-os.html) — OASIS.

