# Git reset, revert, restore and stash

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 2841–2967](/research?document=interview&start=2841&end=2967). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Reset, revert, restore and stash

These commands are particularly important in interviews.

### 1. git reset

Moves the current branch reference and can also change the staging area and working directory.

#### Soft reset

```bash
git reset --soft HEAD~1
```

Moves the branch pointer back one commit but keeps changes staged.

#### Mixed reset

```bash
git reset --mixed HEAD~1
```

Moves the branch pointer back and unstages changes, but keeps modifications in the working directory.

This is the default reset mode.

#### Hard reset

```bash
git reset --hard HEAD~1
```

Moves the branch pointer back and discards tracked working-tree and staging changes that are overwritten by the reset.

Destructive operation

Be careful: uncommitted work can be lost.

### 2. git revert

Creates a new commit that reverses the changes introduced by an earlier commit.

```bash
git revert a123456
```

Suppose your history is:

```text
A --- B --- C --- D
```

You revert `C`:

```text
A --- B --- C --- D --- R
```

`R` reverses the changes introduced by `C` without deleting the original commit.

### 3. Reset vs revert

| Reset                              | Revert                               |
| ---------------------------------- | ------------------------------------ |
| Moves branch pointer               | Creates a new commit                 |
| Can rewrite local history          | Preserves existing history           |
| Useful for unpublished corrections | Useful for shared branch corrections |
| Can discard working changes        | Adds an inverse change               |

**Professional practice:** Prefer `git revert` when undoing a commit that has already been pushed to a shared branch.

### 4. git restore

Discard unstaged changes to a file:

```bash
git restore src/app.ts
```

Unstage a file:

```bash
git restore --staged src/app.ts
```

Restoring can discard edits, so inspect the file first.

### 5. git stash

Temporarily stores uncommitted changes.

Imagine you're working on authentication, but your team urgently asks you to fix a production bug.

Save your unfinished work:

```bash
git stash push -m "WIP authentication"
```

Switch branches:

```bash
git switch hotfix/payment-error
```

Fix the bug and commit it. Then return:

```bash
git switch feature/auth
git stash pop
```

Useful stash commands:

```bash
git stash list
git stash apply
git stash pop
git stash -u
```

- `apply` restores the stash but keeps it in the stash list.
- `pop` restores it and removes it if successful.
- `-u` includes untracked files.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
