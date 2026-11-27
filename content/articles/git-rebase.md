# Git rebase

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 2761–2840](/research?document=interview&start=2761&end=2840). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Rebase vs merge

### 1. What is rebase?

Rebase reapplies commits from one branch on top of another base commit.

Suppose:

```text
          C --- D   feature/auth
         /
A --- B --- E       main
```

The feature branch started at `B`, but `main` has advanced to `E`.

Run:

```bash
git switch feature/auth
git rebase main
```

Conceptually, Git reapplies the feature commits:

```text
A --- B --- E --- C' --- D'
                 feature/auth
```

`C'` and `D'` are new commits with new hashes.

### 2. Merge vs rebase

| Merge                             | Rebase                              |
| --------------------------------- | ----------------------------------- |
| Integrates branch histories       | Replays commits on a new base       |
| Can create merge commits          | Usually creates a linear history    |
| Preserves original commits        | Replayed commits get new identities |
| Does not rewrite existing commits | Rewrites the rebased commits        |

### 3. When should you use each?

Use merge when:

- Integrating shared branches.
- Preserving the integration history.
- You want to avoid rewriting shared history.

Use rebase when:

- Updating your personal feature branch.
- Cleaning up unpublished local commits.
- You want a linear history before opening or updating a PR.

**Critical rule:** Avoid rebasing commits that other developers have already based their work on, unless the team explicitly coordinates the history rewrite.

### 4. Interactive rebase

You can modify a sequence of commits:

```bash
git rebase -i HEAD~3
```

Common actions:

| Action   | Purpose                                       |
| -------- | --------------------------------------------- |
| `pick`   | Keep commit                                   |
| `reword` | Change commit message                         |
| `edit`   | Pause to modify commit                        |
| `squash` | Combine commits and edit combined message     |
| `fixup`  | Combine commits and discard the fixup message |
| `drop`   | Remove commit                                 |

This is useful for cleaning up local commit history before sharing it.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
