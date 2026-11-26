# Debugging

Debugging is the evidence-driven process of locating, explaining and correcting the causes of unexpected system behavior.

## Reproduce, observe, explain

Start with expected versus actual behavior, the environment and a minimal reproduction. Gather evidence, form a hypothesis, change one relevant variable and compare the result. A symptom disappearing after a restart does not establish its cause.

Breakpoints and the [call stack](/knowledge/call-stack) reveal execution state. Network traces reveal requests and timing. Hardware instruments reveal signals software logs may not capture.

## Example: missing sensor data

Distinguish a sensor that never responds, a parser rejecting bytes, a queue dropping records and a UI failing to display them. Each hypothesis predicts different evidence.

For a web page, a successful [HTTP](/knowledge/http) response does not prove that its contents were valid or rendered correctly.

## Reliable fixes

Preserve the failing evidence, apply the smallest justified correction and verify the original case plus a nearby regression case. Record why the fix addresses the mechanism.

Redact secrets from logs and screenshots. Avoid repeatedly modifying production data while guessing.

## Practice

Create a troubleshooting record with reproduction steps, observations, hypotheses, rejected explanations and final validation. Assessment: another person should be able to follow the reasoning and reproduce the result. Continue with [testing](/knowledge/testing), [observability](/knowledge/observability) and [concurrency](/knowledge/concurrency) for timing-related failures.

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [Chrome DevTools documentation](https://developer.chrome.com/docs/devtools/) — Chrome for Developers.
- [Software Engineering Body of Knowledge](https://www.computer.org/education/bodies-of-knowledge/software-engineering) — IEEE Computer Society.

