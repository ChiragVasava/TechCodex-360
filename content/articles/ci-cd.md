# Continuous integration and delivery

Continuous integration frequently integrates changes with automated checks; continuous delivery keeps changes releasable, while continuous deployment automatically releases eligible changes under defined policy.

## Pipeline responsibilities

A typical pipeline checks out an exact revision, installs declared dependencies, runs selected tests and builds an artifact. A delivery stage promotes that artifact to an environment.

Continuous delivery and continuous deployment are related practices with different release decisions. A green pipeline should have a clear meaning rather than imply that every possible risk was tested.

## Example

A documentation platform can validate content IDs, test relationship navigation, type-check its code and build static assets on each proposed change. A deployment then uses the validated revision.

Use [Git](/knowledge/git) history to connect a release with its source and checks.

## Security and failure handling

Build scripts execute code. Limit credentials, review third-party actions and avoid exposing deployment secrets to untrusted contributions. Pin or constrain dependencies according to the project's update policy.

Define what happens when deployment partially fails. Rollback may require handling database or content-format compatibility, not just replacing application files.

## Practice

Write a pipeline diagram listing trigger, inputs, checks, artifact and release gate. Identify which failures stop delivery. Assessment: explain how to reproduce the build and how to trace a deployed artifact to a commit. Continue with [testing](/knowledge/testing) and [observability](/knowledge/observability).

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [GitHub Actions documentation](https://docs.github.com/en/actions) — GitHub.
- [Pro Git](https://git-scm.com/book/en/v2) — Git project / Scott Chacon and Ben Straub.

