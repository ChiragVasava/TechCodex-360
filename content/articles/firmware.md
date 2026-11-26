# Firmware

Firmware is software closely associated with a device's hardware functions, commonly stored in nonvolatile memory and executed by an embedded processor or controller.

## What firmware controls

Firmware initializes hardware, configures peripherals, handles input and implements device behavior. It may be a small loop, use an [RTOS](/knowledge/rtos), or operate as part of a more complex embedded system.

A bootloader and the main application firmware can be separate components. Firmware is not inherently immutable: many devices support updates.

## A sensor example

An [embedded system](/knowledge/embedded-systems) configures an [I²C](/knowledge/i2c) sensor, reads measurements, checks their range and publishes results using [MQTT](/knowledge/mqtt). Its firmware also handles disconnected sensors and resets.

The same software must respect memory limits, timing constraints and the electrical behavior of the connected hardware.

## Updating safely

An update interrupted by power loss can leave a device unable to boot unless the design provides recovery. Signed updates and secure boot can help establish code authenticity, but key management and rollback policy are equally important.

Configuration data and user secrets should not be assumed safe merely because they reside in flash memory.

## Exercise

Write a state diagram for startup, normal measurement, sensor failure and recovery. Add a version identifier and document the exact board target. Assessment: explain how to distinguish an application bug from a wiring or power problem. Next connect [microcontroller](/knowledge/microcontroller) peripherals with [hardware security](/knowledge/hardware-security).

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [Raspberry Pi Pico-series documentation](https://www.raspberrypi.com/documentation/microcontrollers/) — Raspberry Pi.
- [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/) — Espressif.

