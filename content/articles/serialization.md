# Serialization and file formats

Serialization maps structured values into a representation that can be stored or transmitted. Deserialization interprets that representation to recover values according to a format and schema.

## Extension, format, and encoding

A filename extension is a naming convention. A `.dat` file may contain text, packed binary records, or an application-specific format; the extension does not establish its layout. Renaming a file does not convert its contents.

Text encoding maps characters to bytes. A format describes how values are organized. A schema adds constraints and meaning, such as which fields are required and which unit a number represents.

## A small JSON example

```javascript
const original = { device: "lab-sensor", value: 21.5, unit: "C" };
const serialized = JSON.stringify(original);
const restored = JSON.parse(serialized);
console.log(restored.value); // 21.5
```

Successful parsing does not validate an application contract. Check required fields, supported units, numeric limits, and resource bounds before using the result. JSON does not preserve arbitrary language-specific objects, functions, or object identity.

## Binary formats

A fixed-width binary record requires agreement on field sizes, byte order, signedness, and alignment. Changing one of those assumptions can produce plausible but incorrect numbers. Preserve a format version and test against known byte sequences.

Serialization is different from compression and encryption. A binary representation is not automatically secret. Some deserialization mechanisms can construct executable objects; choose a format and parser suitable for untrusted input.

## Exercise

Document a sensor-message schema and round-trip several valid examples. Reject malformed text, missing fields, and oversized input. Assessment: explain what parsing guarantees and what [input validation](/knowledge/input-validation) must still check. Connect this to [UART](/knowledge/uart), [MQTT](/knowledge/mqtt), and [ETL](/knowledge/etl).
