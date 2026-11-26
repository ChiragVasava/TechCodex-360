# Observability

Observability is the ability to investigate a system's internal behavior through the evidence it exposes, commonly including logs, metrics and traces.

## Evidence for questions

Metrics summarize quantities over time. Logs record events and context. Traces connect operations across a request's path. Each reveals different aspects of a failure; collecting all three without a question can still leave a system difficult to understand.

Monitoring checks known conditions. Observability also supports investigating failures that were not anticipated in advance.

## Example: slow article search

Measure request latency and error rate. Correlate a slow request with a trace through content lookup and persistence. Inspect an associated event for a failed dependency, without logging the user's entire private query history.

[DNS](/knowledge/dns), connection establishment, application work and database work can each contribute latency.

## Trade-offs and privacy

High-cardinality labels can make metrics expensive. Detailed logs can contain personal data or secrets. Sampling and retention reduce cost but affect the evidence available during an incident.

Define user-facing reliability goals before setting alert thresholds. An alert should guide a useful response instead of merely announcing activity.

## Practice

Instrument one operation with duration, outcome and a correlation identifier. Trigger a controlled failure and reconstruct what happened. Assessment: distinguish absence of an error log from proof of successful service. Continue with [debugging](/knowledge/debugging), [testing](/knowledge/testing) and [CI/CD](/knowledge/ci-cd).

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [OpenTelemetry documentation](https://opentelemetry.io/docs/) — OpenTelemetry.

