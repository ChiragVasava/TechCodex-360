# Data engineering

Data engineering designs and operates systems that collect, transform, store, and deliver data for dependable use. Its output is a usable data product with understood meaning, quality, ownership, and operational limits.

## From events to useful records

A sensor reading is not useful merely because a number arrived. Consumers need its unit, timestamp convention, device identity, validity, and handling of missing or duplicate values. A schema documents structure; a data contract also explains meaning and expectations.

```text
source → ingestion → validation → transformation → storage → consumers
             ↘ failures, lineage, freshness, and ownership ↗
```

Batch pipelines process bounded collections on a schedule or trigger. Streaming pipelines process ongoing arrivals, but still require explicit choices about ordering, late events, retries, and state.

## Example: a laboratory dataset

Keep the original sensor events, record the schema version, and derive a table of daily measurements. When an event is repeated after a retry, use a suitable stable event identifier to avoid unintended duplication. When units change, make that transformation explicit rather than silently mixing values.

[ETL](/knowledge/etl) describes one ordering of extraction, transformation, and loading. [Serialization](/knowledge/serialization) defines the representations that ingestion and storage exchange.

## Quality and operations

Check completeness, freshness, uniqueness, and plausible ranges according to the actual use case. A successful job exit does not establish that the delivered data is correct. Record lineage so an unexpected result can be traced to input versions and transformations.

Restrict access to sensitive fields and define retention and deletion behavior across derived copies. Test replay, partial failure, and schema changes on controlled data before production use.

## Practice

Create a small pipeline that loads timestamped observations, quarantines malformed records, and produces a summary. Run it twice against the same source and explain its duplicate behavior. Assessment: reproduce an output row from its inputs and show a freshness failure. Related skills include [input validation](/knowledge/input-validation), [testing](/knowledge/testing), [observability](/knowledge/observability), and [machine learning](/knowledge/machine-learning).
