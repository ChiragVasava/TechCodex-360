# Test strategy

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 25093–25216](/research?document=interview&start=25093&end=25216). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Test Scenarios, Test Cases and Test Planning

### Q14.10. What is a test scenario?

A test scenario describes a high-level functionality or situation that needs testing.

```text
Scenario: Verify user login functionality.
```

It does not necessarily specify every step or expected result.

### Q14.11. What is a test case?

A test case defines the exact conditions, steps, inputs and expected result used to verify a specific behaviour.

Example:

| Field           | Value                                           |
| --------------- | ----------------------------------------------- |
| Test Case ID    | LOGIN_001                                       |
| Feature         | User Login                                      |
| Preconditions   | User account already exists                     |
| Input           | Valid email and password                        |
| Steps           | Open login page, enter credentials, click login |
| Expected Result | User is redirected to dashboard                 |
| Priority        | High                                            |

### Q14.12. What is a test plan?

A test plan defines the overall testing strategy.

It typically includes:

- Testing scope.
- Features to test.
- Features excluded from testing.
- Testing approach.
- Resources and responsibilities.
- Test environment.
- Test schedule.
- Entry and exit criteria.
- Risks and dependencies.

**Difference:**

- Test scenario: What should be tested?
- Test case: How exactly should it be tested?
- Test plan: How will overall testing be organized?

### Q14.13. What is test data?

Test data is information used to execute test cases.

Example:

```json
{
  "validUser": {
    "name": "Chirag",
    "email": "chirag@example.com",
    "password": "ValidPassword123"
  },
  "invalidUser": {
    "name": "",
    "email": "invalid",
    "password": "123"
  }
}
```

Test data can be static, dynamically generated, loaded from a database, retrieved from fixtures or created through APIs.

### Q14.14. Test coverage vs code coverage

**Test coverage** describes how much of the intended functionality, requirements or test scope has been tested.

**Code coverage** measures which parts of source code were executed during testing.

Common measurements:

| Metric             | Meaning                                      |
| ------------------ | -------------------------------------------- |
| Statement coverage | Percentage of executable statements executed |
| Branch coverage    | Percentage of decision branches executed     |
| Function coverage  | Percentage of functions called               |
| Line coverage      | Percentage of executable lines executed      |

Example:

```python
def calculate_discount(price, is_member):    if is_member:        return price * 0.10    return 0
```

A test that only uses `is_member=True` does not exercise the false branch.

**Important interview point:** 100% code coverage does not guarantee defect-free software. A line can execute without its result being meaningfully verified.

### Q14.15. Explain the test pyramid

The test pyramid recommends having many fast, focused tests and fewer expensive end-to-end tests.

**E2E**

Few, slower tests

**Integration**

Moderate number of tests

**Unit tests**

Many, fast tests

Conceptual proportions, not a mandatory numerical ratio.

Why?

- Unit tests are fast and isolate defects.
- Integration tests verify communication between components.
- E2E tests verify complete user workflows but are more expensive and can be more fragile.

## Connected study

Continue with [testing](/knowledge/testing) and the [complete study library](/study).
