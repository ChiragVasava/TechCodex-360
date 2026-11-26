# Serial Peripheral Interface

SPI is a synchronous serial interface family in which a controller supplies a clock and selects peripherals for data exchange.

## Signals and transactions

Common signals include clock, controller-to-peripheral data, peripheral-to-controller data and chip select. Names such as MOSI and MISO remain common in device documentation. A selected peripheral interprets clocked bits according to its device-specific protocol.

Clock polarity and phase, bit order, transfer size and maximum clock rate must match the peripheral. SPI is not a universal packet format; register commands and transaction boundaries vary by device.

## Example: reading a sensor register

The controller asserts chip select, sends a command or register address, clocks the response and deasserts chip select according to the datasheet. Some devices require dummy cycles or particular chip-select timing.

An apparently valid byte can still be wrong if the mode or register address is incorrect.

## Trade-offs and safety

SPI can offer low-overhead high-rate communication, but chip-select wiring and electrical loading can limit bus organization. Voltage compatibility and shared-line behavior matter.

Access to SPI flash can expose or corrupt [firmware](/knowledge/firmware); investigation should use owned hardware and documented electrical limits.

## Practice

Use a logic analyzer on an owned sensor transaction. Label chip select, clock and data and compare decoded bytes with the datasheet. Assessment: explain why matching wire names is insufficient without timing and command semantics. Compare with [I²C](/knowledge/i2c) and [UART](/knowledge/uart).

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [Raspberry Pi Pico-series documentation](https://www.raspberrypi.com/documentation/microcontrollers/) — Raspberry Pi.
- [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/) — Espressif.

