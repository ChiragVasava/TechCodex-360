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

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 28007–28082](/research?document=interview&start=28007&end=28082). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Python debugger and logging APIs

### 57. Debugging

Python debugging can be performed using:

- `print()` statements.
- IDE breakpoints.
- VS Code debugger.
- `pdb`.
- Logging.
- Exception tracebacks.

Example using `pdb`:

```python
import pdbdef add(a, b):    pdb.set_trace()    result = a + b    return resultprint(add(10, 20))
```

Common debugger commands include:

| Command      | Purpose               |
| ------------ | --------------------- |
| `n`          | Next line             |
| `s`          | Step into             |
| `c`          | Continue              |
| `p variable` | Print variable        |
| `l`          | Show surrounding code |
| `q`          | Quit debugger         |

### Python logging API

Logging records events that happen while an application runs.

```python
import logginglogging.basicConfig(    level=logging.INFO,    format="%(asctime)s - %(levelname)s - %(message)s")logging.debug("Debug message")logging.info("Application started")logging.warning("Something unusual happened")logging.error("Operation failed")logging.critical("Critical failure")
```

Logging levels from least to most severe:

1. DEBUG
2. INFO
3. WARNING
4. ERROR
5. CRITICAL

In real projects, use logging instead of relying only on `print()` statements.




## Node.js logging and debugger



## Logging, Debugging and Testing

**Q15.30. What is logging?**

Answer: Logging records application events and system behaviour, such as incoming requests, authentication failures, database errors, and background job execution. Structured logging with tools such as Pino or Winston is useful in production.

**Q15.31. How do you debug a Node.js application?**

Answer: Use console logs, stack traces, breakpoints, the Node.js inspector, the VS Code debugger, and request/database logs.

```bash
node --inspect src/server.js
node --inspect-brk src/server.js
```

The second command pauses at the beginning. Do not expose the inspector port to untrusted networks.

---

## Connected study

Continue with [testing](/knowledge/testing) and the [complete study library](/study).
