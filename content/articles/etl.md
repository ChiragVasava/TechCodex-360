# Extract, transform, load

ETL is a data integration pattern in which data is extracted from sources, transformed into a usable representation, and loaded into a destination. ELT changes the order by loading before performing selected transformations in the destination system.

## Responsibilities at each stage

Extraction defines what is read and how progress is tracked. Transformation defines mapping, cleaning, normalization, and derived values. Loading defines how destination records are inserted, replaced, or merged.

Neither acronym specifies a universal tool, schedule, or consistency guarantee. [Data engineering](/knowledge/data-engineering) supplies the broader operational design.

## A measurement example

A source contains a device ID, an event timestamp, a temperature, and its unit. Extract the original rows, validate the contract, convert supported units into the documented target unit, and load the result with the original event ID.

Do not convert missing readings to zero. Quarantine unknown units with an explanation. Keep the source representation so an incorrect transformation can be repaired and replayed.

## Failure and recovery

An interruption can occur after some rows are written but before the job records success. Design retry behavior deliberately: stable keys, transactional boundaries, checkpoints, or staging tables may be appropriate. A checkpoint is only useful when its relationship to committed output is understood.

Source changes during extraction can create an inconsistent view. Decide whether a snapshot, change log, watermark, or other mechanism meets the use case rather than assuming one read sees everything at one instant.

## Exercise

Import a small CSV-like source into a test table. Include a duplicate event, a bad timestamp, and an unsupported unit. Rerun after a simulated interruption and reconcile source, accepted, rejected, and destination counts. Assessment: explain every missing or repeated row. Continue with [serialization](/knowledge/serialization), [input validation](/knowledge/input-validation), and [testing](/knowledge/testing).
