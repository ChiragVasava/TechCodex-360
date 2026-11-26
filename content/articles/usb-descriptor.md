# USB descriptors

USB descriptors are structured data returned by a device to describe its identity fields, configurations, interfaces, endpoints and class-specific capabilities.

## A structured contract

The host reads descriptors during [enumeration](/knowledge/usb-enumeration). Different descriptor types describe different layers. Device descriptors concern the device; configuration and interface descriptors organize functions; endpoint descriptors describe communication endpoints.

A HID report descriptor is class-specific and describes the layout and meaning of [HID](/knowledge/usb-hid) reports. It should not be confused with the general USB device descriptor.

## Practical use

When designing a custom input device, firmware and the host must agree on report layout. If the descriptor claims one layout but firmware sends another, the host may misinterpret data or reject it.

Readable manufacturer strings are useful for diagnostics but are not cryptographic identity credentials.

## Common problems and security

Wrong lengths, inconsistent endpoint declarations and unsupported interface combinations can cause enumeration or driver failures. Validate descriptors against the applicable specification and inspect host diagnostics.

Treat data from external hardware as untrusted. Driver parsers must validate lengths and bounds rather than trusting every declared value.

## Exercise

Compare the descriptors of two trusted peripherals with different functions. Identify which fields describe identity and which describe behavior. Assessment: explain why changing a product string does not transform the implemented device protocol. Continue with [firmware](/knowledge/firmware) and [device drivers](/knowledge/device-driver).

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [USB specifications and documents](https://www.usb.org/documents) — USB Implementers Forum.
- [Device Class Definition for Human Interface Devices](https://www.usb.org/document-library/device-class-definition-hid-111) — USB Implementers Forum.
- [Linux USB API](https://docs.kernel.org/driver-api/usb/index.html) — Linux kernel documentation.

