# Raspberry Pi Pico family

Raspberry Pi Pico boards are microcontroller development platforms; their processor, wireless features and board details depend on the selected Pico model.

## A microcontroller board

A Pico is not interchangeable with a general-purpose Raspberry Pi single-board computer running a desktop Linux system. Its normal programming model is [embedded firmware](/knowledge/firmware) using a supported SDK or runtime.

The original Pico uses RP2040; other Pico-family boards use different chips or add wireless capability. Record the exact model rather than treating “Pico” as one fixed specification.

## A learning project

Begin with a button and an LED using documented [GPIO](/knowledge/gpio) pins. Add a sensor over [UART](/knowledge/uart), [SPI](/knowledge/spi) or [I²C](/knowledge/i2c). Save the wiring diagram and observed failures.

USB HID projects require an appropriate USB stack and firmware/runtime support. Do not assume every stock MicroPython image provides arbitrary HID behavior.

## Practical limits

Check power paths, voltage tolerance and pin assignments before wiring. An incompatible voltage can damage hardware even if the application is correct.

USB enumeration, serial console output and the main firmware loop are separate diagnostic signals.

## Exercise

Produce a model-specific pin map, flash a supported beginner example and explain recovery after a faulty application image. Assessment: distinguish hardware, SDK and application. Continue with [USB HID](/knowledge/usb-hid) for a harmless, button-triggered macro-pad experiment.

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [Raspberry Pi Pico-series documentation](https://www.raspberrypi.com/documentation/microcontrollers/) — Raspberry Pi.

