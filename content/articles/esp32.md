# ESP32 family

ESP32 names a family of Espressif microcontrollers and related modules; processor cores, radios, USB support and peripheral capabilities vary by exact target.

## Family, chip, module and board

A chip, a module containing that chip, and a development board are different inventory entities. Record their model identifiers. “ESP32” alone does not establish Bluetooth Classic, BLE, Wi-Fi band support or native USB capability for every variant.

Espressif's ESP-IDF provides target-specific documentation and tools. Framework support and board wiring can further limit usable chip features.

## Example project

Build a sensor logger that reads a documented [I²C](/knowledge/i2c) sensor and publishes bounded, timestamped messages over [MQTT](/knowledge/mqtt). Separate sensor failure from network failure and avoid embedding production credentials in publicly shared firmware.

## Hardware constraints

Check pin multiplexing, boot-strapping pins, power requirements and logic levels. A USB connector may connect to a USB-to-UART bridge rather than a native USB device controller.

Wireless performance and power consumption depend on configuration and environment; do not infer measured performance from a product-family description.

## Practice

Create an inventory record for your actual board: chip/module, revision, radio features, interfaces, voltage requirements and official documentation. Assessment: identify capabilities confirmed by that exact model's documentation. Continue with [microcontrollers](/knowledge/microcontroller), [firmware](/knowledge/firmware) and [hardware security](/knowledge/hardware-security).

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/) — Espressif.

