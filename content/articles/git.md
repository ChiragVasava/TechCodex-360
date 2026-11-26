# Git

Git is a distributed version-control system that records project snapshots and their history, supporting local work and collaboration through repositories and references.

## Working tree, index and history

The working tree contains checked-out files. The index stages content for the next commit. A commit records a snapshot with parent history and metadata. Branches are movable references to commits, not separate physical folders by definition.

GitHub is a hosting and collaboration service; it is not the Git version-control mechanism itself.

## A deliberate change

```text
git status
git diff
git add path/to/changed-file
git diff --cached
git commit
```

These commands illustrate review before committing. Stage only the intended changes and inspect them. A commit does not automatically publish anything to a remote service.

## Collaboration and recovery

Merging combines histories; conflicts require understanding the intended behavior, not choosing one entire file blindly. Rewriting published history changes commit identities and can disrupt collaborators.

A repository is not a backup for untracked local files or external databases. Credentials committed accidentally can remain in history even after deletion from the latest version.

## Practice

Make two small commits on a practice branch and inspect their difference. Introduce a harmless conflict and resolve it with a behavioral explanation. Assessment: distinguish staged, committed and pushed changes. Continue with [CI/CD](/knowledge/ci-cd) and [software engineering](/knowledge/software-engineering).

## References and verification

These sources are provided for claim review. This article is **Needs review**; no verification date is asserted. Original research ranges, where available, are retained in the catalog.

- [Pro Git](https://git-scm.com/book/en/v2) — Git project / Scott Chacon and Ben Straub.

