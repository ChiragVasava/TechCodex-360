# Device drivers

A device driver is software that participates in controlling hardware or a device function through operating-system interfaces.

## Translating abstractions

Applications ask for operations such as reading bytes or receiving input events. A driver translates the relevant operating-system requests into operations understood by a device or supporting subsystem. Drivers can execute in kernel or user space depending on platform and design.

A standard class driver can support many devices implementing the same class. A custom device may require different driver support.

## USB example

A host discovers interfaces through [USB enumeration](/knowledge/usb-enumeration). Driver matching connects those interfaces to software that understands their behavior. Seeing a device in a manager does not establish that the expected driver is bound or that application permissions are correct.

## Reliability and security

Drivers process hardware-originated data and may hold powerful privileges. Incorrect bounds handling or lifecycle management can affect the whole system. Use trusted driver sources and match the operating-system and hardware versions.

Repeatedly reinstalling drivers can obscure the original failure. First record the device identity, current driver, exact error and whether the problem began after a change.

## Exercise

Inspect the driver associated with a trusted USB peripheral. Record provider and version without modifying it. Assessment: explain the division of responsibility among application, operating system, driver and [firmware](/knowledge/firmware). Continue with [debugging](/knowledge/debugging) to build evidence before changing configuration.

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [Linux USB API](https://docs.kernel.org/driver-api/usb/index.html) — Linux kernel documentation.

