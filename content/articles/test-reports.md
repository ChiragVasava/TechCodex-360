# Test reporting

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 26432–26496](/research?document=interview&start=26432&end=26496). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Machine-readable test reports and change-focused quality signals

#### What is the difference between JUnit XML and Coverage JSON?

| JUnit XML                         | Coverage JSON                         |
| --------------------------------- | ------------------------------------- |
| Stores test execution results     | Stores code coverage information      |
| Passed and failed tests           | Executed and missing lines            |
| Test duration and failure details | Coverage percentages and line details |
| Used for test reports             | Used for coverage reports             |

Your backend parses both reports to create the execution result displayed in the frontend.

**Overall coverage vs changed-code coverage**

| Overall coverage                      | Changed-code coverage                  |
| ------------------------------------- | -------------------------------------- |
| Measures the whole project            | Focuses on modified code               |
| Can hide untested new changes         | Highlights untested changes            |
| Useful for general quality monitoring | Useful for pull-request quality checks |

**What is Git diff?**

Git diff displays differences between versions of files.

Example:

```bash
git diff
```

It shows added, removed, and modified lines.

Your scanner uses Git diff line mapping to compare changed lines with coverage information.

**What is cyclomatic complexity?**

Cyclomatic complexity measures the number of independent execution paths in a program.

A simplified way to think about it is:

- More decision branches usually mean higher complexity.
- Higher complexity often means more test scenarios are required.

For example:

```python
def check_age(age):    if age >= 18:        return "Adult"    return "Minor"
```

This function has a decision branch.

A more complicated function with many nested conditions generally requires more testing.

**What is modification frequency?**

Modification frequency refers to how often a particular file or section of code changes.

Frequently modified code can be a useful risk signal because repeated changes may introduce regressions.

Important: Your scanner calculates a weighted risk score using multiple factors. Do not claim that it uses machine learning to predict bugs. It is a rule-based risk analysis approach described in your project documentation.

## Connected study

Continue with [testing](/knowledge/testing) and the [complete study library](/study).
