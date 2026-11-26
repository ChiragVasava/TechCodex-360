# UART

A UART is a hardware function that transmits and receives asynchronously framed serial data without a shared clock signal between endpoints.

## Framing and agreement

Endpoints agree on a baud rate, data-bit count, parity policy and stop-bit configuration. A start bit lets the receiver synchronize its sampling for a frame. Data commonly uses TX and RX signals with an appropriate shared reference.

UART logic-level signaling is not the same as RS-232 electrical signaling. A USB-to-UART adapter introduces a USB interface and a host [driver](/knowledge/device-driver).

## Practical connection

For two compatible boards, one transmitter connects to the other's receiver and vice versa, with correct grounding and voltage compatibility. Consult exact board documentation before connecting them.

Send a sequence number with each test message so missing or repeated data is visible. A terminal displaying characters proves only part of the communication path.

## Troubleshooting and security

Unreadable output can result from baud or framing mismatch, voltage problems, wrong pins or binary data interpreted as text. Capture raw bytes before guessing.

An exposed serial console can reveal logs or administrative functionality. Remove sensitive logs and define production access controls.

## Exercise

Exchange fixed test records between owned devices and record the settings. Change a framing parameter and describe the observed failure. Assessment: distinguish transport framing from your application message format. Continue with [serialization](/knowledge/serialization) and [debugging](/knowledge/debugging).

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [Raspberry Pi Pico-series documentation](https://www.raspberrypi.com/documentation/microcontrollers/) — Raspberry Pi.
- [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/) — Espressif.

