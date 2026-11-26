# Hardware security

Hardware security examines how physical components, interfaces, firmware and manufacturing or deployment decisions protect a system's assets and trust boundaries.

## A layered problem

A secure application can still depend on exposed debug interfaces, untrusted firmware or poorly protected keys. Hardware security therefore connects electrical behavior, [firmware](/knowledge/firmware), operating systems and protocols.

Relevant areas include secure boot, authenticated updates, debug access, peripheral trust, key storage, side-channel leakage and fault handling. A side channel observes unintended information such as timing or power consumption; fault injection deliberately introduces a disturbance. Neither is synonymous with destructive electrical damage.

## Example: a deployed sensor

Ask who can update the sensor, whether update authenticity is checked, where credentials are stored, what a debug connector exposes, and how interrupted writes recover. Network encryption alone does not answer these questions.

[USB security](/knowledge/usb-security) and wireless pairing are examples of interface-specific trust problems.

## Evidence and limits

A gadget is not a universal bypass. Hardware revision, configuration, protocol support and physical conditions determine what a test can establish. Preserve exact part numbers, firmware versions and measurement conditions.

Practical assessments belong in owned or explicitly authorized labs. Start with nondestructive observation and purpose-built test boards.

## Exercise

Create a threat model for an [embedded system](/knowledge/embedded-systems) you own. List assets, entry points, expected failures and recovery behavior. Assessment: explain which controls protect confidentiality, integrity and availability, and which claims still need measurement or manufacturer evidence.

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [Raspberry Pi Pico-series documentation](https://www.raspberrypi.com/documentation/microcontrollers/) — Raspberry Pi.
- [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/) — Espressif.
- [Guide to Bluetooth Security — SP 800-121 Rev. 2](https://csrc.nist.gov/pubs/sp/800/121/r2/upd1/final) — NIST.

