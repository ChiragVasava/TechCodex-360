# Git branching and merging

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 2583–2760](/research?document=interview&start=2583&end=2760). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Branching and merging

### 1. What is a branch?

A branch is a movable reference to a commit.

It lets developers work on independent features without directly changing the shared development branch.

Suppose your team has:

| Developer | Branch                  | Task           |
| --------- | ----------------------- | -------------- |
| A         | `feature/auth`          | Authentication |
| B         | `feature/students`      | Student CRUD   |
| C         | `feature/notifications` | Notifications  |

Create a branch:

```bash
git branch feature/auth
```

Switch to it:

```bash
git switch feature/auth
```

Or create and switch in one command:

```bash
git switch -c feature/auth
```

### 2. What is a merge?

A merge integrates changes from another branch into your current branch.

```bash
git switch main
git merge feature/auth
```

A merge can produce a merge commit, which records the integration of the two branch histories.

### 3. Fast-forward merge

A fast-forward merge occurs when the target branch has not advanced independently.

Before:

```text
A --- B --- C   feature/auth
      |
      main
```

After merging `feature/auth` into `main`:

```text
A --- B --- C
            |
            main
            feature/auth
```

Git can simply move the `main` reference forward.

### 4. Three-way merge

A three-way merge considers:

1. The common ancestor.
2. The latest commit on the current branch.
3. The latest commit on the incoming branch.

Git compares both branches against their common ancestor and combines compatible changes.

If it cannot reconcile competing changes, a merge conflict can occur.



## Merge conflicts

### 1. What is a merge conflict?

A merge conflict occurs when Git cannot automatically reconcile competing changes.

Suppose two developers change the same line.

Developer A:

```javascript
const port = 3000;
```

Developer B:

```javascript
const port = 5000;
```

Git may mark the conflict like this:

```text
<<<<<<< HEAD
const port = 3000;
=======
const port = 5000;
>>>>>>> feature/config
```

Meaning:

- `<<<<<<< HEAD`: Current branch's version.
- `=======`: Separates the versions.
- `>>>>>>> feature/config`: Incoming branch's version.

### 2. Resolve a conflict step by step

Suppose you're merging `feature/config` into `main`.

```bash
git switch main
git merge feature/config
```

Check the conflict:

```bash
git status
```

Open the conflicted file and decide what the final code should be.

For example, perhaps the correct application configuration is:

```javascript
const port = process.env.PORT || 3000;
```

Remove the conflict markers, save the file, and stage it:

```bash
git add src/config.js
```

Complete the merge:

```bash
git commit
```

Git may provide a default merge commit message.

### 3. Cancel a merge

If the merge is still in progress and has not been committed:

```bash
git merge --abort
```

This attempts to return your working tree to its pre-merge state.

### 4. How do you reduce conflicts?

- Keep feature branches reasonably short-lived.
- Fetch and integrate updates regularly.
- Divide tasks between developers clearly.
- Avoid unnecessary formatting changes across entire files.
- Communicate when multiple developers need to modify the same module.
- Commit smaller, focused changes.

**Interview point:** Never blindly choose "Accept Current" or "Accept Incoming." Understand both changes and resolve the code according to the intended application behavior.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
