# Code review

<!-- imported-study-material -->

> Imported lesson from [Full-stack interview handbook, lines 3180–3403](/research?document=interview&start=3180&end=3403). Needs review: examples and claims retain their source context; reading does not certify proficiency.

## Pull requests and code reviews

### 1. What is a Pull Request?

A pull request (PR) is a proposal to integrate changes from one branch into another.

Example:

```text
feature/auth → main
```

The author opens a PR so teammates can inspect, discuss, test and approve the changes before integration.

### 2. Typical team workflow

```text
1. Clone repository
2. Update main
3. Create feature branch
4. Implement changes
5. Run tests
6. Commit changes
7. Push feature branch
8. Open pull request
9. Receive code review
10. Make requested changes
11. CI checks pass
12. Merge pull request
13. Delete feature branch
```

Commands:

```bash
git clone https://github.com/company/recruitment-api.git

cd recruitment-api

git switch main
git pull origin main

git switch -c feature/student-registration
```

After development:

```bash
git add src/
git commit -m "feat: add student registration"
git push -u origin feature/student-registration
```

Then open the PR on GitHub.

### 3. What should a good PR description contain?

Example:

```markdown
# feat: add student registration API

## Summary
Adds student registration functionality.

## Changes
- Added registration endpoint.
- Added request validation.
- Added password hashing.
- Added duplicate email handling.

## Testing
- Tested successful registration.
- Tested duplicate email.
- Tested invalid input.
- Verified password is not returned in the response.

## Related issue
Closes #42
```

A good PR explains what changed, why it changed and how it was tested.

### 4. What is a code review?

A code review is the examination of another developer's changes before they are integrated into the main codebase.

Reviewers check:

- Correctness.
- Readability.
- Security.
- Performance.
- Error handling.
- Tests.
- Architecture.
- Maintainability.
- Consistency with project standards.

#### Example: Review a Recruitment API endpoint

Suppose a teammate writes:

```javascript
app.get("/api/users/:id", async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.params.id
    }
  });

  res.json(user);
});
```

As a reviewer, ask:

1. Is the user authenticated?
2. Is the caller authorized to view this particular user?
3. Does the query handle a missing user?
4. Could sensitive fields such as `passwordHash` be exposed?
5. Is the identifier validated?
6. Are errors handled?
7. Are tests included?

A safer query explicitly selects fields:

```javascript
const user = await prisma.user.findUnique({
  where: { id: req.params.id },
  select: {
    id: true,
    email: true,
    role: true
  }
});
```

The route still needs appropriate authentication, authorization, validation and error handling.

### 5. Review actions

| Action          | Meaning                                                |
| --------------- | ------------------------------------------------------ |
| Approve         | Reviewer approves the changes                          |
| Comment         | Reviewer leaves feedback without blocking or approving |
| Request Changes | Reviewer requests modifications before approval        |

### 6. Draft PR

A draft PR is an unfinished pull request.

It is useful when you want early feedback on architecture or implementation before the changes are ready for final review.

When you push additional commits to the same branch, the existing PR updates automatically.



## Branch protection and team workflows

### 1. Branch protection

Branch protection rules help prevent unsafe or unauthorized changes to important branches.

Common rules:

- Require PRs before merging.
- Require one or more approvals.
- Require CI checks to pass.
- Require review conversations to be resolved.
- Restrict direct pushes.
- Optionally require signed commits or linear history.

Example policy for `main`:

```text
main branch

✓ Pull request required
✓ At least 1 approval
✓ CI checks required
✓ Review conversations resolved
✓ Direct pushes restricted
```

This helps prevent unreviewed or untested changes from entering the shared branch.

### 2. Git Flow

Git Flow is a branching model with long-lived and short-lived branches.

| Branch      | Purpose                  |
| ----------- | ------------------------ |
| `main`      | Production-ready history |
| `develop`   | Integration branch       |
| `feature/*` | Feature development      |
| `release/*` | Release preparation      |
| `hotfix/*`  | Urgent production fixes  |

### 3. GitHub Flow

GitHub Flow is a simpler approach:

1. Keep `main` deployable.
2. Create a branch for a change.
3. Commit changes.
4. Open a PR.
5. Review and test.
6. Merge.
7. Deploy.

#### Git Flow vs GitHub Flow

| Git Flow                    | GitHub Flow                  |
| --------------------------- | ---------------------------- |
| More branch types           | Simpler branch structure     |
| Long-lived `develop` branch | Main-centered development    |
| Release and hotfix branches | Feature branches and PRs     |
| Formal release management   | Continuous delivery friendly |

Neither is universally best. The team's release process determines which workflow makes sense.

## Connected study

Continue with [software engineering](/knowledge/software-engineering) and the [complete study library](/study).
