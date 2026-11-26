# General-purpose input/output

GPIO provides programmable digital input and output signals through pins whose electrical characteristics and available functions are defined by the hardware.

## Reading and driving signals

An input observes a voltage interpreted as a digital level. An output drives a level according to its configured mode. Pin multiplexing may allow one physical pin to serve GPIO or a peripheral function, but not every function is available on every pin.

A floating input has no stable defined level. An appropriate pull-up or pull-down establishes a default; suitability depends on the circuit.

## Example: a button

Configure a documented input with the required pull resistor and connect a button according to the board's electrical rules. Mechanical contacts can bounce, producing several transitions from one press. Debouncing can be implemented in hardware or software.

## Limits and reliability

A GPIO pin is not a general power supply. Respect voltage tolerance and current limits, use suitable drivers for loads, and check grounding requirements. Bootstrapping pins and reserved functions can affect startup.

Do not copy a pin number from a different [microcontroller](/knowledge/microcontroller) board without checking its pinout.

## Practice

Create a pin table with function, direction, voltage domain and expected idle state before wiring a button-and-LED project. Assessment: distinguish a logic error from floating input or contact bounce. Continue with serial interfaces such as [UART](/knowledge/uart) and [I²C](/knowledge/i2c).

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [Raspberry Pi Pico-series documentation](https://www.raspberrypi.com/documentation/microcontrollers/) — Raspberry Pi.
- [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/) — Espressif.

