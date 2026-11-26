# Inter-Integrated Circuit

I²C is an addressed serial bus that uses a data line and clock line, with defined signaling, acknowledgment and arbitration behavior.

## Sharing two signal lines

SDA carries data and SCL carries the clock. Conventional I²C uses open-drain signaling with pull-up resistors. A controller starts a transaction, addresses a target, transfers bytes and observes acknowledgments.

The address identifies a target on the bus; it is not an [IP address](/knowledge/ip-address). Check whether documentation writes an address as a seven-bit value or includes a read/write bit in an eight-bit notation.

## Sensor example

A register read may require writing a register pointer followed by a repeated START and read. The exact sequence belongs to the target's documented protocol. An acknowledgment does not prove the device is the expected model or that every command is safe.

## Common failures

Wrong pull-up values, incompatible voltage levels, address collisions and excessive capacitance can cause unreliable transactions. A device can hold a line low after an interrupted transaction; recovery must follow the component and controller documentation.

I²C typically provides no cryptographic authentication. Physical bus access may expose data or device control.

## Practice

Inspect an owned sensor's datasheet, address selection pins and voltage requirements. Capture a known transaction and identify START, address, acknowledgments and STOP. Assessment: distinguish an electrical fault from a wrong register transaction. Compare wiring and addressing trade-offs with [SPI](/knowledge/spi).

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [UM10204 — I2C-bus specification and user manual](https://www.nxp.com/docs/en/user-guide/UM10204.pdf) — NXP Semiconductors.
- [Raspberry Pi Pico-series documentation](https://www.raspberrypi.com/documentation/microcontrollers/) — Raspberry Pi.
- [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/) — Espressif.

