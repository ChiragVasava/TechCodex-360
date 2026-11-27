# Flaky tests

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 26183–26292](/research?document=interview&start=26183&end=26292). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Debugging, Flaky Tests and QA Best Practices

### Q14.48. What is a flaky test?

A flaky test sometimes passes and sometimes fails without a relevant code change.

Common causes:

- Timing problems.
- Race conditions.
- Unstable network.
- Shared test data.
- Tests depending on execution order.
- External service failures.
- Incomplete cleanup.
- Environment differences.

Bad example:

```python
import timedef test_notification(page):    page.goto("http://localhost:3000")    time.sleep(2)    assert page.get_by_text(        "Notification sent"    ).is_visible()
```

Better:

```python
from playwright.sync_api import expectdef test_notification(page):    page.goto("http://localhost:3000")    expect(        page.get_by_text("Notification sent")    ).to_be_visible(timeout=10000)
```

### Q14.49. What should you do when a test fails?

Follow a systematic debugging process:

1. Read the assertion failure.
2. Identify the failing test.
3. Reproduce the issue.
4. Check test inputs.
5. Inspect application logs.
6. Inspect the browser screenshot or trace.
7. Check network requests and responses.
8. Identify whether the problem is in the test, environment or application.
9. Fix the root cause.
10. Rerun the affected test and regression suite.

Do not immediately change the expected value just to make a test pass.

### Q14.50. Bug vs defect vs error vs failure

| Term       | Meaning                                       |
| ---------- | --------------------------------------------- |
| Error      | Human mistake                                 |
| Defect/Bug | Problem in software                           |
| Failure    | Incorrect behaviour observed during execution |

Example:

- A developer misunderstands a requirement: error.
- The developer writes an incorrect premium formula: defect.
- The application displays the wrong insurance premium: failure.

Terminology can vary between organizations, but this distinction is useful in interviews.

### Q14.51. Defect severity vs priority

**Severity:** How seriously the defect affects the system.

**Priority:** How urgently the defect should be fixed.

| Scenario                                                   | Severity   | Priority |
| ---------------------------------------------------------- | ---------- | -------- |
| Payment processing broken                                  | Critical   | High     |
| Typo on homepage                                           | Low        | Low      |
| Minor defect on a high-traffic campaign page before launch | Low/Medium | High     |

Severity is primarily about impact; priority is about fixing order.

### Q14.52. What is a defect life cycle?

A typical defect lifecycle:

```text
New
 ↓
Assigned
 ↓
Open
 ↓
Fixed
 ↓
Retest
 ↓
Verified
 ↓
Closed
```

If the issue persists after the fix:

```text
Retest
  ↓
Reopened
  ↓
Assigned again
```

Actual workflows differ by organization and tracking tool.

## Connected study

Continue with [testing](/knowledge/testing) and the [complete study library](/study).
