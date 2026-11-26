# Microcontrollers

A microcontroller integrates a processor core with memory and peripherals intended for controlling embedded tasks.

## Integration and control

A microcontroller commonly combines computation with timers, digital I/O and communication peripherals on one chip. A development board adds practical support such as power regulation, connectors and programming access.

“Microprocessor” and “microcontroller” describe different design emphases rather than an absolute rule about computing power. Inspect the actual part's memory, peripherals, timing and power constraints.

## Example: a timed measurement

[GPIO](/knowledge/gpio) can read a button, a timer can schedule sampling, and [SPI](/knowledge/spi) or [I²C](/knowledge/i2c) can communicate with a sensor. [Firmware](/knowledge/firmware) coordinates these operations.

Interrupts notify software about events. They should usually perform bounded work so they do not delay other time-sensitive activity.

## Electrical and security boundaries

A pin has voltage, current and function limits. A software value of “high” does not mean every attached circuit can safely connect. Debug ports and update interfaces also need a deliberate access policy in deployed products.

An [ESP32](/knowledge/esp32) or [Raspberry Pi Pico](/knowledge/raspberry-pi-pico) board is a concrete learning platform; their capabilities depend on the selected model.

## Practice

Find the official pinout for your exact board. Identify power pins, ground, programmable pins and a supported serial interface. Assessment: explain the difference between chip capability, board wiring and firmware support before connecting a peripheral.

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [Raspberry Pi Pico-series documentation](https://www.raspberrypi.com/documentation/microcontrollers/) — Raspberry Pi.
- [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/) — Espressif.

