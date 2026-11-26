# Universal Serial Bus

USB is a family of standards for connecting hosts and peripherals, defining communication, device discovery and associated electrical and power behavior.

## Why it exists

A computer needs a consistent way to discover peripherals and exchange data with them. USB provides a host-controlled communication architecture and standardized device classes. A compatible keyboard can work through an existing class driver instead of requiring a separate application for every model.

USB is not one connector shape. Connector type, data capability, power capability and supported protocol versions are separate properties. A USB-C connector alone does not establish a cable's speed or every feature a port supports.

## Host, device and controller

A **host** manages the bus and schedules communication. A **device** exposes capabilities to the host. A **hub** expands downstream connectivity. Controllers implement the relevant host or device functions in hardware and software.

A [microcontroller](/knowledge/microcontroller) needs appropriate hardware and firmware support to act as a USB device. An adapter with a USB connector is not necessarily programmable as any desired device class.

```text
application
    ↓
operating-system driver
    ↓
host controller → hub, if present → device controller
                                          ↓
                                  device firmware
```

## Enumeration and descriptors

When a device attaches, the host performs [enumeration](/knowledge/usb-enumeration). It obtains structured [descriptors](/knowledge/usb-descriptor), assigns an address and selects an appropriate configuration. Descriptors describe capabilities such as interfaces and endpoints. The operating system matches interfaces with suitable [drivers](/knowledge/device-driver).

An **interface** groups a function. An **endpoint** is a logical data source or sink on the device. A single physical device can expose several interfaces, such as serial communication and an input device. This is why physical appearance is not a reliable description of USB behavior.

## Transfers and classes

USB defines control, bulk, interrupt and isochronous transfer types with different scheduling and delivery properties. USB “interrupt transfer” does not mean the peripheral arbitrarily interrupts the host outside the USB scheduling model.

[USB HID](/knowledge/usb-hid) defines reports and descriptors for human-interface devices. Mass Storage defines another class of behavior. A keyboard and a storage drive can share a connector while presenting very different interfaces.

## Practical investigation

Connect a trusted peripheral you own and inspect it through your operating system's device information tools. Record the manufacturer/model, exposed interfaces and loaded drivers. Disconnect and reconnect it; note the difference between physical attachment, successful enumeration and application-level function.

For deeper analysis, distinguish software capture from a dedicated hardware protocol analyzer. A software trace does not necessarily show every electrical event on the bus.

## Security and reliability

Descriptors are declarations, not proof that a peripheral is trustworthy. [USB security](/knowledge/usb-security) includes unwanted input, unexpected network interfaces, vulnerable drivers, removable-media risks and physical electrical hazards. Scanning files alone cannot assess all these risks.

A device that repeatedly disconnects may have a cable, power, signal-integrity, firmware or driver problem. Diagnose the layer before replacing code. A charge-only cable can supply power while providing no usable data path.

## Exercise and progression

First learn basic computer architecture and [firmware](/knowledge/firmware). Then trace the lifecycle: attach → enumerate → bind driver → exchange class-specific data. Assessment: explain why “the computer sees the USB device” does not guarantee the application can use it.

A safe next project is a button-triggered HID device that types a fixed harmless message on your own test machine. Embedded, driver, validation and hardware-security engineers use the same architecture to build and assess peripherals.

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [USB specifications and documents](https://www.usb.org/documents) — USB Implementers Forum.
- [Linux USB API](https://docs.kernel.org/driver-api/usb/index.html) — Linux kernel documentation.
- [Device Class Definition for Human Interface Devices](https://www.usb.org/document-library/device-class-definition-hid-111) — USB Implementers Forum.

