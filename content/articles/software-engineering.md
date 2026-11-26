# Software engineering

Software engineering applies systematic practices to specifying, designing, building, evaluating, operating and evolving software under real constraints.

## More than writing code

A working function is one part of a system. Requirements, architecture, tests, release processes, operations and maintenance determine whether the system continues to solve the right problem.

The software development lifecycle is not necessarily a one-way sequence. Teams revisit requirements and design as evidence changes. Different domains need different assurance levels.

## Example: a learning platform

“Save notes” becomes concrete requirements: notes survive restart, belong to the correct user, can be exported and fail visibly if persistence fails. Architecture then assigns responsibilities to UI, API, storage and access control.

[Testing](/knowledge/testing) checks these behaviors, while [observability](/knowledge/observability) helps detect failures during operation.

## Trade-offs

A modular design can make changes safer but introduces boundaries that must be maintained. Reuse is useful when the abstraction matches actual shared behavior; premature abstraction can obscure simple code.

Technical debt is not every imperfect implementation. Record the trade-off, consequence and trigger for revisiting it.

## Security and delivery

Use [input validation](/knowledge/input-validation), explicit [authorization](/knowledge/authorization) and dependency review throughout development. [Git](/knowledge/git) records changes, while [CI/CD](/knowledge/ci-cd) automates repeatable checks and delivery steps.

## Exercise

Take one feature and write acceptance criteria, a failure scenario and a minimal validation plan before implementing it. Assessment: explain the resulting behavior and operational limits without relying on the code's internal structure.

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [Software Engineering Body of Knowledge](https://www.computer.org/education/bodies-of-knowledge/software-engineering) — IEEE Computer Society.
- [Pro Git](https://git-scm.com/book/en/v2) — Git project / Scott Chacon and Ben Straub.

