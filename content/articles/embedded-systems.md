# Embedded systems

An embedded system combines computing hardware and software within a product or process to perform defined functions, often under timing, power or resource constraints.

## Why embedded computing is different

A desktop application can often rely on a general-purpose operating system and abundant resources. An embedded product may have limited memory, a battery, fixed peripherals and deadlines tied to the physical world. Examples include thermostats, motor controllers and sensor loggers. Not every embedded system is Internet-connected or requires a real-time operating system.

## Architecture and responsibilities

```text
sensor → interface → processor / firmware → output → actuator
                         ↕
                 memory and timing
                         ↕
                 power and protection
```

A [microcontroller](/knowledge/microcontroller) can integrate processing, memory and peripherals. Larger systems may use a processor with external memory and an operating system. [Firmware](/knowledge/firmware) coordinates initialization, measurement, decisions, communication and fault recovery.

[GPIO](/knowledge/gpio) handles digital signals. [UART](/knowledge/uart), [SPI](/knowledge/spi) and [I²C](/knowledge/i2c) provide different peripheral communication mechanisms. Choosing an interface requires electrical compatibility and timing knowledge, not just matching connector labels.

## A concrete sensor logger

Consider a temperature logger:

1. Initialize power-dependent hardware and the sensor interface.
2. Read a measurement at a defined interval.
3. Validate the returned value and communication status.
4. Timestamp and buffer the reading.
5. Store it locally or transmit it, for example through [MQTT](/knowledge/mqtt).
6. Handle disconnected sensors, full buffers and unavailable networks.

A missing measurement should not silently become a valid zero. A network outage should not indefinitely block a time-critical control loop.

## Scheduling choices

A simple system may use a foreground loop with interrupts for specific events. An [RTOS](/knowledge/rtos) can provide tasks, queues and scheduling. The RTOS does not automatically make application deadlines correct.

Keep interrupt handlers bounded. Move longer processing to an appropriate task or foreground loop. Identify worst-case timing and resource contention rather than relying only on average performance.

## Reliability and security

Voltage mismatch, excessive pin current and poor grounding can damage hardware or create misleading software symptoms. Consult the exact board and component documentation.

Plan startup, reset and recovery behavior. Interrupted writes, brownouts and unexpected peripherals are ordinary engineering cases. For connected products, protect credentials, validate commands and define an update mechanism that checks authenticity and tolerates failure.

[Hardware security](/knowledge/hardware-security) asks what an exposed debug port or modified firmware could do, not just whether network traffic is encrypted.

## Learning progression

Begin with a button and indicator on a documented board. Then read a sensor and record errors. Next add buffering, asynchronous communication and tests for reset and disconnection.

An [ESP32](/knowledge/esp32) and a [Raspberry Pi Pico](/knowledge/raspberry-pi-pico) offer different target capabilities; choose an exact model instead of assuming a family name defines the hardware.

Assessment: produce a state diagram, timing budget, pin map and failure log for a small project. Embedded, firmware, IoT and validation engineers use these artifacts to explain both normal operation and what happens when components stop cooperating.

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [Raspberry Pi Pico-series documentation](https://www.raspberrypi.com/documentation/microcontrollers/) — Raspberry Pi.
- [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/) — Espressif.
- [FreeRTOS documentation](https://www.freertos.org/Documentation/00-Overview) — FreeRTOS.

