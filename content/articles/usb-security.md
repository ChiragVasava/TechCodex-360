# USB security

USB security concerns the trust, access and failure boundaries created when a host accepts communication, device classes and electrical connections from a peripheral.

## More than removable files

A device that resembles storage can expose a keyboard, network interface or several functions. [USB descriptors](/knowledge/usb-descriptor) describe those functions but do not authenticate their intent. File scanning therefore covers only part of the problem.

**BadUSB** is associated with abuse of device behavior and firmware trust. **HID injection** generates input events. These are distinct from destructive electrical stress devices and from ordinary malware stored in a file.

## Threat model before tools

Record the asset, allowed device classes, user privileges and physical-access assumptions. An unlocked workstation and an unattended industrial controller have different exposure.

Rubber Ducky focuses on input automation; Bash Bunny can expose multiple USB functions; Flipper Zero and O.MG products have model- and firmware-dependent capabilities. Product names are not guarantees of success against any host.

## Defensive assessment

In an authorized isolated lab, attach a trusted test device that exposes an expected interface. Record enumeration, driver binding and endpoint alerts. Then evaluate whether device policy distinguishes permitted from unapproved interfaces. Use harmless input and a clear stopping condition.

Device allowlisting, least privilege, physical controls and monitoring complement each other. A device identifier alone can be spoofed and is not strong identity proof.

## Exercise

Write a test plan for a button-triggered fixed message in a text editor on your own test machine. Include the exact device, expected interfaces, approval scope and cleanup. Assessment: distinguish input generation, file execution, driver exploitation and electrical damage. Continue with [hardware security](/knowledge/hardware-security).

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [USB specifications and documents](https://www.usb.org/documents) — USB Implementers Forum.
- [Device Class Definition for Human Interface Devices](https://www.usb.org/document-library/device-class-definition-hid-111) — USB Implementers Forum.
- [Hak5 documentation](https://docs.hak5.org/) — Hak5.
- [Flipper Zero documentation](https://docs.flipper.net/) — Flipper Devices.

