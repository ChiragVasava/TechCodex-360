# USB enumeration

USB enumeration is the host-driven process that discovers an attached USB device, obtains its descriptors and configures it for subsequent use.

## From attachment to usable interface

At a high level, the host detects attachment, establishes the initial communication state, obtains [descriptors](/knowledge/usb-descriptor), assigns a device address and selects a configuration. Exact details depend on USB generation and device behavior.

The operating system can then bind appropriate [drivers](/knowledge/device-driver) to the exposed interfaces. Driver binding and successful application use are related steps, not synonyms for enumeration.

## Why composite devices matter

One physical device can describe multiple functions. A development board might expose a serial interface and a debug interface. A device's external casing does not determine which interfaces the host discovers.

An endpoint address is local to a USB device's communication model; it is not an Internet [IP address](/knowledge/ip-address).

## Troubleshooting

If a device fails before descriptors can be read, investigate cables, power, signal integrity, controller support and firmware. If descriptors are visible but no application can open the interface, inspect driver binding and access permissions.

Do not “fix” a failure by installing an arbitrary driver from an unknown website. Match the exact hardware and official documentation.

## Practice

Record the operating system's device information before and after attaching a known development board. Identify when the device appears and which interfaces are exposed. Assessment: distinguish successful enumeration from correct class behavior. Next inspect [USB HID](/knowledge/usb-hid) reports on a trusted test device.

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [USB specifications and documents](https://www.usb.org/documents) — USB Implementers Forum.
- [Linux USB API](https://docs.kernel.org/driver-api/usb/index.html) — Linux kernel documentation.

