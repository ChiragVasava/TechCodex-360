# Software testing

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

