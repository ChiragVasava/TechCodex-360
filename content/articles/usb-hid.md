# USB Human Interface Device

USB HID is a device class that describes human-interface data through reports and report descriptors, allowing compatible hosts to interpret input and other device data.

## Reports rather than typed text

A keyboard sends information about keys through HID reports. The operating system interprets those reports and applies input handling, including keyboard layout. A report is not simply a UTF-8 string sent to the focused application.

A report descriptor describes the report's fields and meanings. HID also supports devices beyond keyboards, including mice, controllers and other human-interface equipment.

## From button to application

```text
physical button → firmware → HID report
                               ↓
                         host HID driver
                               ↓
                         application event
```

A programmable device can generate the same kind of reports without a physical key press. That capability supports accessibility tools and automated tests as well as security assessments.

## Risks and mistakes

HID emulation does not grant administrator privileges by itself, but unexpected input in an unlocked session can cause unwanted actions. Keyboard layout, timing and application focus make input automation fragile.

[USB enumeration](/knowledge/usb-enumeration) and [descriptors](/knowledge/usb-descriptor) establish the interface; they do not authenticate the operator's intent.

## Exercise

On an isolated machine you own, design a button-triggered macro pad that types a harmless label into a text editor. Include an explicit arm/trigger action and a stop mechanism. Assessment: explain why generating a HID report differs from executing a command inside the host. Continue with [USB security](/knowledge/usb-security).

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [Device Class Definition for Human Interface Devices](https://www.usb.org/document-library/device-class-definition-hid-111) — USB Implementers Forum.
- [Raspberry Pi Pico-series documentation](https://www.raspberrypi.com/documentation/microcontrollers/) — Raspberry Pi.

