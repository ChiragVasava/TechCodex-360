# Software testing

## Choose the scope of a check

![Testing scopes from unit through integration, API and browser, with production monitoring as feedback.](/diagrams/test-layers.svg)

A unit test isolates a small behavior; integration tests examine boundaries between components; API and browser tests exercise wider paths. These scopes overlap and need not run in a strict sequence. Production monitoring supplies feedback but does not replace pre-release tests. Use the [test strategy](/knowledge/test-strategy) article to decide which checks fit a particular risk.

Software testing evaluates behavior using planned inputs, observations and expected outcomes to reveal defects and provide evidence about requirements.

## Different scopes answer different questions

A unit test isolates a small behavior. An integration test checks cooperating components, such as an API and persistence. An end-to-end test exercises a user-visible workflow through a larger system.

These labels vary across teams; state the actual boundary and dependencies of each test.

## Example: saving a note

A meaningful test creates a note, reloads the application and checks that its content remains. A test that only checks the save function was called does not prove persistence.

Failure cases include invalid input, missing permissions, unavailable storage and duplicate requests. [Input validation](/knowledge/input-validation) and [authorization](/knowledge/authorization) each need different test cases.

## Limits and reliability

Passing tests are evidence for the cases exercised, not proof of universal correctness. Brittle tests can fail after harmless presentation changes; excessive mocking can hide broken integration.

Make test data deterministic and isolate it from real personal data. Restore or clean up test-created records without touching unrelated user work.

## Practice

Write one acceptance criterion, a successful example and a boundary or failure case. Explain what defect each test could detect. Assessment: demonstrate that an intentional behavior regression causes a useful failure. Continue with [debugging](/knowledge/debugging) to investigate failures and [CI/CD](/knowledge/ci-cd) to run important checks consistently.

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [Software Engineering Body of Knowledge](https://www.computer.org/education/bodies-of-knowledge/software-engineering) — IEEE Computer Society.
- [Node.js test runner](https://nodejs.org/api/test.html) — Node.js.

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 24905–25092](/research?document=interview&start=24905&end=25092). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Software Testing Fundamentals

### Q14.1. What is software testing?

Software testing is the process of evaluating an application to identify defects and verify that it behaves according to its requirements.

Imagine you build a student management application with these features:

- Register students.
- Log in.
- View student profiles.
- Update student details.
- Delete student records.

Testing checks whether these features work under expected and unexpected conditions.

For example:

| Input                    | Expected result   |
| ------------------------ | ----------------- |
| Valid email and password | Login succeeds    |
| Incorrect password       | Login rejected    |
| Empty email              | Validation error  |
| Non-existent account     | Appropriate error |
| Expired JWT              | Request rejected  |

**Important:** Testing can reveal the presence of defects, but it cannot prove that software is completely defect-free.

### Q14.2. Why is software testing important?

1. Detects bugs before production.
2. Helps prevent security vulnerabilities.
3. Verifies business requirements.
4. Reduces maintenance costs.
5. Prevents existing functionality from breaking.
6. Improves application reliability.
7. Builds confidence when developers modify code.

Consider an insurance application. If the premium calculation is incorrect, a customer might be charged the wrong amount. Testing financial calculations therefore protects business operations, not just code quality.

### Q14.3. What is verification vs validation?

| Verification                           | Validation                              |
| -------------------------------------- | --------------------------------------- |
| Are we building the product correctly? | Are we building the correct product?    |
| Checks specifications and design       | Checks actual application behaviour     |
| Can include reviews and inspections    | Usually involves executing the software |
| Focuses on conformance to requirements | Focuses on user needs                   |

Example requirement:

> A user must not be able to submit a registration form without an email address.

- **Verification:** Review the design and implementation against the requirement.
- **Validation:** Run the application, submit the form without an email, and check that it is rejected.

### Q14.4. Manual vs automation testing

**Manual testing:** A tester executes test cases manually without writing automation scripts.

**Automation testing:** Scripts and tools execute tests automatically and compare actual results with expected results.

| Manual testing                    | Automation testing                |
| --------------------------------- | --------------------------------- |
| Human executes test cases         | Scripts execute test cases        |
| Useful for exploratory testing    | Useful for repeatable tests       |
| Often slower for repetitive tasks | Efficient for repeated execution  |
| Less initial setup                | Requires automation development   |
| Human observation is valuable     | Consistent assertions and reports |

**Interview point:** Automation does not replace manual testing. Exploratory testing, usability evaluation and situations requiring human judgment still benefit from manual testing.



## Testing Levels and Types

### Q14.5. Explain the four major testing levels

Level 1

**Unit testing**

Tests individual functions or components.

Example: Verify that `calculatePremium()` returns the correct insurance premium.

Level 2

**Integration testing**

Tests interactions between components.

Example: Verify that an Express API correctly saves a student record to PostgreSQL.

Level 3

**System testing**

Tests the complete integrated application.

Example: Register, log in, submit an application and view its status.

Level 4

**Acceptance testing**

Checks whether the system meets business and user requirements.

Example: A business stakeholder verifies that an insurance claim follows the required workflow.

### Q14.6. Functional vs non-functional testing

**Functional testing** verifies what the application does.

Examples:

- Login works.
- User can submit a form.
- API returns the correct response.
- Payment status updates correctly.

**Non-functional testing** evaluates how well the application works.

Examples:

- Performance testing.
- Load testing.
- Stress testing.
- Security testing.
- Accessibility testing.
- Compatibility testing.
- Usability testing.

An API might be functionally correct but take 15 seconds to respond. It passes a functional check but may fail performance expectations.

### Q14.7. Smoke, sanity and regression testing

| Type       | Meaning                                     | Example                                  |
| ---------- | ------------------------------------------- | ---------------------------------------- |
| Smoke      | Basic build verification                    | Can the application start?               |
| Sanity     | Focused check after a small change          | Does updated login validation work?      |
| Regression | Checks existing functionality after changes | Did the login change break registration? |

Remember:

- Smoke testing checks whether the build is stable enough for further testing.
- Sanity testing checks a specific change or area.
- Regression testing checks for unintended side effects.

### Q14.8. What is exploratory testing?

Exploratory testing is an approach where testers simultaneously learn the application, design tests and execute them.

While testing registration, you might try:

- Submitting empty fields.
- Pasting unusually long text.
- Refreshing during submission.
- Opening the same page in multiple tabs.
- Clicking submit repeatedly.
- Using unexpected characters.

It is useful when requirements are incomplete or when testers want to discover unexpected behaviours.

### Q14.9. Positive vs negative testing

**Positive testing:** Valid input should produce the expected result.

```text
Email: chirag@example.com
Password: ValidPassword123

Expected: Registration succeeds
```

**Negative testing:** Invalid input should be handled correctly.

```text
Email: invalid-email
Password: 123

Expected: Validation error
```

A good test suite includes both.

## Connected study

Continue with [testing](/knowledge/testing) and the [complete study library](/study).
